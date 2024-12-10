import { Providers } from '@/components/Providers';
import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: 'ChitChat - Privacy-Focused Messaging',
  description: 'Secure, ephemeral messaging with no data storage',
  keywords: ['privacy', 'chat', 'messaging', 'secure communication'],
  openGraph: {
    title: 'ChitChat - Privacy-Focused Messaging',
    description: 'Secure, ephemeral messaging with no data storage',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: 'ChitChat',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
