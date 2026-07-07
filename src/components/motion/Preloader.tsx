'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { EASE } from './Motion';

const WORD = 'dimeschool.';
const panels = ['var(--blue)', 'var(--yellow)', 'var(--primary)', 'var(--green)'];

/**
 * Cinematic intro: the wordmark stamps in character by character on ink,
 * four color columns surge up beneath it, then the whole curtain lifts.
 * Plays once per session; skipped entirely under prefers-reduced-motion.
 */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduce || sessionStorage.getItem('ds-intro') === '1') {
      setShow(false);
      onDone();
      return;
    }

    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      sessionStorage.setItem('ds-intro', '1');
      setShow(false);
      onDone();
      document.body.style.overflow = '';
    }, 1600);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [reduce, onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-foreground"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: EASE }}
          aria-hidden
        >
          {/* color columns surge up under the wordmark before the lift */}
          <div className="absolute inset-0 flex">
            {panels.map((bg, i) => (
              <motion.div
                key={bg}
                className="h-full flex-1 origin-bottom"
                style={{ background: bg }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.55, delay: 0.9 + i * 0.07, ease: EASE }}
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-block overflow-hidden px-4">
              {WORD.split('').map((char, i) => (
                <motion.span
                  key={`${char}-${i}`}
                  className="font-display inline-block text-[clamp(2.6rem,9vw,7rem)] font-extrabold leading-none tracking-[-0.03em] text-background will-change-transform"
                  initial={{ y: '120%', rotate: 10 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.035, ease: EASE }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </div>

          <motion.span
            className="label-mono absolute bottom-8 left-1/2 -translate-x-1/2 !text-background/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            Kigali &middot; Rwanda
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
