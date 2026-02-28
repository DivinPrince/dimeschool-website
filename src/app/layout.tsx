import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Baloo_2, Plus_Jakarta_Sans } from 'next/font/google';
import { Agentation } from 'agentation';
import { Providers } from '../components/providers';
import { siteConfig } from '../config/site.config';
import { defaultMetadata, defaultViewport } from '../lib/seo';
import { JsonLd } from '../components/JsonLd';
import { organizationJsonLd, websiteJsonLd } from '../lib/json-ld';

const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const displayFont = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = defaultMetadata;
export const viewport: Viewport = defaultViewport;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${bodyFont.variable} ${displayFont.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body className="h-full bg-background text-foreground font-sans antialiased">
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === 'development' && <Agentation />}
      </body>
    </html>
  );
} 
