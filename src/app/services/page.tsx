import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/PageShell';
import { ChapterHead, Mark } from '@/components/Chapter';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = createPageMetadata({
  title: 'Services',
  description:
    'DimeSchool for every role in your school: complete operations for administrators, AI-powered marking for teachers, real-time visibility for parents and students, and an organized library for librarians.',
  path: '/services',
});

const tiles: Record<string, string> = {
  administrators: 'bg-blue text-white',
  teachers: 'bg-primary text-white',
  'parents-students': 'bg-green text-white',
  librarians: 'bg-purple text-white',
};

export default function ServicesPage() {
  const { products } = siteConfig;

  return (
    <PageShell>
      <section className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <ChapterHead number="S.000" label="Services" right="One platform, every role" />

          <h1 className="chapter-title mt-10 max-w-5xl">
            Built for <Mark>every role</Mark> in your school
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/services/${product.id}`}
                className={`group flex flex-col justify-between rounded-[1.75rem] p-8 shadow-md transition-transform hover:-translate-y-1 lg:p-10 ${
                  tiles[product.id] ?? 'bg-card text-foreground'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[11px] font-bold tracking-[0.14em] opacity-80">
                      S.{String(index + 1).padStart(3, '0')}
                    </span>
                    <ArrowUpRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h2 className="font-display mt-6 text-3xl font-bold tracking-[-0.01em]">
                    {product.name}
                  </h2>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] opacity-80">
                    {product.tagline}
                  </p>
                  <p className="mt-4 text-[15px] leading-relaxed opacity-90">
                    {product.description}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold">
                  {product.cta}
                  <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
