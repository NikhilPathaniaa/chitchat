'use client';

export const ChatBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-[0.03]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="chat-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 30c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" 
                  fill="currentColor"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#chat-pattern)"/>
      </svg>
    </div>
  );
};

export default ChatBackground;
