import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Book a live DimeSchool demo or talk to the team. Reach us at team@dime.rw or +250 798 579 079 — Kigali Innovation City, Kigali, Rwanda. Response in under 24 hours on weekdays.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <PageShell title="Contact DimeSchool — Book a Live Demo">
      <Contact />
      <FAQ />
    </PageShell>
  );
}
