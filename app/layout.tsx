import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Metal Gear Codec',
  description: 'A simple implementation of the Metal Gear Solid codec, in React and TypeScript.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
