'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site.config';
import { 
  UserGroupIcon, 
  ClockIcon, 
  SparklesIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

const featureIcons = [UserGroupIcon, ClockIcon, SparklesIcon];

export default function Hero() {
  const { hero } = siteConfig;
  const [wordIndex, setWordIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % hero.rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [hero.rotatingWords.length]);
  
  return (
    <section className="pt-28 lg:pt-36 pb-16 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1]"
            >
              {hero.headline}{' '}
              <span className="relative inline-block min-w-[200px] sm:min-w-[260px] lg:min-w-[300px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative text-primary whitespace-nowrap"
                  >
                    {hero.rotatingWords[wordIndex]}
                    {/* Striped underline */}
                    <span className="absolute -bottom-2 left-0 right-0 h-3 overflow-hidden rounded-sm">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <defs>
                          <pattern id="heroStripe" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                            <line x1="0" y1="0" x2="0" y2="6" className="stroke-primary" strokeWidth="2" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#heroStripe)" opacity="0.4" />
                      </svg>
                    </span>
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              {hero.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a 
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-wide hover:bg-primary/90 transition-all rounded-xl text-center"
              >
                Schedule a Demo
              </a>
              <a 
                href="#portals"
                className="px-8 py-4 bg-background text-foreground text-sm font-medium tracking-wide hover:bg-muted transition-colors border border-border rounded-xl inline-flex items-center justify-center gap-2"
              >
                Access Portal
              </a>
            </motion.div>

          </div>

          {/* Right Side - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard Card */}
            <div className="relative bg-background border border-border rounded-2xl overflow-hidden">
              {/* Striped top bar */}
              <div className="h-2 w-full">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="dashboardStripe" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="6" className="stroke-primary" strokeWidth="2" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dashboardStripe)" opacity="0.5" />
                </svg>
              </div>
              {/* Dashboard Header */}
              <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <AcademicCapIcon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">DimeSchool Dashboard</div>
                    <div className="text-xs text-muted-foreground">Admin Overview</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-xs text-muted-foreground">Live</span>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6">
                {/* Stats Row */}
                <div className="flex items-stretch gap-0 mb-6 border border-border rounded-xl overflow-hidden">
                  <div className="flex-1 bg-muted/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <UserGroupIcon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Students</span>
                    </div>
                    <div className="text-2xl font-semibold text-foreground">1,247</div>
                    <div className="text-xs text-green-600">+12% this term</div>
                  </div>
                  {/* Striped divider */}
                  <div className="w-2 shrink-0">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="statStripe1" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                          <line x1="0" y1="0" x2="0" y2="4" className="stroke-border" strokeWidth="1.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#statStripe1)" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-muted/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ChartBarIcon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Avg Score</span>
                    </div>
                    <div className="text-2xl font-semibold text-foreground">78%</div>
                    <div className="text-xs text-green-600">+5% improvement</div>
                  </div>
                  {/* Striped divider */}
                  <div className="w-2 shrink-0">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="statStripe2" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                          <line x1="0" y1="0" x2="0" y2="4" className="stroke-border" strokeWidth="1.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#statStripe2)" />
                    </svg>
                  </div>
                  <div className="flex-1 bg-muted/50 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CurrencyDollarIcon className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Fees Collected</span>
                    </div>
                    <div className="text-2xl font-semibold text-foreground">94%</div>
                    <div className="text-xs text-muted-foreground">This month</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-muted/30 rounded-xl p-4">
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">Recent Activity</div>
                  <div className="space-y-3">
                    {[
                      { action: 'New enrollment', detail: 'Sarah K. joined Grade 5', time: '2m ago' },
                      { action: 'Assessment graded', detail: 'Math Quiz - 32 students', time: '15m ago' },
                      { action: 'Fee payment', detail: '$450 received from Parent', time: '1h ago' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-foreground">{item.action}</div>
                          <div className="text-xs text-muted-foreground">{item.detail}</div>
                        </div>
                        <div className="text-xs text-muted-foreground">{item.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card - MarkEase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl overflow-hidden"
            >
              {/* Striped accent */}
              <div className="h-1 w-full">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="floatStripe1" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="4" className="stroke-primary" strokeWidth="1.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#floatStripe1)" opacity="0.6" />
                </svg>
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">AI Grading Complete</div>
                  <div className="text-xs text-muted-foreground">156 papers in 8 minutes</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Card - Notification */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -top-4 -right-4 bg-background border border-border rounded-xl overflow-hidden"
            >
              {/* Striped accent */}
              <div className="h-1 w-full">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="floatStripe2" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="4" className="stroke-green-500" strokeWidth="1.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#floatStripe2)" opacity="0.6" />
                </svg>
              </div>
              <div className="flex items-center gap-2 p-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-foreground">Report cards ready</span>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
