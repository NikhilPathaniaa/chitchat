import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

interface User {
  id: string;
  username: string;
  lastSeen: number;
}

interface Message {
  id: string;
  username: string;
  text: string;
  timestamp: number;
  reactions: { [key: string]: string[] };
  private?: boolean;
  to?: string;
}

const users = new Map<string, User>();
const messages: Message[] = [];

// Cleanup inactive users every minute
setInterval(() => {
  const now = Date.now();
  for (const [id, user] of users.entries()) {
    if (now - user.lastSeen > 60000) { // Remove after 1 minute of inactivity
      users.delete(id);
      io.emit('userLeft', user.username);
    }
  }
}, 60000);

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('join', (username: string) => {
    users.set(socket.id, { id: socket.id, username, lastSeen: Date.now() });
    io.emit('userJoined', Array.from(users.values()));
    socket.emit('previousMessages', messages);
  });

  socket.on('message', (data: { text: string, to?: string }) => {
    const user = users.get(socket.id);
    if (!user) return;

    const message: Message = {
      id: Math.random().toString(36).substr(2, 9),
      username: user.username,
      text: data.text,
      timestamp: Date.now(),
      reactions: {},
      private: !!data.to,
      to: data.to
    };

    messages.push(message);
    if (data.to) {
      // Send private message only to sender and recipient
      const recipientSocket = Array.from(users.entries())
        .find(([_, u]) => u.username === data.to)?.[0];
      if (recipientSocket) {
        io.to(recipientSocket).emit('message', message);
        socket.emit('message', message);
      }
    } else {
      io.emit('message', message);
    }
  });

  socket.on('reaction', ({ messageId, emoji }) => {
    const user = users.get(socket.id);
    if (!user) return;

    const message = messages.find(m => m.id === messageId);
    if (!message) return;

    if (!message.reactions[emoji]) {
      message.reactions[emoji] = [];
    }

    const userIndex = message.reactions[emoji].indexOf(user.username);
    if (userIndex === -1) {
      message.reactions[emoji].push(user.username);
    } else {
      message.reactions[emoji].splice(userIndex, 1);
      if (message.reactions[emoji].length === 0) {
        delete message.reactions[emoji];
      }
    }

    io.emit('messageReaction', { messageId, reactions: message.reactions });
  });

  socket.on('disconnect', () => {
    const user = users.get(socket.id);
    if (user) {
      users.delete(socket.id);
      io.emit('userLeft', user.username);
    }
  });

  // Update user's last seen timestamp on any activity
  socket.on('activity', () => {
    const user = users.get(socket.id);
    if (user) {
      user.lastSeen = Date.now();
    }
  });
});

// Add health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
