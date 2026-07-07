'use client';

import { ComponentType, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

/**
 * Stylized in-product views, one per role, shown inside the Features
 * detail panel. Not screenshots: honest, simplified mocks of what each
 * portal actually does (verified against the real product feature set).
 */

function Chrome({ url, children }: { url: string; children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, delay: 0.1 }}
      aria-hidden
      className="overflow-hidden rounded-xl bg-card text-foreground shadow-lg"
    >
      <div className="flex items-center gap-2 border-b border-foreground/10 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="h-2 w-2 rounded-full bg-yellow" />
        <span className="h-2 w-2 rounded-full bg-green" />
        <span className="ml-2 flex-1 truncate rounded-full bg-foreground/[0.06] px-3 py-1 font-mono text-[9px] tracking-wide text-muted-foreground">
          {url}
        </span>
      </div>
      <div className="p-4">{children}</div>
    </motion.div>
  );
}

function Stagger({ children, index }: { children: ReactNode; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.08 }}
    >
      {children}
    </motion.div>
  );
}

/* ---- 01 · Administrators: the whole school at a glance ---- */

function AdminPreview() {
  const reduce = useReducedMotion();
  const kpis = [
    { value: '1,248', label: 'Students', tone: 'text-blue' },
    { value: '96%', label: 'Attendance today', tone: 'text-green' },
    { value: '82%', label: 'Fees collected', tone: 'text-primary' },
  ];
  const bars = [62, 78, 70, 88, 96, 84, 91];
  const feed = [
    { dot: 'bg-green', text: 'MoMo payment recorded · 45,000 RWF' },
    { dot: 'bg-blue', text: 'Bulk SMS sent · 312 parents' },
    { dot: 'bg-primary', text: 'Report cards generated · P6' },
  ];

  return (
    <Chrome url="school.dimeschool.tech">
      <div className="grid grid-cols-3 gap-2">
        {kpis.map((kpi, i) => (
          <Stagger key={kpi.label} index={i}>
            <div className="rounded-lg bg-foreground/[0.05] p-2.5">
              <p className={`font-display text-lg font-extrabold leading-none ${kpi.tone}`}>
                {kpi.value}
              </p>
              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-muted-foreground">
                {kpi.label}
              </p>
            </div>
          </Stagger>
        ))}
      </div>
      <div className="mt-3 rounded-lg bg-foreground/[0.05] p-3">
        <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-muted-foreground">
          Attendance · this week
        </p>
        <div className="mt-2 flex h-14 items-end gap-1.5">
          {bars.map((height, i) => (
            <motion.span
              key={i}
              initial={reduce ? false : { height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: 0.25 + i * 0.05, type: 'spring', stiffness: 120, damping: 14 }}
              className={`flex-1 rounded-t ${i === 4 ? 'bg-blue' : 'bg-blue/35'}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        {feed.map((item, i) => (
          <Stagger key={item.text} index={i + 4}>
            <div className="flex items-center gap-2 rounded-lg bg-foreground/[0.05] px-3 py-2">
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.dot}`} />
              <span className="truncate text-[11px] font-semibold">{item.text}</span>
            </div>
          </Stagger>
        ))}
      </div>
    </Chrome>
  );
}

/* ---- 02 · Teachers: marking day, already done ---- */

