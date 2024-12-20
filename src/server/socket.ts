import { Server, Socket } from 'socket.io';
import { Server as HTTPServer } from 'http';
import type { DefaultEventsMap } from '@socket.io/component-emitter';
import { v4 as uuidv4 } from 'uuid';

export interface SocketWithAuth extends Socket {
  username: string;
  handshake: Socket['handshake'] & {
    auth: {
      username: string;
    };
  };
}

export interface Message {
  id: string;
  username: string;
  content: string;
  timestamp: number;
  to?: string;
  reactions: Array<{ emoji: string; username: string }>;
  attachment?: {
    type: string;
    name: string;
    data: string;
  };
}

interface MessageReaction {
  messageId: string;
  emoji: string;
  type: 'add' | 'remove';
}

const messages: Message[] = [];
const userSockets = new Map<string, SocketWithAuth>();

function broadcastOnlineUsers(io: Server) {
  const onlineUsers = Array.from(userSockets.keys());
  console.log('Server: Broadcasting online users:', onlineUsers);
  io.emit('onlineUsers', onlineUsers);
}

export function initSocket(httpServer: HTTPServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: ['https://chitchat-socket-server.onrender.com', 'http://localhost:3000', 'http://localhost:3001'],
      methods: ['GET', 'POST'],
      credentials: true,
      allowedHeaders: ['authorization', 'content-type']
    },
    allowEIO3: true,
    pingTimeout: 60000,
    pingInterval: 25000,
    transports: ['websocket', 'polling'],
    path: '/socket.io/'
  });

  io.engine.on("connection_error", (err) => {
    console.log('Server: Connection error:', err.req);	// the request object
    console.log('Server: Connection error code:', err.code);	// the error code
    console.log('Server: Connection error message:', err.message);	// the error message
    console.log('Server: Connection error context:', err.context);	// some additional error context
  });

  io.on('connection', (socket: Socket) => {
    const typedSocket = socket as SocketWithAuth;
    
    if (!typedSocket.handshake?.auth?.username) {
      console.log('Server: Client tried to connect without username');
      socket.disconnect();
      return;
    }

    const username = typedSocket.handshake.auth.username;
    typedSocket.username = username;
    
    // Remove any existing socket for this username
    if (userSockets.has(username)) {
      const existingSocket = userSockets.get(username);
      if (existingSocket) {
        existingSocket.disconnect();
        userSockets.delete(username);
      }
    }
    
    // Store user socket
    userSockets.set(username, typedSocket);
    console.log('Server: User connected:', username);
    console.log('Server: Current online users:', Array.from(userSockets.keys()));
    
    // Broadcast online users to all clients
    broadcastOnlineUsers(io);

    socket.on('disconnect', () => {
      console.log('Server: User disconnecting:', username);
      userSockets.delete(username);
      broadcastOnlineUsers(io);
    });

    socket.on('getOnlineUsers', () => {
      const onlineUsers = Array.from(userSockets.keys());
      console.log('Server: Client requested online users. Broadcasting:', onlineUsers);
      io.emit('onlineUsers', onlineUsers); // Broadcast to all clients
    });

    socket.on('joinRoom', ({ targetUsername }: { targetUsername: string | null }) => {
      if (!typedSocket.username) return;

      // Leave all rooms first
      socket.rooms.forEach(room => {
        if (room !== socket.id) {
          socket.leave(room);
        }
      });

      if (targetUsername) {
        // Join private chat room
        const room = [typedSocket.username, targetUsername].sort().join('-');
        socket.join(room);
        console.log('Server: User', username, 'joined room:', room);
        
        // Send previous messages for this room
        const roomMessages = messages.filter(m => {
          const messageUsers = [m.username, m.to].sort().join('-');
          return messageUsers === room;
        });
        socket.emit('previousMessages', roomMessages);
      } else {
        // Send public messages
        const publicMessages = messages.filter(m => !m.to);
        socket.emit('previousMessages', publicMessages);
      }
    });

    socket.on('message', (data: { content: string; to?: string; attachment?: { type: string; name: string; data: string } }) => {
      if (!typedSocket.username) return;

      const message: Message = {
        id: uuidv4(),
        username: typedSocket.username,
        content: data.content,
        timestamp: Date.now(),
        reactions: [],
        to: data.to,
        attachment: data.attachment
      };

      if (data.to) {
        // Send private message only to sender and recipient
        const targetSocket = userSockets.get(data.to);
        if (targetSocket) {
          console.log('Server: Sending private message from', username, 'to', data.to);
          targetSocket.emit('message', message);
          socket.emit('message', message);
        }
      } else {
        // Public message
        io.emit('message', message);
      }

      messages.push(message);
    });

    socket.on('messageReaction', ({ messageId, emoji, type }: MessageReaction) => {
      if (!typedSocket.username) return;

      const message = messages.find(m => m.id === messageId);
      if (!message) {
        console.log('Message not found:', messageId);
        return;
      }

      if (type === 'add') {
        // Add reaction if it doesn't exist
        if (!message.reactions.some(r => r.emoji === emoji && r.username === typedSocket.username)) {
          message.reactions.push({ emoji, username: typedSocket.username });
        }
      } else {
        // Remove reaction
        message.reactions = message.reactions.filter(
          r => !(r.emoji === emoji && r.username === typedSocket.username)
        );
      }

      // Broadcast the reaction update
      if (message.to) {
        // Private message reaction
        const room = [message.username, message.to].sort().join('-');
        io.to(room).emit('messageReaction', {
          messageId,
          emoji,
          username: typedSocket.username,
          type
        });
      } else {
        // Public message reaction
        io.emit('messageReaction', {
          messageId,
          emoji,
          username: typedSocket.username,
          type
        });
      }
    });
  });

  return io;
}
