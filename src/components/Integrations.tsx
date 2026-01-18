'use client';

import { motion } from 'framer-motion';
import { SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';

export default function Integrations() {
  const { integrations } = siteConfig;

  return (
    <section className="py-32 bg-background transition-colors duration-300" id="integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Integrations</div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Powered by AI</h2>
          <div className="w-16 h-[1px] bg-border mt-8" />
        </div>

        <motion.div
          className="border border-border rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <div className="w-16 h-16 border border-border rounded-xl flex items-center justify-center mb-8">
                <SparklesIcon className="w-8 h-8 text-primary" strokeWidth={1} />
              </div>
              
              <h3 className="text-3xl font-light text-foreground mb-4">{integrations.title}</h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {integrations.description}
              </p>
              
              <ul className="space-y-4 mb-12">
                <li className="flex items-start text-sm text-foreground">
                  <span className="text-foreground mr-3">—</span>
                  Upload student answer papers in bulk
                </li>
                <li className="flex items-start text-sm text-foreground">
                  <span className="text-foreground mr-3">—</span>
                  AI grades papers with detailed feedback
                </li>
                <li className="flex items-start text-sm text-foreground">
                  <span className="text-foreground mr-3">—</span>
                  Teachers review and approve results
                </li>
                <li className="flex items-start text-sm text-foreground">
                  <span className="text-foreground mr-3">—</span>
                  Save hours on routine marking tasks
                </li>
              </ul>
              
              <button className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wide hover:bg-primary/90 transition-colors border border-border rounded-xl w-fit flex items-center gap-2">
                {integrations.cta}
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
            
            <div className="bg-muted p-12 flex items-center justify-center border-l border-border">
              <div className="relative w-full max-w-md">
                <motion.div
                  className="bg-background border border-border rounded-2xl p-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <SparklesIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">MarkEase AI</div>
                      <div className="text-xs text-muted-foreground">Processing complete</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Papers Graded</span>
                      <span className="text-sm font-medium text-foreground">156/156</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div 
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Average Score: 72%</span>
                      <span>Time Saved: 8 hours</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-background border border-border rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs text-foreground">Ready for review</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
