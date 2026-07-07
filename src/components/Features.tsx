'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { ChapterHead, Mark } from './Chapter';
import { MaskReveal } from './motion/Motion';
import { portalPreviews } from './graphics/PortalPreviews';

const roleTones = [
  { tile: 'bg-blue text-white', dot: 'bg-blue', panel: 'bg-blue', text: 'text-white', soft: 'border-white/25', dim: 'text-white/75' },
  { tile: 'bg-yellow text-foreground', dot: 'bg-yellow', panel: 'bg-yellow', text: 'text-foreground', soft: 'border-foreground/20', dim: 'text-foreground/75' },
  { tile: 'bg-green text-white', dot: 'bg-green', panel: 'bg-green', text: 'text-white', soft: 'border-white/25', dim: 'text-white/75' },
  { tile: 'bg-purple text-white', dot: 'bg-purple', panel: 'bg-purple', text: 'text-white', soft: 'border-white/25', dim: 'text-white/75' },
];

export default function Features() {
  const { products } = siteConfig;
  const [activeTab, setActiveTab] = useState(0);
  const active = products[activeTab];
  const tone = roleTones[activeTab % roleTones.length];
  const Preview = portalPreviews[active.id];

  return (
    <section className="relative py-14 lg:py-20" id="features" data-chapter="N.002 · The Platform">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <ChapterHead number="N.002" label="The Platform" right="Role-based workspaces" />

        <MaskReveal className="mt-10">
          <h2 className="chapter-title max-w-5xl">
            One platform. <Mark tone="blue">Four journeys.</Mark>
          </h2>
        </MaskReveal>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Every role gets a tailored workspace with tools designed for the work they actually do.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="flex flex-col gap-3">
            {products.map((product, index) => {
              const isActive = activeTab === index;
              const t = roleTones[index % roleTones.length];

              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(index)}
                  aria-pressed={isActive}
                  className={`group rounded-2xl p-6 text-left transition-all ${
                    isActive
                      ? `${t.tile} shadow-md`
                      : 'bg-card text-foreground shadow-sm hover:-translate-y-0.5 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-baseline gap-5">
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold tracking-[-0.01em] lg:text-[1.7rem]">
                        {product.name}
                      </h3>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3 text-[15px] leading-relaxed opacity-85">
                              {product.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {!isActive && <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${t.dot}`} />}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.25 }}
                className={`rounded-[1.75rem] p-7 shadow-md lg:p-10 ${tone.panel} ${tone.text}`}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-75">
                  {active.tagline}
                </span>
                <h3 className="font-display mt-3 text-3xl font-bold tracking-[-0.01em]">
                  {active.name}
                </h3>

                {Preview && (
                  <div className="mt-6">
                    <Preview />
                  </div>
                )}

                <ul className={`mt-8 border-t ${tone.soft}`}>
                  {active.features.map((feature) => (
                    <li key={feature} className={`border-b py-3.5 ${tone.soft}`}>
                      <span className="text-[15px] font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                    activeTab === 1 ? 'bg-foreground text-background' : 'bg-card text-foreground'
                  }`}
                >
                  {active.cta}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
