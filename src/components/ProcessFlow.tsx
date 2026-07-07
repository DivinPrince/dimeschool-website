'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '../config/site.config';
import { ChapterHead, Mark } from './Chapter';
import { MaskReveal } from './motion/Motion';

const stepMeta = ['2 mins setup', '30 mins migration', 'Go live same day'];

export default function ProcessFlow() {
  const steps = siteConfig.processFlow;

  if (!steps.length) {
    return null;
  }

  return (
    <section className="relative py-14 lg:py-20" id="process" data-chapter="N.005 · The Launch">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <ChapterHead number="N.005" label="The Launch" right="No implementation drama" />

        <MaskReveal className="mt-10">
          <h2 className="chapter-title max-w-5xl">
            Signup to live school in <Mark tone="purple">three moves</Mark>
          </h2>
        </MaskReveal>

        <div className="mt-14 border-t border-border">
          {steps.map((step, index) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid items-baseline gap-4 border-b border-border py-10 md:grid-cols-[minmax(90px,140px)_1fr_1.4fr_auto] md:gap-8 lg:py-14"
            >
              <span className="font-display inline-block text-[clamp(3rem,6.5vw,5.5rem)] font-extrabold leading-none tracking-[-0.03em] text-primary">
                0{step.step}
              </span>
              <h3 className="font-display text-2xl font-bold tracking-[-0.01em] text-foreground lg:text-3xl">
                {step.title}
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              <span className="label-mono !text-primary">{stepMeta[index]}</span>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Need hands-on support? We provide onboarding sessions for your admin team and teachers at
          launch.
        </p>
      </div>
    </section>
  );
}
