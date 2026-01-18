import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '../components/providers';
import { siteConfig } from '../config/site.config';
import { defaultMetadata, defaultViewport } from '../lib/seo';
import { JsonLd } from '../components/JsonLd';
import { organizationJsonLd, websiteJsonLd } from '../lib/json-ld';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = defaultViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body className="h-full bg-white dark:bg-black text-gray-900 dark:text-white font-sans transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
} 