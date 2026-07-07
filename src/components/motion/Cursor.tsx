'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Custom cursor: a snappy orange dot plus a lagging ring that swells over
 * anything clickable. Desktop fine-pointers only; the native cursor stays.
 */
export default function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const ringX = useSpring(mx, { stiffness: 300, damping: 28, mass: 0.6 });
  const ringY = useSpring(my, { stiffness: 300, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    const onOver = (e: PointerEvent) => {
      setActive(
        Boolean((e.target as Element | null)?.closest?.('a, button, [role="button"], input, textarea, label')),
      );
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
    };
  }, [reduce, mx, my]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[120] h-2.5 w-2.5 rounded-full bg-primary"
        style={{ x: mx, y: my, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[119] rounded-full border-2 border-primary/70 mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: active ? 56 : 34, height: active ? 56 : 34, opacity: active ? 1 : 0.7 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      />
    </>
  );
}
