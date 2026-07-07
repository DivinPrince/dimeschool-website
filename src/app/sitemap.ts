import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

// Every entry here is a real route under src/app. When adding a page, add its
// path below; product pages under /services/[id] are derived from the config.
const staticRoutes: { path: string; changeFrequency: ChangeFrequency; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/features', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/markease', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/how-it-works', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/portals', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/careers', changeFrequency: 'weekly', priority: 0.5 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${siteConfig.domain}`;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const productPages: MetadataRoute.Sitemap = siteConfig.products.map((product) => ({
    url: `${siteUrl}/services/${product.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages];
}
