'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '../config/site.config';
import { Marquee } from './Chapter';
import { MaskReveal, EASE } from './motion/Motion';

const ribbon = [
  'Enrollment to graduation',
  'One platform',
  'Every portal',
  'Kigali built',
  'Made for schools',
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { name, footer, social, contact } = siteConfig;
  const reduce = useReducedMotion();

  return (
    <footer className="relative overflow-hidden pt-14 lg:pt-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 border-t-2 border-foreground/80 pt-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="label-mono">Ready to launch?</span>
            <MaskReveal className="mt-5">
              <h2 className="chapter-title">
                Your school&apos;s digital journey <span className="mark mark-yellow">starts now</span>
              </h2>
            </MaskReveal>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center self-start rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 lg:self-end"
          >
            Book a live demo
          </Link>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-extrabold tracking-tight text-foreground">
              {name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {footer.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-foreground/25 px-3.5 py-2 font-bold text-foreground transition-colors hover:border-foreground"
                >
                  LinkedIn
                </a>
              )}
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-foreground/25 px-3.5 py-2 font-bold text-foreground transition-colors hover:border-foreground"
                >
                  X
                </a>
              )}
              <a
                href={`mailto:${contact.email}`}
                className="rounded-full border-2 border-foreground/25 px-3.5 py-2 font-bold text-foreground transition-colors hover:border-foreground"
              >
                Email
              </a>
            </div>
          </div>

          {footer.links.map((group) => (
            <div key={group.title}>
              <p className="label-mono">{group.title}</p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((item) => {
                  const isExternal = item.href.startsWith('http');

                  return (
                    <li key={item.name}>
                      {isExternal ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 pb-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <Marquee items={ribbon} />

      <div aria-hidden className="grid-paper relative select-none overflow-hidden">
        {/* whileInView lives on the un-transformed <p>: the letters start
            translated outside the overflow-hidden container, so observing
            them directly never fires (clipped elements don't intersect). */}
        <motion.p
          className="font-display relative whitespace-nowrap text-center text-[clamp(4rem,14.6vw,15rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-foreground"
          initial={reduce ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.045 }}
        >
          {'dimeschool.'.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: '108%' },
                visible: { y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              whileHover={reduce ? {} : { y: -22, transition: { duration: 0.2 } }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </footer>
  );
}
