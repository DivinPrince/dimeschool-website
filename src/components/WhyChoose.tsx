'use client';

import { motion } from 'framer-motion';
import {
  AdjustmentsHorizontalIcon,
  BanknotesIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  FingerPrintIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { siteConfig } from '../config/site.config';
import { ChapterHead, Mark, Marquee } from './Chapter';
import { Counter, MaskReveal } from './motion/Motion';

/* One glyph per capability, in the portal colors; order mirrors siteConfig.whyChoose. */
const cardIcons = [
  { icon: Squares2X2Icon, chip: 'bg-blue text-white' },
  { icon: AdjustmentsHorizontalIcon, chip: 'bg-yellow text-foreground' },
  { icon: ShieldCheckIcon, chip: 'bg-primary text-white' },
  { icon: FingerPrintIcon, chip: 'bg-green text-white' },
  { icon: BanknotesIcon, chip: 'bg-purple text-white' },
  { icon: ChatBubbleLeftRightIcon, chip: 'bg-blue text-white' },
  { icon: ComputerDesktopIcon, chip: 'bg-primary text-white' },
  { icon: BookOpenIcon, chip: 'bg-green text-white' },
];

function CardGlyph({ index }: { index: number }) {
  const meta = cardIcons[index % cardIcons.length];
  return (
    <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${meta.chip}`}>
      <meta.icon className="h-5 w-5" strokeWidth={2} />
    </span>
  );
}

const proofStats = [
  { value: '5', label: 'Role portals: school, teacher, parent, student, librarian', className: 'bg-blue text-white' },
  { value: '1', label: 'Android app for every role, updated over the air', className: 'bg-yellow text-foreground' },
  { value: '4', label: 'Payment methods tracked: cash, MoMo, bank, cheque', className: 'bg-green text-white' },
  { value: 'SMS', label: 'Parent messaging built into the platform', className: 'bg-purple text-white' },
];

const ribbon = [
  'Multi-program support',
  'Custom grading scales',
  'Role-based access',
  'Audit trails',
  'Biometric attendance',
  'Online exams',
];

export default function WhyChoose() {
  const { whyChoose } = siteConfig;

  if (!whyChoose || whyChoose.length === 0) {
    return null;
  }

  return (
    <section className="relative py-14 lg:py-20" id="why-choose" data-chapter="N.004 · Why Schools Stay">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <ChapterHead number="N.004" label="Why Schools Stay" right="Built with Rwandan schools" />

        <MaskReveal className="mt-10">
          <h2 className="chapter-title max-w-5xl">
            Why schools pick DimeSchool <Mark tone="green">and stay</Mark>
          </h2>
        </MaskReveal>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          We are not another dashboard skin. We fix the workflow friction that steals teaching time.
        </p>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.06 }}
              className={`rounded-2xl p-7 lg:p-8 ${stat.className}`}
            >
              <p className="font-display text-[clamp(2.6rem,4.2vw,3.75rem)] font-extrabold leading-none tracking-[-0.02em]">
                <Counter value={stat.value} />
              </p>
              <p className="mt-3 text-sm font-semibold opacity-85">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (index % 3) * 0.06 }}
              className="rounded-2xl bg-card p-6 shadow-sm lg:p-7"
            >
              <CardGlyph index={index} />
              <h3 className="font-display mt-4 text-xl font-bold tracking-[-0.01em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.article>
          ))}

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.12 }}
            className="rounded-2xl bg-foreground p-6 text-background shadow-sm lg:p-7"
          >
            <h3 className="font-display text-xl font-bold tracking-[-0.01em]">
              Before &rarr; After
            </h3>
            <p className="mt-2.5 text-[15px] leading-relaxed opacity-80">
              Manual registers, late report cards, and fragmented communication become real-time
              records, instant parent visibility, and faster school operations.
            </p>
          </motion.article>
        </div>
      </div>

      <div className="mt-20">
        <Marquee items={ribbon} className="bg-yellow text-foreground" />
      </div>
    </section>
  );
}
