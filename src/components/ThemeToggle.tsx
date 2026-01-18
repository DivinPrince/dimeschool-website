'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-muted border border-border" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-10 h-10 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300 flex items-center justify-center overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{
          background: isDark
            ? 'linear-gradient(135deg, rgba(30, 30, 50, 1) 0%, rgba(20, 20, 35, 1) 100%)'
            : 'linear-gradient(135deg, rgba(250, 250, 248, 1) 0%, rgba(245, 245, 240, 1) 100%)',
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Stars (visible in dark mode) */}
      <AnimatePresence>
        {isDark && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0.5, 1],
                  scale: 1,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: i * 0.1,
                  opacity: { duration: 2, repeat: Infinity, repeatType: 'reverse' }
                }}
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${15 + i * 25}%`,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Sun rays (visible on hover in light mode) */}
      <AnimatePresence>
        {!isDark && isHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`ray-${i}`}
                className="absolute w-0.5 h-1.5 bg-amber-500/40 rounded-full origin-bottom"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -100%) rotate(${i * 45}deg) translateY(-10px)`,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main icon container */}
      <div className="relative z-10">
        {/* Sun */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            animate={{ rotate: isHovered && !isDark ? 180 : 0 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-amber-600"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Moon */}
        <motion.div
          className="flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-slate-200 drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]"
            animate={{ 
              rotate: isHovered ? [0, -10, 10, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={false}
        animate={{
          boxShadow: isHovered
            ? isDark
              ? 'inset 0 0 8px rgba(148, 163, 184, 0.15)'
              : 'inset 0 0 8px rgba(180, 130, 80, 0.15)'
            : 'inset 0 0 0px transparent',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Click ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ scale: 0, opacity: 0.3 }}
        animate={{ scale: 0, opacity: 0 }}
        whileTap={{ 
          scale: 2, 
          opacity: 0,
          transition: { duration: 0.4 }
        }}
        style={{
          background: isDark 
            ? 'radial-gradient(circle, rgba(148, 163, 184, 0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(180, 130, 80, 0.2) 0%, transparent 70%)',
        }}
      />
    </motion.button>
  );
}
