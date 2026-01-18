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
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            {pricing.label || 'Pricing'}
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            {pricing.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {pricing.description}
          </p>
          <div className="w-16 h-[1px] bg-border mt-8 mx-auto" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricing.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative border rounded-2xl p-8 transition-colors ${
                plan.featured
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-muted-foreground/30'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-widest rounded-full">
                    {plan.badge || 'Most Popular'}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-light text-foreground">Custom</span>
                  ) : (
                    <>
                      <span className="text-sm text-muted-foreground">{pricing.currency || '$'}</span>
                      <span className="text-4xl font-light text-foreground">{plan.price}</span>
                      {plan.period && (
                        <span className="text-sm text-muted-foreground">/{plan.period}</span>
                      )}
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-[1px] bg-border mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.featured 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <CheckIcon className="w-3 h-3" strokeWidth={2.5} />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 text-sm font-medium uppercase tracking-wide rounded-xl transition-colors border ${
                  plan.featured
                    ? 'bg-primary text-primary-foreground border-primary hover:bg-primary/90'
                    : 'bg-background text-foreground border-border hover:bg-muted'
                }`}
              >
                {plan.cta || 'Get Started'}
              </button>

              {/* Additional Note */}
              {plan.note && (
                <p className="text-xs text-muted-foreground text-center mt-4">
                  {plan.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        {pricing.note && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-sm text-muted-foreground">
              {pricing.note}
            </p>
          </motion.div>
        )}

        {/* Enterprise CTA */}
        {pricing.enterpriseCta && (
          <motion.div
            className="mt-16 border border-border rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-light text-foreground mb-2">
                  {pricing.enterpriseCta.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl">
                  {pricing.enterpriseCta.description}
                </p>
              </div>
              <button className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wide rounded-xl hover:bg-primary/90 transition-colors border border-border flex-shrink-0">
                {pricing.enterpriseCta.cta}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
