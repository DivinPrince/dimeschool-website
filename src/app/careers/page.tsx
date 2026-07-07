import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/PageShell';
import { ChapterHead, Mark } from '@/components/Chapter';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = createPageMetadata({
  title: 'Careers',
  description:
    'Join the team building DimeSchool and MarkEase in Kigali, Rwanda — school software that gives time back to teachers. See open roles or send a general application.',
  path: '/careers',
});

export default function CareersPage() {
  const { careers, contact } = siteConfig;

  return (
    <PageShell>
      <section className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <ChapterHead number="C.001" label="Careers" right="Kigali Innovation City" />

          <h1 className="chapter-title mt-10 max-w-5xl">
            Help us give <Mark tone="yellow">time back</Mark> to teachers
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We build DimeSchool and MarkEase from Kigali, Rwanda — software that runs whole
            schools and marks exam papers in minutes. Small team, real users, work that lands in
            classrooms every day.
          </p>

          {careers.length > 0 ? (
            <div className="mt-14 space-y-4">
              {careers.map((job) => (
                <article key={job.title} className="rounded-[1.75rem] bg-card p-8 shadow-md lg:p-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h2 className="font-display text-2xl font-bold tracking-[-0.01em] text-foreground">
                      {job.title}
                    </h2>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {job.location} &middot; {job.type}
                    </span>
                  </div>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>
                  <ul className="mt-6 border-t border-border">
                    {job.requirements.map((req, idx) => (
                      <li key={req} className="flex items-baseline gap-4 border-b border-border py-3">
                        <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[15px] font-semibold text-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${contact.email}?subject=Application: ${encodeURIComponent(job.title)}`}
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
                  >
                    Apply by email
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-14 rounded-[1.75rem] bg-card p-8 shadow-md lg:p-10">
              <p className="label-mono">Open roles</p>
              <p className="font-display mt-4 text-2xl font-bold tracking-[-0.01em] text-foreground">
                No open positions right now
              </p>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                We are a small team and roles open in bursts. If you care about education and
                build well, introduce yourself — we read every message and keep strong
                applications on file for the next opening.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                <a
                  href={`mailto:${contact.email}?subject=General application`}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
                >
                  Send a general application
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full bg-muted px-6 py-3.5 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5"
                >
                  Why we build DimeSchool
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
