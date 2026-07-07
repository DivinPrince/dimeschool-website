'use client';

import { ReactNode, useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  MotionValue,
} from 'framer-motion';

/**
 * Shared primitives for the market-day system: mono label rows over hairline
 * rules, color panels behind key words, scrolling marquee ribbons, one arched
 * circus-poster headline, and grey-to-ink scroll reveals.
 */

export function ChapterHead({
  number,
  label,
  right,
  className = '',
}: {
  number: string;
  label: string;
  right?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-4 pb-3">
        <span className="label-mono !text-inherit opacity-70">
          {number} &middot; {label}
        </span>
        {right && <span className="label-mono hidden !text-inherit opacity-70 sm:block">{right}</span>}
      </div>
      <hr className="rule border-current opacity-30" />
    </div>
  );
}

export type MarkTone = 'orange' | 'yellow' | 'blue' | 'green' | 'purple';

const toneClass: Record<MarkTone, string> = {
  orange: 'mark',
  yellow: 'mark mark-yellow',
  blue: 'mark mark-blue',
  green: 'mark mark-green',
  purple: 'mark mark-purple',
};

export function Mark({ children, tone = 'orange' }: { children: ReactNode; tone?: MarkTone }) {
  return <span className={toneClass[tone]}>{children}</span>;
}

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

/**
 * Scrolling ribbon between chapters. The track drifts on its own, then
 * accelerates, and reverses, with the reader's scroll velocity.
 */
export function Marquee({
  items,
  className = 'bg-foreground text-background',
  baseVelocity = 2.4,
}: {
  items: string[];
  className?: string;
  baseVelocity?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce || !inView) return;
    let moveBy = direction.current * baseVelocity * (delta / 1000);
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    moveBy += direction.current * moveBy * Math.abs(factor);
    baseX.set(baseX.get() + moveBy);
  });

  const row = (key: string) => (
    <span key={key} className="inline-flex items-center">
      {items.map((item) => (
        <span key={`${key}-${item}`} className="inline-flex items-center">
          <span className="font-display px-5 text-lg font-bold uppercase tracking-wide lg:text-xl">
            {item}
          </span>
          <span aria-hidden className="text-lg">
            &#9670;
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div ref={ref} aria-hidden className={`marquee py-3.5 ${className}`}>
      <motion.div className="inline-flex w-max will-change-transform" style={{ x }}>
        {row('a')}
        {row('b')}
        {row('c')}
        {row('d')}
      </motion.div>
    </div>
  );
}

function RevealWord({
  progress,
  range,
  word,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  word: string;
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{word}</motion.span>{' '}
    </>
  );
}

/** Body copy that fades word by word from grey to ink as it scrolls into view. */
export function RevealText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.35'],
  });
  const words = text.split(' ');

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <RevealWord
          key={`${word}-${i}`}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
          word={word}
        />
      ))}
    </p>
  );
}
