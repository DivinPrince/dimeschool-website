'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';

export default function BlogInsights() {
  const blogPosts = siteConfig.blog.map((post, idx) => ({ ...post, id: idx + 1 }));
  
  if (blogPosts.length === 0) {
    return null;
  }
  
  return (
    <section className="py-32 bg-muted transition-colors duration-300" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Blog</div>
          <h2 className="text-4xl md:text-5xl font-light text-foreground">Latest Insights</h2>
          <div className="w-16 h-[1px] bg-border mt-8" />
        </div>
        
        {/* Blog Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Diagonal stripe separators - visible only on desktop between cards */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-16 -ml-8 border-x border-border">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="blogStripe1" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="6" className="stroke-foreground" strokeWidth="1.5" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blogStripe1)" />
            </svg>
          </div>
          <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-16 -ml-8 border-x border-border">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="blogStripe2" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="6" className="stroke-foreground" strokeWidth="1.5" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blogStripe2)" />
            </svg>
          </div>
          
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="border border-border rounded-2xl overflow-hidden group cursor-pointer relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-secondary border-b border-border flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {post.category}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">·</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-light text-foreground mb-4 line-clamp-2 group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-xs uppercase tracking-widest text-foreground group-hover:text-muted-foreground transition-colors">
                  <span>Read Article</span>
                  <ArrowRightIcon className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* View All */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wide hover:bg-primary/90 transition-colors border border-border rounded-xl">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
} 