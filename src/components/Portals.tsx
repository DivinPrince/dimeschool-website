'use client';

import { motion } from 'framer-motion';
import { ArrowUpRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { ChapterHead, Mark } from './Chapter';
import { MaskReveal } from './motion/Motion';
import PhoneMockup from './graphics/PhoneMockup';

const tileTones = [
  'bg-blue text-white',
  'bg-yellow text-foreground',
  'bg-primary text-white',
  'bg-green text-white',
  'bg-foreground text-background',
];

export default function Portals() {
  const portals = siteConfig.portals;
  const mobileApp = siteConfig.mobileApp;

  return (
    <section id="portals" className="relative py-14 lg:py-20" data-chapter="N.009 · The Portals">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <ChapterHead number="N.009" label="The Portals" right="One color per role" />

        <MaskReveal className="mt-10">
          <h2 className="chapter-title max-w-5xl">
            Pick your color. <Mark tone="green">Jump in.</Mark>
          </h2>
        </MaskReveal>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Each workspace is optimized for one role so teams spend less time searching and more time
          executing.
        </p>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {portals.map((portal, index) => (
            <motion.div
              key={portal.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <a
                href={portal.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full min-h-72 flex-col justify-between rounded-[1.25rem] p-6 transition-transform hover:-translate-y-1 ${tileTones[index % tileTones.length]}`}
              >
                <span className="flex h-10 w-10 items-center justify-center self-end rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRightIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-[1.7rem] font-extrabold leading-[1.02] tracking-[-0.01em]">
                    {portal.name.replace(' Portal', '')}
                    <br />
                    Portal
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-85">{portal.description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.12 }}
          className="mt-3 flex flex-col justify-between gap-8 overflow-hidden rounded-[1.25rem] bg-purple p-8 text-white md:flex-row md:items-center lg:p-10"
        >
          <div className="max-w-md">
            <h3 className="font-display text-2xl font-extrabold tracking-[-0.01em] lg:text-3xl">
              Take DimeSchool <Mark tone="yellow">everywhere</Mark>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/80">{mobileApp.description}</p>
          </div>
          <PhoneMockup className="mx-auto md:-mb-24 md:mx-0" />
          <div className="shrink-0">
            <a
              href={mobileApp.href}
              className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-4 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              {mobileApp.cta}
            </a>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/60 sm:text-center">
              {mobileApp.note}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
