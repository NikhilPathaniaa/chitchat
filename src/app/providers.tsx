'use client';

import { SocketProvider } from '@/context/SocketContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SocketProvider>
      {children}
    </SocketProvider>
  );
}
