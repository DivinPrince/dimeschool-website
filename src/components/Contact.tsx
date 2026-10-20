'use client';

import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site.config';
import { ChapterHead, Mark } from './Chapter';
import { MaskReveal } from './motion/Motion';
import Snapshot from './graphics/Snapshot';

const commitments = [
  { label: 'Average response time', value: '<24h' },
  { label: 'Onboarding kickoff', value: 'Same week' },
  { label: 'Guided rollout support', value: 'Included' },
];

const inputClass =
  'mt-2 w-full rounded-xl border-2 border-foreground/20 bg-card px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary';

/**
 * Opens the booking page with what the visitor typed already filled in (Cal.com
 * reads `name`, `email`, and `notes` from the URL), so they only pick a time.
 */
function bookDemo(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const field = (key: string) => String(data.get(key) ?? '').trim();
  const notes = [
    field('school') && `School: ${field('school')}`,
    field('size') && `Students: ${field('size')}`,
    field('message'),
  ]
    .filter(Boolean)
    .join('\n');

  const url = new URL(siteConfig.contact.demoUrl);
  url.searchParams.set('name', field('name'));
  url.searchParams.set('email', field('email'));
  if (notes) url.searchParams.set('notes', notes);
  window.open(url, '_blank', 'noopener,noreferrer');
}

export default function Contact() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="relative py-14 lg:py-20" data-chapter="N.010 · Contact">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <ChapterHead number="N.010" label="Contact" right="Kigali Innovation City" />

        <MaskReveal className="mt-10">
          <h2 className="chapter-title max-w-5xl">
            Let&apos;s map your <Mark>school rollout</Mark>
          </h2>
        </MaskReveal>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Tell us your school structure and we will propose the fastest launch plan for your team.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="border-t-2 border-foreground/80 py-6">
              <p className="label-mono">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="font-display mt-2 block text-xl font-bold tracking-[-0.01em] text-foreground hover:text-primary"
              >
                {contact.email}
              </a>
            </div>
            <div className="border-t-2 border-foreground/80 py-6">
              <p className="label-mono">Phone</p>
              {contact.phones.map((phone) => (
                <p
                  key={phone}
                  className="font-display mt-2 text-xl font-bold tracking-[-0.01em] text-foreground"
                >
                  {phone}
                </p>
              ))}
            </div>
            <div className="border-t-2 border-foreground/80 py-6">
              <p className="label-mono">Office</p>
              <p className="font-display mt-2 text-xl font-bold tracking-[-0.01em] text-foreground">
                {contact.address.line1}
                <br />
                {contact.address.line2}
              </p>
            </div>

            <div className="border-t-2 border-foreground/80 py-6">
              {commitments.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-4 py-1.5">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-bold text-foreground">{item.value}</span>
                </div>
              ))}
            </div>

            <Snapshot
              src="/assets/photos/student-desk.jpg"
              alt="A student carefully drawing lines with a ruler in an exercise book"
              caption="Built around real classrooms."
              sub="DimeSchool · Kigali"
              className="mt-8 max-w-xs"
              sizes="320px"
            />
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.08 }}
            onSubmit={bookDemo}
            className="rounded-[1.75rem] bg-card p-7 shadow-md lg:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-bold text-foreground">
                Name
                <input type="text" name="name" placeholder="Your full name" required className={inputClass} />
              </label>
              <label className="text-sm font-bold text-foreground">
                Work Email
                <input type="email" name="email" placeholder="you@school.org" required className={inputClass} />
              </label>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="text-sm font-bold text-foreground">
                School Name
                <input type="text" name="school" placeholder="Your school" className={inputClass} />
              </label>
              <label className="text-sm font-bold text-foreground">
                Student Count
                <input type="text" name="size" placeholder="e.g. 850" className={inputClass} />
              </label>
            </div>

            <label className="mt-5 block text-sm font-bold text-foreground">
              What do you need most?
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us your current workflow pain points"
                required
                className={`${inputClass} resize-none`}
              />
            </label>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <button
                type="submit"
                className="inline-flex rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Book my demo
              </button>
              <p className="text-sm text-muted-foreground">Next, pick a time on our calendar.</p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
