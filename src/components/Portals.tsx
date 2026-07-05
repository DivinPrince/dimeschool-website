'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon, UsersIcon, BuildingLibraryIcon, UserIcon, ArrowTopRightOnSquareIcon, PlayCircleIcon, DevicePhoneMobileIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { DoodleBrush } from './Doodles';

const iconMap: Record<string, typeof UsersIcon> = {
  'School Portal': BuildingLibraryIcon,
  'Teacher Portal': AcademicCapIcon,
  'Parent Portal': UsersIcon,
  'Student Portal': UserIcon,
};

const tones = ['bg-chart-2/12', 'bg-primary/10', 'bg-accent/30', 'bg-chart-4/25'];

export default function Portals() {
  const portals = siteConfig.portals;
  const mobileApp = siteConfig.mobileApp;

  return (
    <section id="portals" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Portal Access</p>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">Choose your portal and jump in</h2>
          <DoodleBrush className="mx-auto mt-2 h-4 w-32" />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Each workspace is optimized for one role so teams spend less time searching and more time executing.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portals.map((portal, index) => {
            const Icon = iconMap[portal.name] ?? UsersIcon;

            return (
              <motion.article
                key={portal.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className={`rounded-3xl border border-border/80 p-5 shadow-sm ${tones[index % tones.length]}`}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{portal.name}</h3>
                <p className="mt-2 min-h-16 text-sm leading-relaxed text-muted-foreground">{portal.description}</p>
                <div className="mt-4 space-y-2">
                  <a
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    Open Portal
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-transparent px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white"
                  >
                    Quick Tour
                    <PlayCircleIcon className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 flex flex-col items-center justify-between gap-5 rounded-3xl border border-border/80 bg-primary/5 p-6 text-center sm:flex-row sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm sm:inline-flex">
              <DevicePhoneMobileIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{mobileApp.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{mobileApp.description}</p>
            </div>
          </div>
          <div className="shrink-0">
            <a
              href={mobileApp.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-transform hover:-translate-y-0.5"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              {mobileApp.cta}
            </a>
            <p className="mt-2 text-center text-xs text-muted-foreground">{mobileApp.note}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
