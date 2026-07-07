'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { ChapterHead, Mark } from './Chapter';
import { CanvasZoom, Counter, MaskReveal } from './motion/Motion';
import MarkedPaper from './graphics/MarkedPaper';
import { MarkEaseMark } from './graphics/MarkEaseMark';
import Snapshot from './graphics/Snapshot';

const workflow = [
  {
    title: 'Scan or Upload',
    detail: 'Batch-scan handwritten papers with a document scanner or phone camera, or upload digital responses.',
  },
  {
    title: 'AI Identifies & Marks',
    detail: 'MarkEase matches each paper to the right student, then marks every question with written feedback.',
  },
  {
    title: 'Teacher Approval',
    detail: 'Teachers review each mark, adjust where needed, and publish. The teacher’s judgment is always final.',
  },
  {
    title: 'Insights & Appeals',
    detail: 'Class insights update instantly, and students can request a re-mark right from their portal.',
  },
];

/* Why AI marking matters: Rwanda's national learning assessment, LARS 2025. */
const proof = [
  { value: '60:1', label: 'Pupil-to-teacher ratio in Rwandan primary classrooms (LARS 2025)' },
  { value: '22,950', label: 'Learners assessed in the LARS 2025 national study' },
  { value: '24%', label: 'P3 learners meeting English reading-comprehension expectations (LARS 2025)' },
];

export default function Integrations() {
  const { integrations } = siteConfig;

  return (
    <section
      className="relative px-4 py-6 sm:px-6 lg:px-6 lg:py-8"
      id="integrations"
      data-chapter="N.003 · MarkEase AI"
    >
      <CanvasZoom className="bg-blue px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <ChapterHead number="N.003" label="MarkEase AI" right="The DimeSchool difference" />

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <MaskReveal>
              <h2 className="chapter-title">
                <Mark tone="yellow">AI marking</Mark> that gives weekends back
              </h2>
            </MaskReveal>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {integrations.description}
            </p>
          </div>
          <a
            href="https://markease.dime.rw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-card px-6 py-3.5 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5"
          >
            {integrations.cta}
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>

        {/* The proof, side by side: the weekend stack vs. the marked paper */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative">
            <Snapshot
              src="/assets/photos/teacher-marking.jpg"
              alt="A teacher standing in a full classroom, checking a stack of exercise books by hand"
              caption="End of term, the old way: every script, one red pen."
              sub="Marking steals evenings & weekends"
              className="mx-auto max-w-md"
            />
          </div>
          <div className="relative px-2 sm:px-6 lg:px-0 lg:pr-6">
            <MarkedPaper className="mx-auto max-w-md" />
          </div>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {workflow.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.07 }}
              className="rounded-2xl bg-white/10 p-6 lg:p-7"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
                0{index + 1}
              </span>
              <h3 className="font-display mt-3 text-xl font-bold tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{step.detail}</p>
            </motion.article>
          ))}
        </div>

        <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
          Why it matters &middot; LARS 2025, Rwanda&apos;s national learning assessment
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {proof.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-card p-6 text-foreground lg:p-8">
              <p className="font-display text-[clamp(2.2rem,3.6vw,3.25rem)] font-extrabold leading-none tracking-[-0.02em]">
                <Counter value={stat.value} />
              </p>
              <p className="mt-3 text-sm font-semibold text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <MarkEaseMark className="mx-auto mb-5 h-12 w-12 text-yellow" />
          <MaskReveal>
            <p className="font-display text-[clamp(1.6rem,3.4vw,2.75rem)] font-extrabold leading-tight tracking-[-0.01em]">
              Mark less. Teach more. <Mark tone="yellow">Reach every learner.</Mark>
            </p>
          </MaskReveal>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
            The MarkEase promise
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-yellow px-7 py-4 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5"
            >
              See plans with MarkEase
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white/15 px-7 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              Watch it mark a real paper
            </Link>
          </div>
        </div>
      </CanvasZoom>
    </section>
  );
}
