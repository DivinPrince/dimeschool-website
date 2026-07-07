import type { ReactNode } from 'react';
import Footer from './Footer';

/**
 * Shared frame for subpages: same left-rail offset as the homepage, clearance
 * for the fixed mobile navbar, and the site footer. `title` renders an
 * SEO-only h1 for pages whose visible headline lives inside a section (their
 * chapter headlines are h2s); pages with their own visible h1 omit it.
 */
export default function PageShell({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-background overflow-x-clip pt-16 lg:pl-44 lg:pt-0">
      {title && <h1 className="sr-only">{title}</h1>}
      {children}
      <Footer />
    </div>
  );
}
