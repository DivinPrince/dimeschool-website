import type { SVGProps } from 'react';

type DoodleProps = {
  className?: string;
} & SVGProps<SVGSVGElement>;

function cx(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ');
}

type DotTone = 'sky' | 'pink' | 'sun';

const dotToneClass: Record<DotTone, string> = {
  sky: 'text-[#00B8E4]',
  pink: 'text-[#FEA7C9]',
  sun: 'text-[#FEDA60]',
};

export function DoodleDot({ tone = 'sky', className, ...props }: DoodleProps & { tone?: DotTone }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={cx(dotToneClass[tone], className)} {...props}>
      <circle cx="10" cy="10" r="10" fill="currentColor" />
    </svg>
  );
}

export function DoodleBrush({ className, ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 181 19" fill="none" className={cx('text-[#FF7714]', className)} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.43 4.91C4.33 5.41 1.89 5.86 1.49 6.37C0.53 7.47 2.45 8.02 8.51 8.07H165.97C173.08 3.61 173.65 3.16 173.65 2.3C173.65 1.2 171.73 0.45 167.63 0.1C162.22 -0.45 38.73 1.35 8.43 4.91ZM168.63 7.42C166.71 7.52 41.83 10.83 38.69 11.13C0.23 14.39 -2.74 14.89 1.41 17.3C3.41 18.45 7.21 18.45 23.65 17.15C63.28 14.09 176.13 13.74 180.1 12.08C181.93 11.28 182.19 6.87 168.63 7.42Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DoodleSquiggle({ className, ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 203 67" fill="none" className={cx('text-[#7976F6]', className)} {...props}>
      <path
        d="M2.03 25.08C10.48 47.79 31.86 76.99 59.55 59.44C74.88 49.72 87.1 17.3 68.69 4.3C62.1 -0.34 60.71 7.95 61.05 12.55C61.66 20.89 66.28 28.28 72.64 33.54C88.65 46.8 105.39 31.93 121.2 27.41C141.71 21.53 170.4 25.04 189.11 35.38C205.28 44.32 193.99 43.31 181.68 46.68C172.31 49.25 192.36 47.31 195.3 46.57C199 45.64 202.29 47.34 199.54 43.6C194.87 37.27 190.54 29.9 186.8 22.93"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleBurst({ className, ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 56 56" fill="none" className={cx('text-[#FF005C]', className)} {...props}>
      <path d="M28 6V18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M28 38V50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M6 28H18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M38 28H50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M13 13L20.5 20.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M35.5 35.5L43 43" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M43 13L35.5 20.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M20.5 35.5L13 43" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleOrbit({ className, ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={cx('text-[#BAD6FF]', className)} {...props}>
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" />
      <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

export function DoodleWave({ className, ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 180 42" fill="none" className={cx('text-primary/45', className)} {...props}>
      <path
        d="M6 24C18 8 34 8 45 24C56 40 73 40 84 24C95 8 111 8 122 24C133 40 150 40 162 24"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleArrow({ className, ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 124 64" fill="none" className={cx('text-[#FF7714]', className)} {...props}>
      <path
        d="M118 10C90 10 75 20 62 32C47 45 32 53 10 53"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M20 43L8 53L20 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
