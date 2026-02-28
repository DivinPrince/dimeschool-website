'use client';

import Link from 'next/link';
import { siteConfig } from '../config/site.config';
import { DoodleBrush } from './Doodles';

export default function Footer() {
  const year = new Date().getFullYear();
  const { name, footer, social, contact } = siteConfig;

  return (
    <footer className="relative overflow-hidden pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-[2rem] border border-primary/20 bg-primary/6 p-7 lg:flex lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Ready to launch?</p>
            <h3 className="mt-2 text-3xl font-semibold text-foreground">Your school’s digital journey starts now.</h3>
            <DoodleBrush className="mt-2 h-4 w-32" />
          </div>
          <a
            href="#contact"
            className="mt-4 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground lg:mt-0"
          >
            Book a live demo
          </a>
        </div>

        <div className="rounded-[2rem] border border-border/80 bg-white p-7 shadow-sm lg:p-8">
          <div className="grid gap-8 lg:grid-cols-6">
            <div className="lg:col-span-2">
              <p className="text-2xl font-semibold text-foreground">{name}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{footer.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {social.linkedin && (
                  <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-3 py-1.5 text-foreground">
                    LinkedIn
                  </a>
                )}
                {social.twitter && (
                  <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-3 py-1.5 text-foreground">
                    X
                  </a>
                )}
                <a href={`mailto:${contact.email}`} className="rounded-full border border-border px-3 py-1.5 text-foreground">
                  Email
                </a>
              </div>
            </div>

            {footer.links.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">{group.title}</p>
                <ul className="mt-3 space-y-2">
                  {group.links.map((item) => {
                    const isExternal = item.href.startsWith('http');

                    return (
                      <li key={item.name}>
                        {isExternal ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
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

          {footer.newsletter.enabled && (
            <div className="mt-8 rounded-2xl border border-border/80 bg-muted/40 p-5">
              <p className="text-sm font-semibold text-foreground">{footer.newsletter.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{footer.newsletter.description}</p>
              <form className="mt-4 flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  placeholder={footer.newsletter.placeholder}
                  className="w-full rounded-full border border-input bg-white px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary"
                  required
                />
                <button type="submit" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                  {footer.newsletter.buttonText}
                </button>
              </form>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} {name}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-foreground">Privacy</Link>
              <Link href="#" className="hover:text-foreground">Terms</Link>
              <Link href="#" className="hover:text-foreground">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
