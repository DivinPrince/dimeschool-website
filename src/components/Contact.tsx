"use client";

import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { siteConfig } from "../config/site.config";

const Contact = () => {
  const { contact } = siteConfig;
  return (
    <section id="contact" className="py-32 bg-muted transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Contact</div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Get In Touch</h2>
          <div className="w-16 h-[1px] bg-border mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Contact Info */}
          <motion.div 
            className="lg:col-span-5 space-y-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Email */}
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 border border-border rounded-xl flex items-center justify-center shrink-0">
                <EnvelopeIcon className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</div>
                <a 
                  href={`mailto:${contact.email}`}
                  className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            {contact.phones.length > 0 && (
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 border border-border rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone</div>
                  {contact.phones.map((phone, idx) => (
                    <a 
                      key={idx}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-sm text-foreground hover:text-muted-foreground transition-colors block"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Location */}
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 border border-border rounded-xl flex items-center justify-center shrink-0">
                <MapPinIcon className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Office</div>
                <p className="text-sm text-foreground">
                  {contact.address.line1}<br />
                  {contact.address.line2}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="bg-background border border-border rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-border rounded-xl bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:bg-muted transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-border rounded-xl bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:bg-muted transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  className="w-full border border-border rounded-xl bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:bg-muted transition-colors"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Your message..."
                  className="w-full border border-border rounded-xl bg-transparent px-4 py-3 text-sm text-foreground focus:outline-none focus:bg-muted transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wide hover:bg-primary/90 transition-colors border border-border rounded-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
