'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site.config';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials.map((t, idx) => ({ ...t, id: idx + 1 }));

  useEffect(() => {
    if (testimonials.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative py-32 bg-muted transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">What Clients Say</h2>
          <div className="w-16 h-[1px] bg-border mt-8" />
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="border border-border rounded-2xl p-12"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                style={{ 
                  position: index === currentIndex ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                {/* Quote */}
                <p className="text-2xl font-light text-muted-foreground mb-12 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center justify-between pt-8 border-t border-border">
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">{testimonial.author}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                  <div className="w-12 h-12 border border-border rounded-xl flex items-center justify-center text-foreground font-light">
                    {testimonial.author.charAt(0)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-foreground w-8' 
                    : 'bg-muted-foreground/30 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trusted By */}
        <motion.div
          className="mt-32 pt-16 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-12">Trusted By Schools</p>
          <div className="flex flex-wrap justify-center gap-16">
            {['Uumwe Community Center', 'Kigali Christian School', 'La Promise', 'Saint Jean Paul'].map((company) => (
              <div
                key={company}
                className="text-muted-foreground font-light text-lg uppercase tracking-widest hover:text-foreground transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 