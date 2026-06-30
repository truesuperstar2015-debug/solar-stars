import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Solar Stars \u2014 Harness the Power of the Sun',
  description:
    'Solar Stars provides premium residential and commercial solar energy solutions. Cut your energy bills by up to 70%. Get a free quote today.',
  keywords: ['solar energy', 'solar panels', 'renewable energy', 'solar installation', 'energy savings'],
  openGraph: {
    title: 'Solar Stars \u2014 Harness the Power of the Sun',
    description: 'Premium solar energy solutions for homes and businesses. Save up to 70% on energy bills.',
    url: 'https://solarstars.net',
    siteName: 'Solar Stars',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
