'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site.config';
import { DoodleBrush, DoodleBurst, DoodleSquiggle } from './Doodles';

export default function Testimonials() {
  const testimonials = siteConfig.testimonials;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!testimonials.length) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (!testimonials.length) {
    return null;
  }

  const current = testimonials[active];

  return (
    <section className="relative overflow-hidden py-24" id="testimonials">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Real Schools</p>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">What educators say after switching</h2>
          <DoodleBrush className="mx-auto mt-2 h-4 w-32" />
        </div>

        <motion.div
          key={current.author}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="relative mt-10 rounded-[2rem] border border-border/80 bg-white p-8 text-center shadow-md"
        >
          <DoodleBurst className="pointer-events-none absolute left-1/2 top-5 hidden h-8 w-8 -translate-x-[240%] lg:block" />
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
            {current.author
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)}
          </div>
          <p className="text-xl leading-relaxed text-foreground md:text-2xl">“{current.quote}”</p>
          <DoodleSquiggle className="pointer-events-none mx-auto mt-2 hidden h-8 w-24 lg:block" />
          <p className="mt-6 text-base font-semibold text-foreground">{current.author}</p>
          <p className="text-sm text-muted-foreground">{current.role}, {current.company}</p>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${index === active ? 'w-8 bg-primary' : 'w-2.5 bg-border'}`}
                aria-label={`Show testimonial from ${testimonial.author}`}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-8 grid gap-3 rounded-3xl border border-border/80 bg-muted/55 p-4 text-center sm:grid-cols-4 sm:text-left">
          {['Uumwe Community Center', 'Kigali Christian School', 'La Promise', 'Saint Jean Paul'].map((school) => (
            <div key={school} className="rounded-xl bg-white px-3 py-3 text-sm font-semibold text-foreground">
              {school}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
