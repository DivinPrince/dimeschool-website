import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Features from '@/components/Features';
import WhyChoose from '@/components/WhyChoose';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Features',
  description:
    'Everything DimeSchool runs for your school: student records, enrollment, biometric attendance, fees & Mobile Money, bulk SMS, online exams with live monitoring, and role-based portals for every role.',
  path: '/features',
});

export default function FeaturesPage() {
  return (
    <PageShell title="DimeSchool Features — The Complete School Management Platform">
      <Features />
      <WhyChoose />
    </PageShell>
  );
}
