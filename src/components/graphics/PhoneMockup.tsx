'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

/**
 * The Android app in one glance: every portal as a color tile, plus the
 * over-the-air update toast, the two things that make the app worth having.
 */

const tiles = [
  { name: 'School', className: 'bg-blue text-white' },
  { name: 'Teacher', className: 'bg-yellow text-foreground' },
  { name: 'Parent', className: 'bg-primary text-white' },
  { name: 'Student', className: 'bg-green text-white' },
];

export default function PhoneMockup({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 60, rotate: 8 }}
      whileInView={{ opacity: 1, y: 0, rotate: 3 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
      aria-label="Illustration: the DimeSchool Android app with one tile per portal"
      className={`relative w-48 shrink-0 rounded-[2.2rem] bg-foreground p-2 shadow-lg will-change-transform sm:w-52 ${className}`}
    >
      <div className="overflow-hidden rounded-[1.75rem] bg-cream text-foreground">
        {/* status bar + camera dot */}
        <div className="flex items-center justify-between px-4 pt-2.5">
          <span className="font-mono text-[8px] font-bold">07:58</span>
          <span className="h-2 w-2 rounded-full bg-foreground" />
          <span className="font-mono text-[8px] font-bold">4G ▮▮▮</span>
        </div>

        <div className="px-3.5 pb-4 pt-3">
          <p className="font-display text-sm font-extrabold tracking-[-0.01em]">
            dimeschool<span className="text-primary">.</span>
          </p>
          <p className="font-mono text-[7px] uppercase tracking-[0.12em] text-muted-foreground">
            Every portal · one app
          </p>

          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
            {tiles.map((tile, index) => (
              <motion.div
                key={tile.name}
                initial={reduce ? false : { opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.25 + index * 0.07, type: 'spring', stiffness: 200, damping: 14 }}
                className={`flex aspect-[5/4] flex-col justify-between rounded-xl p-2 ${tile.className}`}
              >
                <span className="font-mono text-[7px] font-bold tracking-widest opacity-75">
                  0{index + 1}
                </span>
                <span className="font-display text-[11px] font-bold leading-tight">
                  {tile.name}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.55, type: 'spring', stiffness: 200, damping: 14 }}
            className="mt-1.5 flex items-center justify-between rounded-xl bg-foreground p-2 text-background"
          >
            <span className="font-display text-[11px] font-bold">Librarian</span>
            <span className="font-mono text-[7px] font-bold tracking-widest opacity-75">05</span>
          </motion.div>

          {/* OTA toast */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.85, type: 'spring', stiffness: 160, damping: 15 }}
            className="mt-2.5 flex items-center gap-1.5 rounded-full bg-green px-2.5 py-1.5 text-white shadow-sm"
          >
            <CheckIcon className="h-3 w-3 shrink-0" strokeWidth={3} />
            <span className="font-mono text-[7px] font-bold uppercase tracking-[0.1em]">
              Updated over the air
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
