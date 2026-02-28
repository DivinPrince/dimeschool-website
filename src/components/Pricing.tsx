'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { DoodleBrush, DoodleBurst } from './Doodles';

export default function Pricing() {
  const { pricing } = siteConfig;

  if (!pricing || pricing.plans.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-24" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Pricing</p>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">{pricing.title}</h2>
          <DoodleBrush className="mx-auto mt-2 h-4 w-28" />
          <p className="mt-4 text-lg text-muted-foreground">{pricing.description}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {pricing.plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`relative rounded-[2rem] border p-6 shadow-sm ${
                plan.featured ? 'border-primary/30 bg-primary/5 shadow-md shadow-primary/10' : 'border-border/80 bg-white'
              }`}
            >
              {plan.featured && (
                <DoodleBurst className="pointer-events-none absolute -right-3 -top-5 hidden h-9 w-9 lg:block" />
              )}
              {plan.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-2xl font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="pb-1 text-sm font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  {pricing.currency}
                </span>
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="pb-1 text-sm text-muted-foreground">/{plan.period}</span>}
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border bg-white text-foreground hover:bg-muted'
                }`}
              >
                {plan.cta}
              </a>
              {plan.note && <p className="mt-3 text-center text-xs text-muted-foreground">{plan.note}</p>}
            </motion.article>
          ))}
        </div>

        {pricing.enterpriseCta && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 rounded-3xl border border-primary/20 bg-white p-6 shadow-sm lg:flex lg:items-center lg:justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground">{pricing.enterpriseCta.title}</h3>
              <p className="mt-2 text-muted-foreground">{pricing.enterpriseCta.description}</p>
            </div>
            <a
              href="#contact"
              className="mt-4 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground lg:mt-0"
            >
              {pricing.enterpriseCta.cta}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
