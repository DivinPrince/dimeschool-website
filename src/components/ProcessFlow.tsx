'use client';

import { motion } from 'framer-motion';
import { LightBulbIcon, RocketLaunchIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';

const stepIcons = [LightBulbIcon, CheckCircleIcon, RocketLaunchIcon];

export default function ProcessFlow() {
  const steps = siteConfig.processFlow;

  if (!steps.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-24" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Onboarding Journey</p>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">From signup to live school in three clear moves</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No long implementation drama. Every stage has a practical outcome and measurable speed.
          </p>
        </div>

        <div className="relative grid gap-5 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-16 hidden h-1 rounded-full bg-primary/20 lg:block" />

          {steps.map((step, index) => {
            const Icon = stepIcons[index] ?? CheckCircleIcon;

            return (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-3xl border border-border/80 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="inline-flex rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  Step {step.step}
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {index === 0 ? '2 mins setup' : index === 1 ? '30 mins migration' : 'go live same day'}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl border border-primary/20 bg-primary/5 px-6 py-5 text-sm font-medium text-foreground"
        >
          Need hands-on support? We provide onboarding sessions for your admin team and teachers at launch.
        </motion.div>
      </div>
    </section>
  );
}
