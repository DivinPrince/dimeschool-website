import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Downloads from '@/components/Downloads';
import { siteConfig } from '@/config/site.config';
import { getRelease } from '@/lib/releases';
import { createPageMetadata } from '@/lib/seo';

export const revalidate = 300;

export const metadata: Metadata = createPageMetadata({
  title: 'Download the Apps',
  description:
    'Free DimeSchool apps: DimeSchool for school staff and DimeSchool Portal for parents and students on Android, and MarkEase AI marking for Windows, macOS, and Android.',
  path: '/download',
});

export default async function DownloadPage() {
  const apps = await Promise.all(
    siteConfig.apps.map(async (app) => ({ app, release: await getRelease(app.manifest) })),
  );

  return (
    <PageShell title="Download the DimeSchool Apps">
      <Downloads apps={apps} />
    </PageShell>
  );
}
