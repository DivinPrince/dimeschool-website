import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import FAQ from '@/components/FAQ';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'FAQ',
  description:
    'Answers to common questions about DimeSchool: student logins, Mobile Money payments, SMS to parents, biometric attendance, custom grading, data migration, mobile access, and data security.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <PageShell title="DimeSchool FAQ — Frequently Asked Questions">
      <FAQ />
    </PageShell>
  );
}
