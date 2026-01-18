'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { ChevronRightIcon, XMarkIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import { SparklesIcon, CodeBracketIcon, ServerIcon, DevicePhoneMobileIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { siteConfig } from '../config/site.config';

export default function CoreProducts() {
  const { products: configProducts, featuredProject } = siteConfig;
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  // Featured project screenshots
  const projectScreenshots = featuredProject?.screenshots || [];

  const nextImage = useCallback(() => {
    if (projectScreenshots.length === 0) return;
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % projectScreenshots.length);
  }, [projectScreenshots.length]);

  const prevImage = useCallback(() => {
    if (projectScreenshots.length === 0) return;
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + projectScreenshots.length) % projectScreenshots.length);
  }, [projectScreenshots.length]);

  const goToImage = useCallback((index: number) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
  }, [currentImageIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    
    const interval = setInterval(() => {
      nextImage();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, nextImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPaused(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextImage, prevImage]);

  // Drag handling
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevImage();
    } else if (info.offset.x < -swipeThreshold) {
      nextImage();
    }
  };
  
  const iconMap: Record<number, React.ReactNode> = {
    0: <SparklesIcon className="w-6 h-6" />,
    1: <CodeBracketIcon className="w-6 h-6" />,
    2: <ServerIcon className="w-6 h-6" />,
  };

  const products = configProducts.map((product, index) => ({
    ...product,
    icon: iconMap[index % 3],
  }));

  const getProductById = (id: string | null) => {
    if (!id) return null;
    return products.find(p => p.id === id) || null;
  };

  const activeProductData = getProductById(activeProduct);

  return (
    <section className="py-24 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-light text-foreground mb-4">
              Core Products
            </h2>
            <div className="w-16 h-px bg-border mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl font-light">
              Explore our suite of integrated tools designed to transform how software is built
            </p>
          </motion.div>
        </div>

        {/* Product Grid - Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-background p-8 group cursor-pointer hover:bg-muted transition-colors border border-border rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveProduct(product.id)}
            >
              {/* Icon */}
              <div className="w-12 h-12 border border-border rounded-xl flex items-center justify-center mb-6 text-foreground">
                {product.icon}
              </div>
              
              {/* Number */}
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-medium text-foreground mb-2">{product.name}</h3>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-4">{product.tagline}</p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
              
              {/* CTA */}
              <button className="text-xs uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors flex items-center group">
                <span>{product.cta}</span>
                <ChevronRightIcon className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Featured Project Showcase */}
        {featuredProject && projectScreenshots.length > 0 && (
          <motion.div 
            className="border border-border mt-6 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <DevicePhoneMobileIcon className="w-6 h-6 text-foreground" />
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    FEATURED PROJECT
                  </div>
                </div>
                
                <h3 className="text-4xl font-light text-foreground mb-4">{featuredProject.name}</h3>
                <p className="text-sm uppercase tracking-wide text-muted-foreground mb-8">{featuredProject.tagline}</p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {featuredProject.description}
                </p>
                
                <ul className="space-y-4 mb-12">
                  {featuredProject.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start text-sm text-foreground"
                  >
                    <span className="text-foreground mr-3">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-4">
                <button className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wide hover:bg-primary/90 transition-colors border border-border rounded-xl">
                  View Project
                </button>
                <div className="text-xs text-muted-foreground">
                  {currentImageIndex + 1} / {projectScreenshots.length}
                </div>
              </div>
            </div>
            
            {/* Mobile Device Mockup with Carousel */}
            <div className="bg-muted p-12 flex items-center justify-center relative border-l border-border overflow-hidden">
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-dime-orange/5"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              
              {/* Mobile Device Frame */}
              <div className="relative z-10">
                {/* Device Shadow with Parallax */}
                <motion.div
                  className="absolute inset-0 bg-black/30 blur-2xl"
                  animate={{
                    y: [0, 8, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Device Container */}
                <motion.div 
                  className="relative bg-background border-8 border-foreground/10 rounded-[2.5rem] shadow-2xl overflow-hidden"
                  style={{ width: '320px', height: '640px' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onHoverStart={() => setIsPaused(true)}
                  onHoverEnd={() => setIsPaused(false)}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-foreground/10 rounded-b-2xl z-30" />
                  
                  {/* Screen Content */}
                  <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-background">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                      <motion.div
                        key={currentImageIndex}
                        custom={direction}
                        initial={{
                          x: direction > 0 ? 300 : -300,
                          opacity: 0,
                          scale: 0.8,
                          rotateY: direction > 0 ? 45 : -45,
                          filter: "blur(10px)",
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          scale: 1,
                          rotateY: 0,
                          filter: "blur(0px)",
                        }}
                        exit={{
                          x: direction > 0 ? -300 : 300,
                          opacity: 0,
                          scale: 0.8,
                          rotateY: direction > 0 ? -45 : 45,
                          filter: "blur(10px)",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                          mass: 0.8,
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                        className="w-full h-full absolute cursor-grab active:cursor-grabbing"
                        style={{ perspective: 1000 }}
                      >
                        <Image
                          src={projectScreenshots[currentImageIndex]}
                          alt={`Dimefleet Screenshot ${currentImageIndex + 1}`}
                          fill
                          className="object-cover pointer-events-none select-none"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none z-20" />
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-border z-30">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? `${(currentImageIndex / (projectScreenshots.length - 1)) * 100}%` : "100%" }}
                      transition={{
                        duration: isPaused ? 0 : 4,
                        ease: "linear",
                      }}
                      key={currentImageIndex}
                    />
                  </div>
                </motion.div>
                
                {/* Enhanced Thumbnail Navigation */}
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 items-center">
                  {projectScreenshots.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => goToImage(idx)}
                      className="relative group"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Go to screenshot ${idx + 1}`}
                    >
                      <motion.div
                        className={`rounded-full ${
                          idx === currentImageIndex 
                            ? 'bg-foreground' 
                            : 'bg-foreground/30'
                        }`}
                        animate={{
                          width: idx === currentImageIndex ? 32 : 8,
                          height: 8,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                      {idx === currentImageIndex && (
                        <motion.div
                          className="absolute inset-0 bg-primary/50 rounded-full"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        )}
      </div>

      {/* Product Detail Modal - Minimal */}
      <AnimatePresence>
        {activeProduct && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProduct(null)}
          >
            <div className="absolute inset-0 bg-black/90" />
            
            <motion.div
              className="relative bg-background border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-6 right-6 text-foreground hover:text-muted-foreground"
                onClick={() => setActiveProduct(null)}
                aria-label="Close modal"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              
              {activeProductData && (
                <div className="p-12">
                  {/* Header */}
                  <div className="flex items-start mb-8">
                    <div className="w-12 h-12 border border-border rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                      {activeProductData.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-foreground mb-2">{activeProductData.name}</h3>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{activeProductData.tagline}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {activeProductData.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-12">
                    <h4 className="text-sm uppercase tracking-widest text-foreground mb-6">Key Features</h4>
                    <ul className="space-y-3">
                      {activeProductData.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-foreground">
                          <span className="text-foreground mr-3">—</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA */}
                  <button className="px-8 py-3 bg-primary text-primary-foreground text-sm font-medium uppercase tracking-wide hover:bg-primary/90 transition-colors border border-border rounded-xl">
                    {activeProductData.cta}
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 