'use client';

import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  UsersIcon,
  ArrowTopRightOnSquareIcon,
  BuildingLibraryIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';

const iconMap: Record<string, typeof UsersIcon> = {
  'School Portal': BuildingLibraryIcon,
  'Teacher Portal': AcademicCapIcon,
  'Parent Portal': UsersIcon,
  'Student Portal': UserIcon,
};

const portals = siteConfig.portals.map((portal) => ({
  ...portal,
  icon: iconMap[portal.name] || UsersIcon,
}));

export default function Portals() {
  return (
    <section id="portals">
      {/* Top Stripe */}
      <div className="h-12 w-full overflow-hidden border-y border-border bg-background">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="portalStripes1" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="10" className="stroke-border" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#portalStripes1)" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Access Your Portal
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select your role to access the appropriate portal
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border rounded-2xl overflow-hidden max-w-6xl mx-auto">
            {portals.map((portal, index) => (
              <motion.a
                key={portal.name}
                href={portal.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-background p-6 hover:bg-muted/50 transition-colors group relative ${
                  index < portals.length - 1 ? 'border-b sm:border-b-0 sm:border-r lg:border-r border-border' : ''
                } ${index === 1 ? 'sm:border-r-0 lg:border-r' : ''} ${index === 2 ? 'sm:border-r lg:border-r' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <portal.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  {portal.name}
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </h3>
                <p className="text-sm text-muted-foreground">
                  {portal.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stripe */}
      <div className="h-12 w-full overflow-hidden border-y border-border bg-background">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="portalStripes2" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="10" className="stroke-border" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#portalStripes2)" />
        </svg>
      </div>
    </section>
  );
}
