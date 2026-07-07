import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Pricing',
  description:
    'Simple per-student, per-term pricing: DimeSchool from 2,999 RWF or DimeSchool + MarkEase AI marking from 4,999 RWF per student per term. Unlimited staff accounts, no surprises.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <PageShell title="DimeSchool Pricing — Per-Student, Per-Term">
      <Pricing />
      <FAQ />
    </PageShell>
  );
}
