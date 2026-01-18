'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { 
  SparklesIcon, 
  CodeBracketIcon, 
  ServerIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';
import { siteConfig } from '../config/site.config';

type SubNavItem = {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type NavItemWithSub = {
  name: string;
  hasSubmenu: true;
  featured?: {
    title: string;
    description: string;
    image: string;
    href: string;
  };
  items: SubNavItem[];
};

type NavItemSimple = {
  name: string;
  hasSubmenu?: false;
  href: string;
};

type NavItem = NavItemWithSub | NavItemSimple;

const navigationItems: NavItem[] = [
  {
    name: 'Solutions',
    hasSubmenu: true,
    featured: {
      title: 'Enterprise Suite',
      description: 'Complete digital transformation solution for large organizations with dedicated support.',
      image: '/og-image.png',
      href: '#',
    },
    items: [
      {
        name: 'Digital Transformation',
        description: 'Modernize your business processes',
        href: '#',
        icon: SparklesIcon,
      },
      {
        name: 'Custom Development',
        description: 'Tailored software solutions',
        href: '#',
        icon: CodeBracketIcon,
      },
      {
        name: 'Cloud Services',
        description: 'Scalable cloud infrastructure',
        href: '#',
        icon: CloudIcon,
      },
      {
        name: 'AI & Automation',
        description: 'Intelligent process automation',
        href: '#',
        icon: CpuChipIcon,
      },
      {
        name: 'DevOps & Infrastructure',
        description: 'Streamlined deployment pipelines',
        href: '#',
        icon: ServerIcon,
      },
      {
        name: 'Security & Compliance',
        description: 'Enterprise-grade protection',
        href: '#',
        icon: ShieldCheckIcon,
      },
    ],
  },
  {
    name: 'Products',
    hasSubmenu: false,
    href: '#',
  },
  {
    name: 'Technology',
    hasSubmenu: false,
    href: '#',
  },
  {
    name: 'About',
    hasSubmenu: false,
    href: '#',
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { navigation, name } = siteConfig;

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-background/80 backdrop-blur-lg border border-border rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center" aria-label={`${name} Home`}>
              <img
                src="/icon0.svg"
                alt={`${name} logo`}
                className="h-7 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasSubmenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                {item.hasSubmenu ? (
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors rounded-lg hover:bg-muted"
                  >
                    {item.name}
                    <ChevronDownIcon 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeSubmenu === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors rounded-lg hover:bg-muted block"
                  >
                    {item.name}
                  </a>
                )}

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {item.hasSubmenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-[10px]"
                    >
                      <div className="w-[720px] bg-background border border-border rounded-2xl overflow-hidden">
                        <div className="grid grid-cols-12">
                          {/* Sub Navigation Items */}
                          <div className="col-span-7 p-6">
                            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                              {item.name}
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {item.items.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="group flex items-start gap-4 p-3 rounded-xl hover:bg-muted transition-colors"
                                >
                                  <div className="w-10 h-10 border border-border rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-primary group-hover:bg-primary/5 transition-colors">
                                    <subItem.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                      {subItem.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                      {subItem.description}
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>

                          {/* Featured Visual Side */}
                          {item.featured && (
                            <div className="col-span-5 bg-muted p-6 border-l border-border">
                              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                                Featured
                              </div>
                              <a href={item.featured.href} className="group block">
                                <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-xl border border-border overflow-hidden mb-4 relative">
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                      <SparklesIcon className="w-8 h-8 text-primary" />
                                    </div>
                                  </div>
                                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                                </div>
                                <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                                  {item.featured.title}
                                </h4>
                                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                                  {item.featured.description}
                                </p>
                                <div className="flex items-center text-xs font-medium text-primary">
                                  Learn more
                                  <ArrowRightIcon className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Bottom Bar */}
                        <div className="px-6 py-4 bg-muted/50 border-t border-border flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            Need help choosing? Talk to our experts.
                          </span>
                          <a 
                            href="#" 
                            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                          >
                            Contact Sales
                            <ArrowRightIcon className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="#"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              {navigation.loginText}
            </a>
            <a
              href="#"
              className="px-6 py-2 text-sm font-medium text-primary-foreground bg-primary border border-border rounded-xl hover:bg-primary/90 transition-colors"
            >
              {navigation.ctaText}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-border rounded-b-2xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasSubmenu ? (
                    <div>
                      <button
                        onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                        className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground"
                      >
                        {item.name}
                        <ChevronDownIcon 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeSubmenu === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-4 space-y-1">
                              {item.items.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  <subItem.icon className="w-4 h-4" />
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-3 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2 border-t border-border">
                <a
                  href="#"
                  className="block py-3 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  {navigation.loginText}
                </a>
                <a
                  href="#"
                  className="block px-6 py-3 text-sm font-medium text-center text-primary-foreground bg-primary border border-border rounded-xl hover:bg-primary/90 transition-colors"
                >
                  {navigation.ctaText}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
