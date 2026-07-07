import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Integrations from '@/components/Integrations';
import Testimonials from '@/components/Testimonials';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'MarkEase AI Marking',
  description:
    'MarkEase grades handwritten answer papers and online exam essays in minutes, not weekends. Teachers review every AI mark before publishing, and students can appeal any mark in-app.',
  path: '/markease',
});

export default function MarkEasePage() {
  return (
    <PageShell title="MarkEase AI Marking — Built Into DimeSchool">
      <Integrations />
      <Testimonials />
    </PageShell>
  );
}
