'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '../config/site.config';

export default function Manifesto() {
  const { manifesto, name } = siteConfig;
  const timeline = manifesto.timeline;
  const principles = manifesto.principles;

  return (
    <section className="py-32 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Manifesto</div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">{manifesto.title}</h2>
          <div className="w-16 h-[1px] bg-border mt-8" />
        </div>

        {/* Quote */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl md:text-3xl font-light text-muted-foreground">
            "{manifesto.quote}"
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-32">
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-12 gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Year */}
                <div className="col-span-3">
                  <div className="text-4xl font-light text-foreground opacity-20">
                    {item.year}
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-9 border-l border-border pl-8">
                  <h3 className="text-xl font-light text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              className="border border-border rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-light text-foreground mb-6">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Statements */}
        <div className="max-w-4xl mx-auto space-y-12 mb-32">
          {manifesto.statements.map((text, index) => (
            <motion.div
              key={index}
              className={`text-3xl md:text-4xl font-light ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <span className="text-foreground">{text}</span>
            </motion.div>
          ))}
        </div>

        {/* Founder's Message */}
        <motion.div
          className="max-w-4xl mx-auto border border-border rounded-2xl p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Icon */}
            <div className="w-16 h-16 border border-border rounded-xl flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 text-foreground">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-lg font-light text-muted-foreground mb-6 leading-relaxed">
                "{manifesto.founderMessage}"
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-border" />
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Founder's Message</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
