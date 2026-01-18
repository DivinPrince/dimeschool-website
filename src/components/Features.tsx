'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserGroupIcon, 
  AcademicCapIcon, 
  UsersIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';

const icons = [UserGroupIcon, AcademicCapIcon, UsersIcon];
const colors = ['from-orange-500/20 to-orange-500/5', 'from-blue-500/20 to-blue-500/5', 'from-green-500/20 to-green-500/5'];
const iconColors = ['text-orange-600', 'text-blue-600', 'text-green-600'];

export default function Features() {
  const { products } = siteConfig;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
              One Platform for Everyone
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              DimeSchool connects administrators, teachers, parents, and students in one unified platform
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {products.map((product, index) => {
            const Icon = icons[index];
            return (
              <button
                key={product.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === index
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Icon className="w-5 h-5" />
                {product.name}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Left - Info */}
            <div className="order-2 lg:order-1">
              <p className="text-sm text-muted-foreground mb-2">{products[activeTab].tagline}</p>
              <h3 className="text-3xl font-semibold text-foreground mb-4">
                {products[activeTab].name}
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {products[activeTab].description}
              </p>
              
              <ul className="space-y-4">
                {products[activeTab].features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right - Visual */}
            <div className="order-1 lg:order-2">
              <div className={`relative bg-gradient-to-br ${colors[activeTab]} rounded-3xl p-8 min-h-[400px]`}>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                
                {/* Mock UI based on active tab */}
                <div className="mt-8 space-y-4">
                  {activeTab === 0 && (
                    <>
                      <div className="bg-background/80 backdrop-blur rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-foreground">Student Overview</span>
                          <span className="text-xs text-primary">+12 today</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {['1,247', '45', '98%'].map((val, i) => (
                            <div key={i} className="text-center">
                              <div className="text-xl font-semibold text-foreground">{val}</div>
                              <div className="text-xs text-muted-foreground">{['Students', 'Classes', 'Attendance'][i]}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-background/80 backdrop-blur rounded-xl p-4 shadow-sm">
                        <div className="text-sm font-medium text-foreground mb-3">Fee Collection</div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full w-[78%] bg-primary rounded-full" />
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                          <span>78% collected</span>
                          <span>$124,500 / $160,000</span>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 1 && (
                    <>
                      <div className="bg-background/80 backdrop-blur rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <AcademicCapIcon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">Math Quiz - Grade 5</div>
                            <div className="text-xs text-muted-foreground">32 students</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded">AI Graded</span>
                          <span className="text-muted-foreground">Average: 78%</span>
                        </div>
                      </div>
                      <div className="bg-background/80 backdrop-blur rounded-xl p-4 shadow-sm">
                        <div className="text-sm font-medium text-foreground mb-3">Class Performance</div>
                        <div className="space-y-2">
                          {['Math', 'Science', 'English'].map((subject, i) => (
                            <div key={subject} className="flex items-center gap-3">
                              <span className="text-xs text-muted-foreground w-16">{subject}</span>
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: `${85 - i * 8}%` }} />
                              </div>
                              <span className="text-xs text-foreground">{85 - i * 8}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 2 && (
                    <>
                      <div className="bg-background/80 backdrop-blur rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <UsersIcon className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">John Doe - Grade 5A</div>
                            <div className="text-xs text-muted-foreground">Academic Year 2025-2026</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-muted/50 rounded-lg p-3 text-center">
                            <div className="text-lg font-semibold text-foreground">A-</div>
                            <div className="text-xs text-muted-foreground">Overall Grade</div>
                          </div>
                          <div className="bg-muted/50 rounded-lg p-3 text-center">
                            <div className="text-lg font-semibold text-foreground">96%</div>
                            <div className="text-xs text-muted-foreground">Attendance</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-background/80 backdrop-blur rounded-xl p-4 shadow-sm">
                        <div className="text-sm font-medium text-foreground mb-2">Recent Assessments</div>
                        <div className="space-y-2">
                          {[{ name: 'Math Quiz', score: '92%' }, { name: 'Science Test', score: '88%' }].map((item) => (
                            <div key={item.name} className="flex justify-between text-xs">
                              <span className="text-muted-foreground">{item.name}</span>
                              <span className="text-green-600 font-medium">{item.score}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
