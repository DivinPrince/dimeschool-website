'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserGroupIcon, AcademicCapIcon, UsersIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { DoodleBrush, DoodleSquiggle } from './Doodles';

const icons = [UserGroupIcon, AcademicCapIcon, UsersIcon];
const panelTones = ['from-chart-2/20 via-chart-2/10 to-transparent', 'from-primary/20 via-chart-4/25 to-transparent', 'from-accent/35 via-chart-3/20 to-transparent'];

export default function Features() {
  const { products } = siteConfig;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative overflow-hidden py-24" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Role-based Experience</p>
          <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">One platform. Three powerful journeys.</h2>
          <DoodleBrush className="mx-auto mt-2 h-4 w-28" />
          <p className="mt-4 text-lg text-muted-foreground">
            Every role gets a tailored workspace with tools designed for the work they actually do.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-3">
            {products.map((product, index) => {
              const Icon = icons[index] ?? UserGroupIcon;
              const isActive = activeTab === index;

              return (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full rounded-3xl border p-5 text-left transition-all ${
                    isActive
                      ? 'border-primary/30 bg-white shadow-md shadow-primary/10'
                      : 'border-border/80 bg-white/70 hover:border-primary/20 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{product.tagline}</p>
                      <h3 className="mt-1 text-2xl font-semibold text-foreground">{product.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative rounded-[2rem] border border-border/80 bg-white p-6 shadow-lg lg:p-8">
            <div className={`pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br ${panelTones[activeTab]}`} />

            <AnimatePresence mode="wait">
              <motion.div
                key={products[activeTab].id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Superpowers
                </div>
                <h3 className="mt-3 text-3xl font-semibold text-foreground">{products[activeTab].name}</h3>

                <div className="mt-6 grid gap-3">
                  {products[activeTab].features.slice(0, 5).map((feature, idx) => (
                    <div key={feature} className="rounded-2xl border border-border/70 bg-white/90 p-4 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-medium text-foreground">{feature}</p>
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-primary">
                          {idx + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm"
                >
                  {products[activeTab].cta}
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <DoodleSquiggle className="pointer-events-none absolute -bottom-5 right-2 hidden h-10 w-20 rotate-[8deg] lg:block" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
