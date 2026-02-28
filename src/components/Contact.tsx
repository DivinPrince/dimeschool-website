'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { DoodleBrush, DoodleSquiggle } from './Doodles';

const stats = [
  { label: 'Average response time', value: '<24h' },
  { label: 'Onboarding kickoff', value: 'Same week' },
  { label: 'Guided rollout support', value: 'Included' },
];

export default function Contact() {
  const { contact } = siteConfig;

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">Let’s map your school rollout</h2>
          <DoodleBrush className="mt-2 h-4 w-28" />
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us your school structure and we will propose the fastest launch plan for your team.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-[2rem] border border-border/80 bg-white p-6 shadow-sm"
          >
            <div className="rounded-2xl border border-border/70 bg-muted/50 p-4">
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <EnvelopeIcon className="h-5 w-5 text-primary" />
                {contact.email}
              </div>
            </div>
            <div className="rounded-2xl border border-border/70 bg-muted/50 p-4">
              <div className="flex items-start gap-3 text-sm text-foreground">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="space-y-1">
                  {contact.phones.map((phone) => (
                    <p key={phone} className="font-semibold">{phone}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border/70 bg-muted/50 p-4">
              <div className="flex items-start gap-3 text-sm text-foreground">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="font-semibold">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] border border-border/80 bg-white p-6 shadow-md lg:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-foreground">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="text-sm font-medium text-foreground">
                Work Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@school.org"
                  required
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-foreground">
                School Name
                <input
                  type="text"
                  name="school"
                  placeholder="Your school"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="text-sm font-medium text-foreground">
                Student Count
                <input
                  type="text"
                  name="size"
                  placeholder="e.g. 850"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-medium text-foreground">
              What do you need most?
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us your current workflow pain points"
                required
                className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm"
            >
              Book my demo
            </button>
            <DoodleSquiggle className="pointer-events-none absolute bottom-4 right-5 hidden h-10 w-20 rotate-[12deg] lg:block" />
          </motion.form>
        </div>
      </div>
    </section>
  );
}
