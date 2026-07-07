import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { ChapterHead } from '@/components/Chapter';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Service',
  description:
    'The terms that govern use of DimeSchool: accounts and roles, per-student billing, acceptable use, school data ownership, service availability, and how agreements end.',
  path: '/terms',
});

const sections = [
  {
    heading: 'The service',
    body: `DimeSchool provides a school management platform — student records, enrollment, attendance, assessments, fees, communication, and role-based portals — plus optional MarkEase AI marking. Your school's subscription determines which of these are enabled.`,
  },
  {
    heading: 'Accounts and roles',
    body: `Schools create and manage their own accounts for staff, parents, and students, and control what each role can see and do through permissions. Account holders are responsible for keeping their credentials secure; schools are responsible for granting access only to people they authorize.`,
  },
  {
    heading: 'Billing',
    body: `DimeSchool is billed per student, per term, at the rates published on our pricing page or agreed with our sales team. Staff accounts are unlimited. Fees are payable per term; schools with unpaid balances may have access suspended after reasonable notice.`,
  },
  {
    heading: 'Acceptable use',
    body: `Use DimeSchool only to run your school. Do not attempt to access another school's data, probe or disrupt the service, send unlawful or abusive messages through the SMS and announcement tools, or upload content you have no right to use.`,
  },
  {
    heading: 'Your data',
    body: `Your school owns the data it enters. We process it only to provide the service, as described in our Privacy Policy, and schools can request an export or deletion of their data when the agreement ends.`,
  },
  {
    heading: 'AI marking',
    body: `MarkEase produces draft marks and feedback for teacher review. Teachers remain responsible for the marks they publish; MarkEase results are an aid, not a replacement for professional judgment.`,
  },
  {
    heading: 'Availability and changes',
    body: `We work to keep DimeSchool available and improve it continuously; features may evolve over time. The core platform requires an internet connection, though the biometric attendance gateway buffers check-ins during outages and syncs when connectivity returns.`,
  },
  {
    heading: 'Ending the agreement',
    body: `Schools may stop using DimeSchool at the end of any term. We may suspend or end access for serious or repeated breaches of these terms, with notice where practical. On termination we make your school's data available for export before deletion.`,
  },
  {
    heading: 'Contact',
    body: `Questions about these terms? Email ${siteConfig.contact.email} or call ${siteConfig.contact.phones[0]}.`,
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <section className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <ChapterHead number="L.002" label="Terms of Service" right="Last updated July 2026" />

          <h1 className="chapter-title mt-10 max-w-4xl">Terms of Service</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The short version: use DimeSchool to run your school, pay per student per term, and
            your data stays yours. The details are below.
          </p>

          <div className="mt-14 max-w-3xl space-y-10">
            {sections.map((section, index) => (
              <div key={section.heading}>
                <h2 className="font-display flex items-baseline gap-4 text-xl font-bold tracking-[-0.01em] text-foreground">
                  <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.heading}
                </h2>
                <p className="mt-3 pl-9 text-[15px] leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
