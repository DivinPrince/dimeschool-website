'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteConfig } from '../config/site.config';

interface SocialLinks {
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  github?: string;
}

const SocialIcon = ({ type }: { type: 'linkedin' | 'instagram' | 'twitter' | 'github' }) => {
  const icons = {
    linkedin: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    ),
    instagram: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    github: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  };
  return icons[type];
};

const TeamCard = ({
  name,
  title,
  imageSrc,
  index,
  skills = [],
  social,
}: {
  name: string;
  title: string;
  imageSrc: string;
  index: number;
  skills?: string[];
  social?: SocialLinks;
}) => {
  const socialLinks = Object.entries(social || {}).filter(([_, value]) => value);

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="border border-border rounded-2xl overflow-hidden bg-background hover:border-muted-foreground/30 transition-colors">
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <Image
            src={imageSrc}
            alt={name}
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Social links overlay */}
          {socialLinks.length > 0 && (
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              {socialLinks.map(([key, value]) => (
                <a
                  key={key}
                  href={value?.startsWith('http') ? value : `https://${value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-background/90 backdrop-blur-sm border border-border rounded-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  aria-label={key}
                >
                  <SocialIcon type={key as 'linkedin' | 'instagram' | 'twitter' | 'github'} />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Index number */}
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Name & Title */}
          <h3 className="text-xl font-light text-foreground mb-1">{name}</h3>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            {title}
          </p>

          {/* Skills */}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs text-muted-foreground border border-border rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function TeamCards() {
  const teamMembers = siteConfig.team;

  if (teamMembers.length === 0) {
    return null;
  }

  return (
    <section className="py-32 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - matching other sections */}
        <div className="mb-24">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Team
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            Meet The Team
          </h2>
          <div className="w-16 h-[1px] bg-border mt-8" />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              name={member.name}
              title={member.title}
              imageSrc={member.imageSrc}
              index={index}
              skills={member.skills}
              social={member.social}
            />
          ))}
        </div>

        {/* Bottom CTA - optional */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground mb-6">
            Interested in joining our team?
          </p>
          <a
            href="#careers"
            className="inline-block px-8 py-3 border border-border rounded-xl text-sm uppercase tracking-wide text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
