'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Framed photo card with a mono caption — real classrooms as evidence,
 * presented straight and clean.
 */
export default function Snapshot({
  src,
  alt,
  caption,
  sub,
  sizes = '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw',
  priority = false,
  className = '',
}: {
  src: string;
  alt: string;
  caption: string;
  sub?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-xl bg-card p-2.5 pb-4 text-foreground shadow-md ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      <figcaption className="px-1.5 pt-3">
        <p className="font-display text-sm font-bold leading-snug tracking-[-0.01em]">{caption}</p>
        {sub && (
          <p className="label-mono mt-1 !text-muted-foreground">{sub}</p>
        )}
      </figcaption>
    </motion.figure>
  );
}
