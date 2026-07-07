import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { ChapterHead } from '@/components/Chapter';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description:
    'How DimeSchool collects, uses, and protects school, student, and parent data — encryption in transit and at rest, role-based access controls, and full audit logs.',
  path: '/privacy',
});

const sections = [
  {
    heading: 'What we collect',
    body: `DimeSchool stores the information schools enter to run their operations: student, parent, and staff records; enrollment, class, and attendance data (including check-ins from connected biometric devices); assessment results and report cards; fee and payment records; and messages sent through the platform. Website visitors who contact us share only the details they submit in the contact form.`,
  },
  {
    heading: 'How we use it',
    body: `School data is used solely to provide the DimeSchool service to your school — powering the school, teacher, parent, student, and librarian portals, generating reports, and delivering SMS and announcements your school sends. We do not sell personal data, and we do not use student data for advertising.`,
  },
  {
    heading: 'AI marking',
    body: `When a school uses MarkEase, uploaded answer papers are processed to identify the student and mark each question. Every AI-generated mark is reviewed by a teacher before students see it, and students can appeal any mark in-app.`,
  },
  {
    heading: 'How we protect it',
    body: `All data is encrypted in transit and at rest. Access inside a school is controlled by granular, role-based permissions the school configures, and full audit logs track who changed what and when. Each school's data is accessible only to accounts that school authorizes.`,
  },
  {
    heading: 'Data ownership and retention',
    body: `Your school owns its data. We retain it for as long as your school uses DimeSchool, and schools can request an export or deletion of their data at any time by contacting us.`,
  },
  {
    heading: 'Third parties',
    body: `We share data with service providers only where needed to operate the platform — for example SMS delivery and payment recording (cash, Mobile Money, bank transfer, or cheque entries your school records). These providers process data on our instructions and only for those purposes.`,
  },
  {
    heading: 'Contact',
    body: `Questions about this policy or your data? Email ${siteConfig.contact.email} — we respond within 24 hours on weekdays.`,
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <ChapterHead number="L.001" label="Privacy Policy" right="Last updated July 2026" />

          <h1 className="chapter-title mt-10 max-w-4xl">Privacy Policy</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            DimeSchool handles some of the most sensitive data a school has. This page explains
            plainly what we collect, why, and how we protect it.
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
