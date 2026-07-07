'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { HandPartial, HandTick } from './MarkEaseMark';

/**
 * A real scanned answer sheet (anonymous, from the MarkEase test set) with
 * the app's actual marker glyphs stamped on it, exactly what a teacher sees
 * after MarkEase drafts the marking. Marker colors are the app's own.
 */

/* Positions are % of the visible (square-cropped) scan. */
const markers = [
  { kind: 'tick', x: '58%', y: '20%', delay: 0.2 },
  { kind: 'tick', x: '62%', y: '37%', delay: 0.38 },
  { kind: 'tick', x: '56%', y: '50%', delay: 0.56 },
  { kind: 'partial', x: '50%', y: '65%', delay: 0.74 },
  { kind: 'tick', x: '32%', y: '85%', delay: 0.92 },
] as const;

const pop = {
  initial: { scale: 0, rotate: -20, opacity: 0 },
  whileInView: { scale: 1, rotate: 0, opacity: 1 },
};

export default function MarkedPaper({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion();
  const gate = (delay: number) =>
    reduce
      ? {}
      : {
          ...pop,
          viewport: { once: true, margin: '-60px' },
          transition: { delay, type: 'spring' as const, stiffness: 260, damping: 14 },
        };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 50, rotate: 4 }}
      whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
      className={`relative rounded-2xl bg-card p-4 text-foreground shadow-lg will-change-transform sm:p-5 ${className}`}
    >
      {/* Score stamp */}
      <motion.div
        {...gate(1.15)}
        className="absolute -right-3 -top-4 z-10 flex h-20 w-20 rotate-6 flex-col items-center justify-center rounded-full border-4 border-green bg-card text-green shadow-md"
      >
        <span className="font-display text-xl font-extrabold leading-none">9/10</span>
        <span className="font-mono text-[8px] font-bold uppercase tracking-[0.14em]">Marked</span>
      </motion.div>

      <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 pr-16">
        <p className="label-mono">Real answer sheet &middot; Social Studies</p>
        <span className="inline-flex items-center gap-1 rounded-full bg-blue px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white">
          <CheckIcon className="h-2.5 w-2.5" strokeWidth={3} />
          Matched to student
        </span>
      </div>

      {/* The scan, square-cropped from the top, with the app's markers on it */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
        <Image
          src="/assets/markease/answer-sheet.jpg"
          alt="A real handwritten exam answer sheet marked by MarkEase: green ticks on correct answers, an amber half-tick on a partially correct one"
          fill
          sizes="(min-width: 1024px) 28rem, 90vw"
          className="object-cover object-top"
        />
        {markers.map((marker, index) => (
          <motion.span
            key={index}
            {...gate(marker.delay)}
            className="absolute"
            style={{ left: marker.x, top: marker.y }}
          >
            {marker.kind === 'tick' ? (
              <HandTick className="h-7 w-7 text-[#3ABA5B] drop-shadow-sm" />
            ) : (
              <HandPartial className="h-7 w-8 text-[#E6AF11] drop-shadow-sm" />
            )}
          </motion.span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-purple px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white">
          AI draft in minutes
        </span>
        <span className="rounded-full bg-foreground px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-background">
          Teacher reviews &amp; publishes
        </span>
      </div>
    </motion.div>
  );
}
