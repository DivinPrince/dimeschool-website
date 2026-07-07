'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  MouseEvent,
} from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

/* ---------------------------------------------------------------------------
 * Intro gate: the preloader flips this so hero entrances fire exactly when
 * the curtain lifts.
 * ------------------------------------------------------------------------- */

export const IntroContext = createContext(true);

export function useIntroDone() {
  return useContext(IntroContext);
}

/** Signature ease of the whole site: fast start, long luxurious settle. */
export const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------------------------------------------------------------------------
 * MaskReveal: headlines swing up out of an invisible slot.
 * ------------------------------------------------------------------------- */

export function MaskReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  // Observe the visible slot, not the animated child: the child starts fully
  // clipped by overflow-hidden, so it never intersects the viewport itself.
  const inView = useInView(ref, { once: true, margin: '-80px' });

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '112%', rotate: 2.5 }}
        animate={inView ? { y: 0, rotate: 0 } : undefined}
        transition={{ duration: 1, delay, ease: EASE }}
        style={{ transformOrigin: 'left bottom' }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * CharsReveal: a line of text where every character flips up in sequence.
 * ------------------------------------------------------------------------- */

export function CharsReveal({
  text,
  show = true,
  delay = 0,
  stagger = 0.032,
  className = '',
}: {
  text: string;
  show?: boolean;
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <span className="sr-only">{text}</span>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden
          className="inline-block will-change-transform"
          initial={{ y: '115%', rotate: 9 }}
          animate={show ? { y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.85, delay: delay + i * stagger, ease: EASE }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ---------------------------------------------------------------------------
 * CanvasZoom: the big color canvases grow into place as they enter,
 * corners morphing from soft to sharp.
 * ------------------------------------------------------------------------- */

export function CanvasZoom({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 98%', 'start 45%'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const radius = useTransform(scrollYProgress, [0, 1], [64, 32]);

  if (reduce) {
    return <div className={`relative overflow-hidden rounded-[2rem] ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ scale, y, borderRadius: radius }}
      className={`relative overflow-hidden will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
 * Magnetic: buttons lean toward the cursor and spring back.
 * ------------------------------------------------------------------------- */

export function Magnetic({
  children,
  strength = 0.35,
  className = '',
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.2 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.2 });

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
 * Tilt: cards rotate in 3D toward the cursor, like tiles you can pick up.
 * ------------------------------------------------------------------------- */

export function Tilt({
  children,
  max = 12,
  className = '',
}: {
  children: ReactNode;
  max?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const rx = useSpring(useMotionValue(0), { stiffness: 240, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 240, damping: 18 });

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * max);
    rx.set(-py * max);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
 * Counter: numbers spring from 0 to their value when scrolled into view.
 * Handles "60%", "8 min", "99.9%", "156/156", "24/7", "3,000".
 * ------------------------------------------------------------------------- */

export function Counter({ value, className = '' }: { value: string; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const match = value.match(/^([0-9][0-9.,]*)(.*)$/);
  const raw = match ? match[1] : '';
  const suffix = match ? match[2] : value;
  const target = match ? parseFloat(raw.replace(/,/g, '')) : 0;
  const decimals = raw.includes('.') ? raw.split('.')[1].length : 0;
  const grouped = raw.includes(',');

  const spring = useSpring(0, { stiffness: 55, damping: 16 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) spring.set(target);
  }, [inView, spring, target]);

  useEffect(() => {
    return spring.on('change', (v) => {
      setDisplay(
        grouped
          ? Math.round(v).toLocaleString('en-US')
          : v.toFixed(decimals),
      );
    });
  }, [spring, decimals, grouped]);

  if (reduce || !match) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
      {suffix}
    </span>
  );
}
