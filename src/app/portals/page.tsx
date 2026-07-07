import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Portals from '@/components/Portals';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Portals',
  description:
    'Five role-based portals, one login: School, Teacher, Parent, Student, and Librarian — plus the free DimeSchool Android app with every portal and automatic over-the-air updates.',
  path: '/portals',
});

export default function PortalsPage() {
  return (
    <PageShell title="DimeSchool Portals — One Color Per Role">
      <Portals />
    </PageShell>
  );
}
