"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site.config";

const Careers = () => {
  const careers = siteConfig.careers;
  
  if (careers.length === 0) {
    return null;
  }

  return (
    <section id="careers" className="py-32 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Careers</div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Join The Team</h2>
          <div className="w-16 h-[1px] bg-border mt-8" />
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {careers.map((job, index) => (
            <motion.div
              key={index}
              className="border border-border rounded-2xl p-8 hover:bg-muted transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Title and Meta */}
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-light text-foreground mb-3">{job.title}</h3>
                  <div className="flex gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                    <span>{job.location}</span>
                    <span>·</span>
                    <span>{job.type}</span>
                  </div>
                </div>

                {/* Middle: Description and Requirements */}
                <div className="lg:col-span-6">
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{job.description}</p>
                  <div className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-start text-xs text-muted-foreground">
                        <span className="mr-2">—</span>
                        {req}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: CTA */}
                <div className="lg:col-span-2 flex items-start">
                  <button className="px-6 py-2 border border-border rounded-xl text-sm uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Don't see a role that fits your skills?
          </p>
          <button className="px-8 py-3 border border-border rounded-xl text-sm uppercase tracking-wide text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
            Send Your Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers; 