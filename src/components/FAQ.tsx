'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { ChapterHead, Mark } from './Chapter';
import { MaskReveal } from './motion/Motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = siteConfig.faq;

  if (!faqs.length) {
    return null;
  }

  return (
    <section className="relative py-14 lg:py-20" id="faq" data-chapter="N.008 · Questions">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <ChapterHead number="N.008" label="Questions" right="Before launch" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <MaskReveal>
              <h2 className="chapter-title">
                <Mark tone="blue">FAQ</Mark>
              </h2>
            </MaskReveal>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Share your school structure and we will map the migration, setup timeline, and portal
              rollout with your team. Response in under 24 hours on weekdays; live demos run 30
              minutes with Q&amp;A.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
            >
              Talk to our team
            </Link>
          </div>

          <div className="border-t-2 border-foreground/80">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <article key={faq.question} className="border-b-2 border-foreground/80">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-baseline gap-5 py-6 text-left"
                  >
                    <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="font-display flex-1 text-lg font-bold tracking-[-0.01em] text-foreground lg:text-xl">
                      {faq.question}
                    </p>
                    <PlusIcon
                      className={`h-6 w-6 shrink-0 self-center stroke-[2.5] text-primary transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pl-11 text-[15px] leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
