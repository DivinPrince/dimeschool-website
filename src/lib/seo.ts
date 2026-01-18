import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/config/site.config';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${siteConfig.domain}`;

export const defaultViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/og-image.png'],
    creator: siteConfig.social.twitter ? `@${siteConfig.social.twitter.split('/').pop()}` : undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon1.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
  category: 'technology',
};

export function createPageMetadata(options: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const { title, description, path = '', image, noIndex = false } = options;
  const url = `${siteUrl}${path}`;
  const pageDescription = description || siteConfig.description;

  return {
    title,
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: pageDescription,
      url,
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      title,
      description: pageDescription,
      images: image ? [image] : undefined,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : undefined,
  };
}
