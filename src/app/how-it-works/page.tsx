import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import ProcessFlow from '@/components/ProcessFlow';
import FAQ from '@/components/FAQ';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'How It Works',
  description:
    'Launch DimeSchool in three steps: sign up in under 2 minutes, import your students and structure with our bulk tools, and go live with portals for staff, parents, and students.',
  path: '/how-it-works',
});

export default function HowItWorksPage() {
  return (
    <PageShell title="How DimeSchool Works — From Sign-Up to Go-Live">
      <ProcessFlow />
      <FAQ />
    </PageShell>
  );
}
