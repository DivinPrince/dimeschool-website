'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '../config/site.config';

export default function Hero() {
  const { hero } = siteConfig;
  
  return (
    <section className="pt-28 lg:pt-36 pb-16 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6 leading-tight max-w-5xl whitespace-pre-line"
        >
          {hero.headline}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base text-muted-foreground mb-10 max-w-2xl font-light leading-relaxed"
        >
          {hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="px-8 py-4 bg-primary text-primary-foreground text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors border border-border rounded-xl uppercase">
            {hero.primaryCta}
          </button>
          <button className="px-8 py-4 bg-background text-foreground text-sm font-medium tracking-wide hover:bg-muted transition-colors border border-border rounded-xl uppercase">
            {hero.secondaryCta}
          </button>
        </motion.div>

        {/* Stats or Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {hero.stats.map((stat) => (
            <div key={stat.number} className="border border-border rounded-2xl p-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">{stat.number}</div>
              <div className="text-3xl font-light text-foreground mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
