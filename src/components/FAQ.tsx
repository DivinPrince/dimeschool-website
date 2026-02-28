'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { DoodleBrush, DoodleSquiggle } from './Doodles';

const audienceTags = ['Admins', 'Teachers', 'Parents'];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = siteConfig.faq;

  if (!faqs.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-24" id="faq">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">FAQ</p>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">Questions schools ask before launch</h2>
          <DoodleBrush className="mt-2 h-4 w-32" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.article
                  key={faq.question}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="overflow-hidden rounded-2xl border border-border/80 bg-white"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <div>
                      <span className="mb-2 inline-flex rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                        {audienceTags[index % audienceTags.length]}
                      </span>
                      <p className="text-base font-semibold text-foreground">{faq.question}</p>
                    </div>
                    <ChevronDownIcon className={`h-5 w-5 text-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden border-t border-border/80"
                      >
                        <p className="px-5 py-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>

          <aside className="relative rounded-[2rem] border border-primary/20 bg-primary/5 p-6">
            <h3 className="text-2xl font-semibold text-foreground">Still have questions?</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Share your school structure and we will map the migration, setup timeline, and portal rollout with your team.
            </p>
            <div className="mt-5 space-y-3 rounded-2xl border border-border/70 bg-white p-4">
              <p className="text-sm font-semibold text-foreground">Response time</p>
              <p className="text-sm text-muted-foreground">Under 24 hours on weekdays</p>
              <p className="text-sm font-semibold text-foreground">Live demo duration</p>
              <p className="text-sm text-muted-foreground">30 minutes with Q&A</p>
            </div>
            <a
              href="#contact"
              className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Talk to our team
            </a>
            <DoodleSquiggle className="pointer-events-none absolute bottom-6 right-6 hidden h-10 w-16 rotate-[6deg] lg:block" />
          </aside>
        </div>
      </div>
    </section>
  );
}
