import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Manifesto from '@/components/Manifesto';
import Testimonials from '@/components/Testimonials';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Why DimeSchool exists: schools are drowning in administrative chaos, and we built one platform to connect administrators, teachers, parents, and students — with MarkEase AI marking built in.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <PageShell title="About DimeSchool — Why Schools Switch">
      <Manifesto />
      <Testimonials />
    </PageShell>
  );
}