function TeacherPreview() {
  const rows = [
    { name: 'INEZA Aline', score: 18, chip: '18/20', ok: true },
    { name: 'GANZA Eric', score: 15, chip: '15/20', ok: true },
    { name: 'KEZA Diane', score: 12, chip: 'Review', ok: false },
    { name: 'MUGISHA Yves', score: 17, chip: '17/20', ok: true },
  ];
  const reduce = useReducedMotion();

  return (
    <Chrome url="teacher.dimeschool.tech">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[12px] font-bold">P5 English · End of Term II</p>
        <span className="rounded-full bg-purple px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-white">
          MarkEase ✓
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        {rows.map((row, i) => (
          <Stagger key={row.name} index={i}>
            <div className="flex items-center gap-3 rounded-lg bg-foreground/[0.05] px-3 py-2">
              <span className="w-24 truncate text-[11px] font-semibold">{row.name}</span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/10">
                <motion.span
                  initial={reduce ? false : { width: 0 }}
                  animate={{ width: `${(row.score / 20) * 100}%` }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className={`block h-full rounded-full ${row.ok ? 'bg-green' : 'bg-yellow'}`}
                />
              </span>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[9px] font-bold ${
                  row.ok ? 'bg-green/15 text-green' : 'bg-yellow text-foreground'
                }`}
              >
                {row.ok && <CheckIcon className="h-2.5 w-2.5" strokeWidth={3} />}
                {row.chip}
              </span>
            </div>
          </Stagger>
        ))}
      </div>
      <Stagger index={5}>
        <p className="mt-3 rounded-lg bg-foreground/[0.05] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
          32 papers marked · 1 awaiting your review
        </p>
      </Stagger>
    </Chrome>
  );
}

/* ---- 03 · Parents & Students: the moment results land ---- */

function FamilyPreview() {
  const chips = ['Online exams', 'AI study tutor', 'E-book library'];

  return (
    <Chrome url="parent.dimeschool.tech">
      <div className="flex gap-1.5">
        <span className="rounded-full bg-green px-3 py-1 text-[10px] font-bold text-white">
          Aline · P5
        </span>
        <span className="rounded-full bg-foreground/[0.07] px-3 py-1 text-[10px] font-bold text-muted-foreground">
          Eric · S2
        </span>
      </div>
      <Stagger index={1}>
        <div className="mt-3 rounded-lg border-l-4 border-green bg-foreground/[0.05] p-3">
          <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-muted-foreground">
            Just published
          </p>
          <div className="mt-1 flex items-baseline justify-between gap-2">
            <p className="text-[12px] font-bold">English · End of Term II</p>
            <p className="font-display text-xl font-extrabold text-green">86%</p>
          </div>
        </div>
      </Stagger>
      <Stagger index={2}>
        <div className="mt-2 rounded-lg bg-foreground/[0.05] p-3">
          <div className="flex items-baseline justify-between gap-2">
            <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-muted-foreground">
              Term 2 fees
            </p>
            <p className="text-[10px] font-bold">60% paid · MoMo</p>
          </div>
          <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-foreground/10">
            <span className="block h-full w-[60%] rounded-full bg-primary" />
          </span>
        </div>
      </Stagger>
      <Stagger index={3}>
        <div className="mt-2 rounded-lg bg-blue p-3 text-white">
          <p className="font-mono text-[8px] uppercase tracking-[0.1em] opacity-70">
            SMS to parent
          </p>
          <p className="mt-1 text-[11px] font-semibold leading-snug">
            Muraho! Term II results for INEZA Aline are ready in your parent portal.
          </p>
        </div>
      </Stagger>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {chips.map((chip, i) => (
          <Stagger key={chip} index={i + 4}>
            <span className="rounded-full bg-foreground/[0.07] px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
              {chip}
            </span>
          </Stagger>
        ))}
      </div>
    </Chrome>
  );
}

/* ---- 04 · Librarians: every book accounted for ---- */

function LibrarianPreview() {
  const books = [
    { title: 'Primary Mathematics 5', copies: '24 copies', chip: 'Class set · P6', tone: 'bg-blue text-white' },
    { title: 'Things Fall Apart', copies: '8 copies', chip: 'On loan · due Fri', tone: 'bg-yellow text-foreground' },
    { title: 'Physics for Rwanda S3', copies: '15 copies', chip: 'Available', tone: 'bg-green/15 text-green' },
    { title: 'Igitabo cy’Imigani', copies: 'E-book', chip: 'In student portal', tone: 'bg-purple/15 text-purple' },
  ];

  return (
    <Chrome url="librarian.dimeschool.tech">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[12px] font-bold">Catalog · 1,860 books</p>
        <span className="rounded-full bg-primary px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-white">
          3 overdue
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        {books.map((book, i) => (
          <Stagger key={book.title} index={i}>
            <div className="flex items-center gap-3 rounded-lg bg-foreground/[0.05] px-3 py-2">
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-semibold">{book.title}</p>
                <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-muted-foreground">
                  {book.copies}
                </p>
              </div>
              <span className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[8px] font-bold ${book.tone}`}>
                {book.chip}
              </span>
            </div>
          </Stagger>
        ))}
      </div>
      <Stagger index={5}>
        <p className="mt-3 rounded-lg bg-foreground/[0.05] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">
          Overdue reminders sent to 3 students
        </p>
      </Stagger>
    </Chrome>
  );
}

export const portalPreviews: Record<string, ComponentType> = {
  administrators: AdminPreview,
  teachers: TeacherPreview,
  'parents-students': FamilyPreview,
  librarians: LibrarianPreview,
};
