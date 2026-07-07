'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '../config/site.config';
import { ChapterHead, Mark } from './Chapter';
import { CanvasZoom, MaskReveal } from './motion/Motion';
import Snapshot from './graphics/Snapshot';

const schools = ['Uumwe Community Center', 'Kigali Christian School', 'La Promise', 'Saint Jean Paul'];
const accentColors = ['bg-yellow', 'bg-blue', 'bg-green'];

export default function Testimonials() {
  const testimonials = siteConfig.testimonials;

  if (!testimonials.length) {
    return null;
  }

  return (
    <section
      className="relative px-4 py-6 sm:px-6 lg:px-6 lg:py-8"
      id="testimonials"
      data-chapter="N.007 · Real Schools"
    >
      <CanvasZoom className="bg-foreground px-5 py-16 text-background sm:px-8 lg:px-12 lg:py-24">
        <ChapterHead number="N.007" label="Real Schools" right="After switching" />

        <MaskReveal className="mt-10">
          <h2 className="chapter-title max-w-4xl">
            Real schools. <Mark tone="yellow">Real words.</Mark>
          </h2>
        </MaskReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col overflow-hidden rounded-2xl bg-card text-foreground"
            >
              <span className={`h-1.5 w-full ${accentColors[index % accentColors.length]}`} />
              <div className="flex flex-1 flex-col p-7">
                <p className="font-display flex-1 text-lg font-bold leading-snug tracking-[-0.01em]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl items-center gap-8 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="font-display text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold leading-tight tracking-[-0.01em]">
              This is what the saved hours are for.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-background/70">
              Less time on registers, receipts, and red pens. More time in front of learners.
            </p>
          </div>
          <Snapshot
            src="/assets/photos/students-joy.jpg"
            alt="Students laughing together outside their classroom"
            caption="More time for this."
            sub="The whole point"
            className="w-64 sm:w-72"
            sizes="288px"
          />
        </div>

        <div className="mt-16 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-background/25 pt-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-background/60">
            Trusted by
          </span>
          {schools.map((school) => (
            <span
              key={school}
              className="font-display text-base font-bold tracking-[-0.01em] text-background/85"
            >
              {school}
            </span>
          ))}
        </div>
      </CanvasZoom>
    </section>
  );
}
