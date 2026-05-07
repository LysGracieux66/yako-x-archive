import './globals.css';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Yako X Archive',
  description: 'ヤコ鯖限定 XマッチXPアーカイブ',
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body><Header />{children}</body></html>;
}
