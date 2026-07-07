'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '../config/site.config';
import { ChapterHead, Mark, RevealText } from './Chapter';
import { CanvasZoom, MaskReveal } from './motion/Motion';
import Snapshot from './graphics/Snapshot';

/* The problem, in pictures: what LARS 2025 and every staff room already know. */
const evidence = [
  {
    src: '/assets/photos/crowded-classroom.jpg',
    alt: 'A packed classroom of students sharing benches',
    caption: 'One teacher. Sixty learners.',
    sub: 'LARS 2025 · 60:1 in primary',
  },
  {
    src: '/assets/photos/paper-records.jpg',
    alt: 'Students holding paper booklets and handouts',
    caption: 'Records that live on paper.',
    sub: 'Registers · receipts · reports',
  },
  {
    src: '/assets/photos/teacher-chalkboard.jpg',
    alt: 'A teacher explaining at the board while holding a paper',
    caption: 'Admin hours are teaching hours lost.',
    sub: 'The daily trade-off',
  },
];

export default function Manifesto() {
  const { manifesto } = siteConfig;

  return (
    <section
      className="relative px-4 py-6 sm:px-6 lg:px-6 lg:py-8"
      id="manifesto"
      data-chapter="N.001 · The Problem"
    >
      <CanvasZoom className="bg-primary px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-24">
        <ChapterHead number="N.001" label="The Problem" right="Why schools switch" />

        <MaskReveal className="mt-10">
          <h2 className="chapter-title max-w-5xl">
            Schools are drowning in <Mark tone="yellow">administrative chaos</Mark>
          </h2>
        </MaskReveal>

        <div className="mt-16 border-t border-white/30">
          {manifesto.timeline.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.07 }}
              className="grid gap-3 border-b border-white/30 py-8 md:grid-cols-[140px_1fr_1.4fr] md:gap-8 lg:py-10"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
                {item.year}
              </span>
              <h3 className="font-display text-2xl font-bold tracking-[-0.01em] lg:text-3xl">
                {index === 2 ? <Mark tone="yellow">{item.title}</Mark> : item.title}
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-white/80">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3 sm:gap-5 lg:gap-8">
          {evidence.map((photo) => (
            <Snapshot key={photo.src} {...photo} />
          ))}
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {manifesto.principles.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.09 }}
              className="rounded-3xl bg-white/10 p-7"
            >
              <h3 className="font-display text-2xl font-bold tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/80">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 lg:mt-28">
          <RevealText
            text={manifesto.founderMessage}
            className="font-display mx-auto max-w-4xl text-center text-[clamp(1.5rem,3.4vw,2.75rem)] font-bold leading-[1.2] tracking-[-0.01em]"
          />
          <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-white/70">
            Founder&apos;s message &middot; Dime Inc.
          </p>
        </div>
      </CanvasZoom>
    </section>
  );
}
