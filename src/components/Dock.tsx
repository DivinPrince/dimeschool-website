'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Floating pill dock, Wembi-style: a chapter-progress chip on the left,
 * quick navigation on the right. Chapters are read from [data-chapter]
 * sections as they scroll through the viewport.
 */
export default function Dock() {
  const [chapter, setChapter] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-chapter]'));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setChapter(entry.target.getAttribute('data-chapter'));
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none fixed bottom-4 left-4 right-4 z-40 flex items-end justify-between gap-3 lg:left-48"
        >
          <div className="pointer-events-auto hidden md:block">
            <AnimatePresence mode="wait">
              {chapter && (
                <motion.span
                  key={chapter}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2.5 text-xs font-semibold text-foreground shadow-md"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {chapter}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <nav
            aria-label="Quick navigation"
            className="pointer-events-auto ml-auto flex items-center gap-1 rounded-full bg-card p-1.5 shadow-md"
          >
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Overview
            </Link>
            <Link
              href="/markease"
              className="hidden rounded-full px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted sm:block"
            >
              MarkEase
            </Link>
            <Link
              href="/pricing"
              className="hidden rounded-full px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted sm:block"
            >
              Pricing
            </Link>
            <Link
              href="/portals"
              className="hidden rounded-full px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-muted sm:block"
            >
              Portals
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
