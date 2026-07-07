'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { ChapterHead, Mark } from './Chapter';
import { Counter, MaskReveal } from './motion/Motion';

export default function Pricing() {
  const { pricing } = siteConfig;

  if (!pricing || pricing.plans.length === 0) {
    return null;
  }

  return (
    <section className="relative py-14 lg:py-20" id="pricing" data-chapter="N.006 · Pricing">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <ChapterHead number="N.006" label="Pricing" right="Billed per student, per term" />

        <MaskReveal className="mt-10">
          <h2 className="chapter-title max-w-5xl">
            <Mark>Per-student</Mark> pricing, no surprises
          </h2>
        </MaskReveal>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {pricing.description}
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {pricing.plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col rounded-[1.75rem] p-8 lg:p-10 ${
                plan.featured ? 'bg-foreground text-background shadow-lg' : 'bg-card shadow-md'
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl font-bold tracking-[-0.01em]">{plan.name}</h3>
                {plan.badge && (
                  <span className="mark mark-yellow shrink-0 font-display text-xs font-bold">
                    {plan.badge}
                  </span>
                )}
              </div>
              <p
                className={`mt-3 text-sm leading-relaxed ${plan.featured ? 'text-background/70' : 'text-muted-foreground'}`}
              >
                {plan.description}
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span
                  className={`font-display text-[clamp(3.2rem,5.4vw,4.75rem)] font-extrabold leading-none tracking-[-0.03em] ${
                    plan.featured ? 'text-yellow' : 'text-primary'
                  }`}
                >
                  <Counter value={plan.price} />
                </span>
                <span
                  className={`text-sm font-semibold ${plan.featured ? 'text-background/70' : 'text-muted-foreground'}`}
                >
                  {pricing.currency} / {plan.period}
                </span>
              </div>

              <ul className={`mt-8 border-t ${plan.featured ? 'border-background/25' : 'border-border'}`}>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-baseline gap-3 border-b py-3 ${
                      plan.featured ? 'border-background/25' : 'border-border'
                    }`}
                  >
                    <CheckIcon
                      className={`h-4 w-4 shrink-0 translate-y-0.5 stroke-[2.5] ${
                        plan.featured ? 'text-yellow' : 'text-primary'
                      }`}
                    />
                    <span className="text-[15px] font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                  plan.featured ? 'bg-primary text-primary-foreground' : 'bg-foreground text-background'
                }`}
              >
                {plan.cta}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              {plan.note && (
                <p
                  className={`mt-3 text-center text-xs ${plan.featured ? 'text-background/60' : 'text-muted-foreground'}`}
                >
                  {plan.note}
                </p>
              )}
            </motion.article>
          ))}
        </div>

        <p className="label-mono mt-6">{pricing.note}</p>
      </div>
    </section>
  );
}
