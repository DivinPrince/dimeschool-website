'use client';

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

            <button
              type="submit"
              className="mt-7 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Book my demo
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
