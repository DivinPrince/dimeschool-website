'use client';

import Link from 'next/link';
import { siteConfig } from '../config/site.config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, footer, social, contact } = siteConfig;
  const footerLinks = footer.links;
  
  return (
    <footer className="border-t border-border bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-light tracking-tight text-foreground mb-6">
              {name}
            </div>
            <p className="text-sm text-muted-foreground mb-8 max-w-sm leading-relaxed">
              {footer.description}
            </p>
            <div className="inline-flex items-center border border-border rounded-xl w-fit overflow-hidden">
              {social.linkedin && (
                <>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-r border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                  <div className="w-4 h-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="footerStripe1" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                          <line x1="0" y1="0" x2="0" y2="6" className="stroke-foreground" strokeWidth="1.5" opacity="0.2" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#footerStripe1)" />
                    </svg>
                  </div>
                </>
              )}
              
              {social.twitter && (
                <>
                  <a
                    href={social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-l border-r border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0"
                    aria-label="X/Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                  <div className="w-4 h-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="footerStripe2" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                          <line x1="0" y1="0" x2="0" y2="6" className="stroke-foreground" strokeWidth="1.5" opacity="0.2" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#footerStripe2)" />
                    </svg>
                  </div>
                </>
              )}
              
              {social.instagram && (
                <>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-l border-r border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <div className="w-4 h-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="footerStripe3" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                          <line x1="0" y1="0" x2="0" y2="6" className="stroke-foreground" strokeWidth="1.5" opacity="0.2" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#footerStripe3)" />
                    </svg>
                  </div>
                </>
              )}
              
              {social.youtube && (
                <>
                  <a
                    href={social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border-l border-r border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <div className="w-4 h-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="footerStripe4" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                          <line x1="0" y1="0" x2="0" y2="6" className="stroke-foreground" strokeWidth="1.5" opacity="0.2" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#footerStripe4)" />
                    </svg>
                  </div>
                </>
              )}
              
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="w-10 h-10 border-l border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors flex-shrink-0"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
          
          {/* Link Columns */}
          {footerLinks.map((category) => (
            <div key={category.title}>
              <h3 className="text-xs uppercase tracking-widest text-foreground mb-6 font-medium">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link) => {
                  const isExternal = link.href.startsWith('http');
                  return (
                    <li key={link.name}>
                      {isExternal ? (
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link 
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter */}
        {footer.newsletter.enabled && (
          <div className="border-t border-border pt-16 pb-16">
            <div className="max-w-xl">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{footer.newsletter.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {footer.newsletter.description}
              </p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder={footer.newsletter.placeholder}
                  className="flex-1 px-4 py-3 bg-transparent border border-border rounded-xl text-sm text-foreground focus:outline-none focus:bg-muted transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors border border-border rounded-xl"
                >
                  {footer.newsletter.buttonText}
                </button>
              </form>
            </div>
          </div>
        )}
        
        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
