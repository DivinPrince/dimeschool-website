'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { Marquee } from './Chapter';
import { useIntroDone, EASE } from './motion/Motion';

const wordPanels = [
  { bg: 'var(--blue)', color: '#fff' },
  { bg: 'var(--yellow)', color: 'var(--foreground)' },
  { bg: 'var(--purple)', color: '#fff' },
  { bg: 'var(--green)', color: '#fff' },
];

const ribbon = [
  'AI-powered marking',
  'Real-time grades',
  'Biometric attendance',
  'SMS to parents',
  'MoMo fee tracking',
  'Online exams',
  'Library & e-books',
];

export default function Hero() {
  const { hero, tagline } = siteConfig;
  const [wordIndex, setWordIndex] = useState(0);
  const introDone = useIntroDone();
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLDivElement>(null);
  const canvasInView = useInView(canvasRef);

  useEffect(() => {
    if (!canvasInView) return;
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % hero.rotatingWords.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [hero.rotatingWords.length, canvasInView]);

  const panel = wordPanels[wordIndex % wordPanels.length];
  const show = reduce || introDone;

  return (
    <section
      className="relative px-4 pt-20 sm:px-6 lg:px-6 lg:pt-4"
      data-chapter="N.000 · Overview"
    >
      <div className="flex items-baseline justify-between gap-4 pb-3">
        <span className="label-mono">{tagline}</span>
        <span className="label-mono hidden sm:block">Kigali &middot; Rwanda</span>
      </div>

      {/* The canvas: one big rounded color frame, Units-style */}
      <motion.div
        ref={canvasRef}
        initial={reduce ? false : { y: 24, opacity: 0 }}
        animate={show ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative overflow-hidden rounded-[2rem] bg-primary"
      >
        <motion.div
          initial={reduce ? false : { x: 80, opacity: 0 }}
          animate={show ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="absolute bottom-0 right-0 hidden h-[88%] md:block"
        >
          {/* sizes: 1px below md keeps hidden-on-mobile markup from
              downloading the full-size asset */}
          <Image
            src="/assets/student.webp"
            alt=""
            width={649}
            height={614}
            priority
            sizes="(max-width: 767px) 1px, 45vw"
            className="pointer-events-none h-full w-auto object-contain object-bottom"
          />
        </motion.div>

        {/* One product callout, not a cloud of them */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1, ease: EASE }}
          className="pointer-events-none absolute right-[8%] top-[16%] z-20 hidden rounded-2xl bg-yellow px-4 py-3 text-foreground shadow-lg lg:block"
        >
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] opacity-70">
            MarkEase AI
          </p>
          <p className="mt-0.5 text-sm font-bold leading-none">Marked &middot; 18/20</p>
        </motion.div>

        <div className="relative z-10 flex min-h-[76vh] flex-col justify-between gap-10 p-7 sm:p-10 lg:p-14">
          <div>
            <h1 className="font-display text-[clamp(2.9rem,8.2vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.02em] text-white">
              <motion.span
                className="block"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              >
                Empower
              </motion.span>
              <motion.span
                className="block"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              >
                your school
              </motion.span>
              <motion.span
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
                className="relative inline-block"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.25 }}
                    className="inline-block rounded-[0.28em] px-[0.18em] py-[0.02em]"
                    style={{ background: panel.bg, color: panel.color }}
                  >
                    {hero.rotatingWords[wordIndex].toLowerCase()}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
              className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-white/90"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-2.5"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
              >
                {hero.secondaryCta}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a
                href={hero.downloadUrl}
                className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-4 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                {hero.downloadCta}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.85, ease: EASE }}
            className="flex flex-wrap gap-x-10 gap-y-4"
          >
            {hero.stats.map((item) => (
              <div key={item.number} className="border-l-2 border-white/30 pl-4">
                <p className="font-display text-xl font-extrabold leading-none text-white lg:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1.5 text-sm text-white/75">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-10">
        <Marquee items={ribbon} className="bg-blue text-white" />
      </div>
    </section>
  );
}
