'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '../config/site.config';
import { DoodleBrush, DoodleWave } from './Doodles';

const cardTones = ['bg-chart-2/10', 'bg-chart-4/20', 'bg-accent/35'];

export default function Manifesto() {
  const { manifesto } = siteConfig;

  return (
    <section className="relative overflow-hidden py-24 lg:py-28" id="manifesto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">The Shift</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              {manifesto.title}
            </h2>
            <DoodleBrush className="mt-2 h-4 w-32" />
          </div>
          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border border-primary/20 bg-white p-6 text-lg text-muted-foreground shadow-sm"
          >
            <DoodleWave className="pointer-events-none absolute -top-5 right-6 h-6 w-24" />
            “{manifesto.quote}”
          </motion.blockquote>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {manifesto.timeline.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`rounded-3xl border border-border/80 p-6 shadow-sm ${cardTones[index % cardTones.length]}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{item.year}</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {manifesto.principles.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-border/80 bg-white p-7 shadow-sm"
            >
              <span className="inline-flex rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {manifesto.statements.map((text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-center text-base font-semibold text-foreground"
            >
              {text}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-14 rounded-[2rem] border border-border/80 bg-white p-8 shadow-md lg:p-10"
        >
          <DoodleBrush className="pointer-events-none absolute -right-4 -top-6 hidden h-5 w-24 rotate-6 lg:block" />
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">“{manifesto.founderMessage}”</p>
          <div className="mt-5 inline-flex items-center rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
            Founder's Message
          </div>
        </motion.div>
      </div>
    </section>
  );
}
