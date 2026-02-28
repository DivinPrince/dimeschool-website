'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { DoodleArrow, DoodleBurst, DoodleWave } from './Doodles';

export default function Hero() {
  const { hero } = siteConfig;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % hero.rotatingWords.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [hero.rotatingWords.length]);

  return (
    <section className="relative overflow-hidden pb-20 pt-28 lg:pb-28 lg:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-[26rem] w-[26rem] rounded-full bg-accent/35 blur-3xl" />
        <div className="absolute bottom-8 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-chart-2/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl"
          >
            {hero.headline}{' '}
            <span className="relative inline-block min-w-[210px] sm:min-w-[280px] lg:min-w-[320px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="font-display text-primary"
                >
                  {hero.rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
              <DoodleWave className="absolute -bottom-5 left-0 h-4 w-full" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {hero.subheadline}
          </motion.p>

          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="relative inline-flex">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-transform hover:-translate-y-0.5"
              >
                Schedule a Demo
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <DoodleArrow className="pointer-events-none absolute -right-16 -top-14 hidden h-11 w-24 lg:block" />
            </div>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Explore Platform
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {hero.stats.map((item) => (
              <div key={item.number} className="rounded-2xl border border-border/80 bg-white p-4 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{item.number}</div>
                <div className="mt-1 text-lg font-semibold text-foreground">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[34rem]"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-white p-3 shadow-lg sm:p-4">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-secondary via-white to-accent p-0">
              <Image
                src="/assets/student.svg"
                alt="DimeSchool student dashboard preview"
                width={649}
                height={614}
                priority
                className="block h-auto w-full rounded-[1.15rem] object-cover object-bottom contrast-125"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.3 }}
            className="absolute -bottom-4 -right-2 rounded-full bg-chart-3 px-4 py-2 text-xs font-semibold text-foreground shadow-md"
          >
            Built for every student
          </motion.div>
          <DoodleBurst className="pointer-events-none absolute -bottom-16 right-4 hidden h-10 w-10 lg:block" />
        </motion.div>
      </div>
    </section>
  );
}
