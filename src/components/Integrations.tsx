'use client';

import { motion } from 'framer-motion';
import { SparklesIcon, ArrowRightIcon, CloudArrowUpIcon, ClipboardDocumentCheckIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { DoodleBrush, DoodleSquiggle } from './Doodles';

const workflow = [
  {
    title: 'Upload Papers',
    detail: 'Bulk upload scanned answer sheets or digital responses.',
    icon: CloudArrowUpIcon,
  },
  {
    title: 'AI Marks in Minutes',
    detail: 'MarkEase grades with rubric-aligned feedback and score confidence.',
    icon: SparklesIcon,
  },
  {
    title: 'Teacher Approval',
    detail: 'Teachers review, adjust if needed, and publish instantly.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: 'Progress Insights',
    detail: 'Class-level trends update dashboards for parents and leaders.',
    icon: PresentationChartLineIcon,
  },
];

export default function Integrations() {
  const { integrations } = siteConfig;

  return (
    <section className="relative overflow-hidden py-24" id="integrations">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">MarkEase Integration</p>
            <h2 className="mt-3 text-4xl font-semibold text-foreground md:text-5xl">{integrations.title}</h2>
            <DoodleBrush className="mt-2 h-4 w-32" />
            <p className="mt-4 text-lg text-muted-foreground">{integrations.description}</p>
          </div>
          <a
            href="https://markease.dime.rw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm"
          >
            {integrations.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="relative rounded-[2rem] border border-border/80 bg-white p-6 shadow-lg lg:p-8">
          <DoodleSquiggle className="pointer-events-none absolute -top-8 left-1/2 hidden h-14 w-24 -translate-x-1/2 lg:block" />
          <div className="grid gap-4 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="relative rounded-2xl border border-border/70 bg-muted/45 p-5"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
                {index < workflow.length - 1 && (
                  <ArrowRightIcon className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-primary/60 lg:block" />
                )}
              </motion.article>
            ))}
          </div>

          <div className="mt-6 grid gap-3 rounded-2xl bg-primary/6 p-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-4">
              <p className="text-2xl font-bold text-foreground">8h+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Teacher time saved weekly</p>
            </div>
            <div className="rounded-xl bg-white p-4">
              <p className="text-2xl font-bold text-foreground">156/156</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Papers auto-graded sample batch</p>
            </div>
            <div className="rounded-xl bg-white p-4">
              <p className="text-2xl font-bold text-foreground">72%</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Average score insights accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
