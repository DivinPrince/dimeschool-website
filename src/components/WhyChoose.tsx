'use client';

import { motion } from 'framer-motion';
import { BoltIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { DoodleBrush, DoodleSquiggle } from './Doodles';

export default function WhyChoose() {
  const { whyChoose } = siteConfig;

  if (!whyChoose || whyChoose.length === 0) {
    return null;
  }

  const [primaryCard, ...supportingCards] = whyChoose;
  const featuredInPrimary = supportingCards.filter((item) =>
    ['Flexible Academic Structures', 'Role-Based Access Control'].includes(item.title),
  );
  const remainingSupportingCards = supportingCards.filter(
    (item) => !featuredInPrimary.some((featured) => featured.title === item.title),
  );
  const supportingCardSpans = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-4'];
  const supportingCardTones = ['bg-white', 'bg-muted/45', 'bg-white', 'bg-secondary/35'];

  return (
    <section className="relative overflow-hidden py-24" id="why-choose">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Why Teams Switch</p>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">Why schools pick DimeSchool and stay</h2>
          <DoodleBrush className="mt-2 h-4 w-32" />
          <p className="mt-4 text-lg text-muted-foreground">We are not another dashboard skin. We fix the workflow friction that steals teaching time.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:auto-rows-[minmax(165px,_auto)] lg:grid-cols-6">
          {primaryCard && (
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-white p-6 shadow-md md:col-span-2 md:p-7 lg:col-span-4 lg:row-span-2"
            >
              <div className="pointer-events-none absolute -right-14 top-2 h-36 w-36 rounded-full bg-primary/10 blur-2xl" />
              <DoodleSquiggle className="pointer-events-none absolute -right-6 -top-5 hidden h-12 w-20 rotate-[-8deg] text-primary/65 lg:block" />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <CheckBadgeIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-foreground md:text-[1.75rem]">{primaryCard.title}</h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">{primaryCard.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <BoltIcon className="h-4 w-4" />
                Designed for real school operations
              </div>

              {featuredInPrimary.length > 0 && (
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {featuredInPrimary.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border/80 bg-muted/35 p-4 shadow-sm">
                      <p className="text-base font-semibold text-foreground">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.article>
          )}

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[2rem] border border-border/80 bg-white p-6 shadow-lg md:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Case Snapshot</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">Horizon Academy, first 90 days</h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-foreground">60%</p>
                  <p className="text-xs text-muted-foreground">Admin workload reduced</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-foreground">8 min</p>
                  <p className="text-xs text-muted-foreground">Average AI marking cycle</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-foreground">99.9%</p>
                  <p className="text-xs text-muted-foreground">Platform uptime</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-bold text-foreground">24/7</p>
                  <p className="text-xs text-muted-foreground">Support coverage</p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-border/70 bg-muted/55 p-5">
              <p className="text-sm font-semibold text-foreground">Before DimeSchool</p>
              <p className="mt-2 text-sm text-muted-foreground">Manual registers, late report cards, fragmented communication.</p>
              <div className="my-4 h-px bg-border" />
              <p className="text-sm font-semibold text-foreground">After DimeSchool</p>
              <p className="mt-2 text-sm text-muted-foreground">Real-time records, instant parent visibility, and faster school operations.</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary">
                <BoltIcon className="h-4 w-4" />
                Built to remove school friction
              </div>
            </div>
          </motion.aside>

          {remainingSupportingCards.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.06 }}
              className={`rounded-3xl border border-border/80 p-5 shadow-sm md:p-6 ${supportingCardSpans[index] ?? 'lg:col-span-3'} ${supportingCardTones[index % supportingCardTones.length]}`}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <CheckBadgeIcon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
