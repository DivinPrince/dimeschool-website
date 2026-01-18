'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = siteConfig.faq;
  
  if (faqs.length === 0) {
    return null;
  }
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-32 bg-background transition-colors duration-300" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Common Questions</h2>
          <div className="w-16 h-[1px] bg-border mt-8" />
        </div>
        
        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border rounded-2xl overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-muted transition-colors"
              >
                <span className="text-lg font-light text-foreground pr-8">{faq.question}</span>
                <ChevronDownIcon 
                  className={`h-5 w-5 text-foreground transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  strokeWidth={1}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden border-t border-border"
                  >
                    <div className="p-6 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 