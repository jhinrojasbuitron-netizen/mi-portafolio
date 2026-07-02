import type { Metadata } from 'next';
import './globals.css';
import { AudioProvider } from '@/context/AudioContext';

export const metadata: Metadata = {
  title: 'Jhin Rojas | Portfolio',
  description: 'Systems Engineering Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased" suppressHydrationWarning>
        <AudioProvider>
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}