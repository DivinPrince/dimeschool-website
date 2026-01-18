'use client';

import { motion } from 'framer-motion';
import { LightBulbIcon, CodeBracketIcon, RocketLaunchIcon, ServerIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';

export default function ProcessFlow() {
  const iconMap = [LightBulbIcon, CodeBracketIcon, ServerIcon, RocketLaunchIcon];
  const configSteps = siteConfig.processFlow;
  
  if (configSteps.length === 0) {
    return null;
  }
  
  const steps = configSteps.map((step, idx) => ({
    id: step.step,
    icon: iconMap[idx % iconMap.length],
    title: step.title,
    description: step.description,
  }));

  return (
    <section className="relative py-32 bg-background transition-colors duration-300">
      {/* Minimal grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Process</div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">How It Works</h2>
          <div className="w-16 h-[1px] bg-border mt-8" />
        </div>

        {/* Process Steps - Vertical Timeline */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="flex items-start gap-4 mb-6">
                  {/* Step Number */}
                  <div className="text-4xl font-light text-foreground opacity-20 min-w-[3rem]">
                    {String(step.id).padStart(2, '0')}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 border border-border rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-foreground" strokeWidth={1} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="pl-4 border-l border-border">
                  <h3 className="text-xl font-light text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pb-6">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-12 gap-8 items-start">
                {/* Step Number */}
                <div className="col-span-2">
                  <div className="text-6xl font-light text-foreground opacity-20">
                    {String(step.id).padStart(2, '0')}
                  </div>
                </div>

                {/* Icon */}
                <div className="col-span-2 flex items-start justify-center">
                  <div className="w-16 h-16 border border-border rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-foreground" strokeWidth={1} />
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-8 border-l border-border pl-8 pb-8">
                  <h3 className="text-2xl font-light text-foreground mb-4">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wide hover:bg-primary/90 transition-colors border border-border rounded-xl">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
} 