'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ArrowUpRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import logoImage from '@/app/icon1.png';
import { siteConfig } from '../config/site.config';

const navTiles = [
  { number: '01', label: 'Platform', href: '/features', className: 'bg-blue text-white' },
  { number: '02', label: 'MarkEase AI', href: '/markease', className: 'bg-yellow text-foreground' },
  { number: '03', label: 'Pricing', href: '/pricing', className: 'bg-primary text-white' },
  { number: '04', label: 'Portals', href: '/portals', className: 'bg-green text-white' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { name, social, contact } = siteConfig;

  return (
    <>
      {/* Desktop: Units-style fixed rail of color tiles */}
      <nav
        aria-label="Main"
        className="fixed bottom-4 left-4 top-4 z-40 hidden w-36 flex-col gap-2 lg:flex"
      >
        <Link
          href="/"
          aria-label={`${name} home`}
          className="flex items-center gap-2 rounded-xl bg-card p-3 shadow-sm"
        >
          <Image src={logoImage} alt="" className="h-7 w-auto" priority />
          <span className="font-display text-[13px] font-extrabold leading-tight tracking-tight text-foreground">
            {name}
          </span>
        </Link>

        {navTiles.map((tile) => (
          <Link
            key={tile.label}
            href={tile.href}
            className={`group flex min-h-16 flex-1 flex-col justify-between rounded-xl p-3 transition-transform hover:-translate-x-0 hover:translate-y-[-2px] ${tile.className}`}
          >
            <span className="flex items-start justify-between">
              <span className="font-mono text-[10px] font-bold tracking-widest opacity-80">
                {tile.number}
              </span>
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span className="font-display text-sm font-bold leading-tight">{tile.label}</span>
          </Link>
        ))}

        <Link
          href="/contact"
          className="group flex h-20 flex-col justify-between rounded-xl bg-purple p-3 text-white transition-transform hover:translate-y-[-2px]"
        >
          <ArrowUpRightIcon className="h-3.5 w-3.5 self-end transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="font-display text-sm font-bold leading-tight">
            Book a<br />Demo
          </span>
        </Link>

        <div className="flex items-center justify-center gap-3 rounded-xl bg-foreground p-3 text-background">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="font-display text-xs font-extrabold hover:text-yellow"
            >
              in
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="font-display text-xs font-extrabold hover:text-yellow"
            >
              X
            </a>
          )}
          <a href={`mailto:${contact.email}`} aria-label="Email us" className="hover:text-yellow">
            <EnvelopeIcon className="h-4 w-4" />
          </a>
        </div>
      </nav>

      {/* Mobile: top bar with color-tile menu */}
      <nav className="fixed left-0 right-0 top-0 z-50 bg-background/90 backdrop-blur-md lg:hidden">
        <div className="px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between border-b border-border">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${name} home`}>
              <Image src={logoImage} alt={`${name} logo`} className="h-7 w-auto" priority />
              <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
                {name}
              </span>
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-b border-border"
              >
                <div className="grid grid-cols-2 gap-2 py-4">
                  {navTiles.map((tile) => (
                    <Link
                      key={tile.label}
                      href={tile.href}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-20 flex-col justify-between rounded-xl p-3 ${tile.className}`}
                    >
                      <span className="flex items-start justify-between">
                        <span className="font-mono text-[10px] font-bold tracking-widest opacity-80">
                          {tile.number}
                        </span>
                        <ArrowUpRightIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-display text-sm font-bold leading-tight">
                        {tile.label}
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="col-span-2 flex items-center justify-between rounded-xl bg-purple p-4 text-white"
                  >
                    <span className="font-display text-sm font-bold">Book a Demo</span>
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
