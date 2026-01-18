'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';

export default function Pricing() {
  const { pricing } = siteConfig;

  if (!pricing || pricing.plans.length === 0) {
    return null;
  }

  return (
    <section className="py-32 bg-background transition-colors duration-300" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enterprise CTA */}
        {pricing.enterpriseCta && (
          <motion.div
            className="p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {pricing.enterpriseCta.title}
                </h3>
                <p className="text-muted-foreground max-w-xl">
                  {pricing.enterpriseCta.description}
                </p>
              </div>
              <a 
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wide rounded-xl hover:bg-primary/90 transition-colors shrink-0"
              >
                {pricing.enterpriseCta.cta}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
