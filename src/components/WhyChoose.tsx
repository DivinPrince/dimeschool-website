'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';

export default function WhyChoose() {
  const { whyChoose } = siteConfig;

  if (!whyChoose || whyChoose.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-background" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
                Why Schools Choose DimeSchool
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Built specifically for schools that want to modernize without complexity.
              </p>
            </motion.div>

            <div className="space-y-6">
              {whyChoose.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="bg-muted rounded-3xl p-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background rounded-2xl p-6 text-center">
                  <div className="text-4xl font-semibold text-foreground mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Schools</div>
                </div>
                <div className="bg-background rounded-2xl p-6 text-center">
                  <div className="text-4xl font-semibold text-foreground mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="bg-background rounded-2xl p-6 text-center">
                  <div className="text-4xl font-semibold text-foreground mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="bg-background rounded-2xl p-6 text-center">
                  <div className="text-4xl font-semibold text-foreground mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-background rounded-2xl p-6">
                <p className="text-foreground italic mb-4">
                  &ldquo;DimeSchool reduced our admin workload by 60%. Teachers now spend more time teaching.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-medium">SM</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Sarah Mensah</div>
                    <div className="text-xs text-muted-foreground">Principal, Horizon Academy</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
