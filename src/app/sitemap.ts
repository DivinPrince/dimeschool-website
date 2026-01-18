import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${siteConfig.domain}`;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/careers`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];

  const productPages: MetadataRoute.Sitemap = siteConfig.products.map((product) => ({
    url: `${siteUrl}/services/${product.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = siteConfig.blog.map((post, index) => ({
    url: `${siteUrl}/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
