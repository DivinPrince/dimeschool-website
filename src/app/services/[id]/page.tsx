import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import PageShell from '@/components/PageShell';
import { ChapterHead, Mark, type MarkTone } from '@/components/Chapter';
import { createPageMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site.config';

const tones: Record<string, { mark: MarkTone; chip: string }> = {
  administrators: { mark: 'blue', chip: 'bg-blue text-white' },
  teachers: { mark: 'orange', chip: 'bg-primary text-white' },
  'parents-students': { mark: 'green', chip: 'bg-green text-white' },
  librarians: { mark: 'purple', chip: 'bg-purple text-white' },
};

export function generateStaticParams() {
  return siteConfig.products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = siteConfig.products.find((p) => p.id === id);
  if (!product) return {};

  return createPageMetadata({
    title: `${product.name} — ${product.tagline}`,
    description: product.description,
    path: `/services/${product.id}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const index = siteConfig.products.findIndex((p) => p.id === id);
  if (index === -1) notFound();

  const product = siteConfig.products[index];
  const tone = tones[product.id] ?? { mark: 'orange' as MarkTone, chip: 'bg-primary text-white' };
  const others = siteConfig.products.filter((p) => p.id !== product.id);

  return (
    <PageShell>
      <section className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <ChapterHead
            number={`S.${String(index + 1).padStart(3, '0')}`}
            label={product.name}
            right="DimeSchool Services"
          />

          <h1 className="chapter-title mt-10 max-w-5xl">
            DimeSchool <Mark tone={tone.mark}>{product.name.toLowerCase()}</Mark>
          </h1>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {product.tagline}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <ul className="border-t-2 border-foreground/80">
              {product.features.map((feature, idx) => (
                <li
                  key={feature}
                  className="flex items-baseline gap-4 border-b border-border py-3.5"
                >
                  <span className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] font-semibold text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2.5 self-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-bold text-background transition-transform hover:-translate-y-0.5"
              >
                Book a live demo
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-card px-7 py-4 text-sm font-bold text-foreground shadow-sm transition-transform hover:-translate-y-0.5"
              >
                See pricing
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <p className="label-mono">Other roles</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {others.map((other) => (
                <Link
                  key={other.id}
                  href={`/services/${other.id}`}
                  className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                    tones[other.id]?.chip ?? 'bg-card text-foreground'
                  }`}
                >
                  {other.name}
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
