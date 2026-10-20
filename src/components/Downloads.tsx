import type { ComponentType, SVGProps } from 'react';
import {
  ArrowUpRightIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';
import type { SiteConfig } from '../config/site.config';
import { formatSize, type AppRelease, type Installer } from '../lib/releases';
import { ChapterHead, Mark } from './Chapter';
import { MaskReveal } from './motion/Motion';
import Illustration from './graphics/Illustration';

type App = SiteConfig['apps'][number];
type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const installNotes = [
  {
    title: 'Android',
    body: 'Open the downloaded APK and let your browser install apps when Android asks. If an older DimeSchool app is on the phone, uninstall it first.',
  },
  {
    title: 'Windows',
    body: 'If SmartScreen says it protected your PC, choose More info, then Run anyway.',
  },
  {
    title: 'macOS',
    body: 'Drag MarkEase to Applications. If macOS blocks the first launch, open System Settings → Privacy & Security and choose Open Anyway.',
  },
];

function installers(release: AppRelease): { label: string; icon: Icon; file: Installer }[] {
  const options = [
    { label: 'Android', icon: DevicePhoneMobileIcon, file: release.android },
    { label: 'Windows', icon: ComputerDesktopIcon, file: release.windows },
    { label: 'macOS · Apple Silicon', icon: ComputerDesktopIcon, file: release.macAppleSilicon },
    { label: 'macOS · Intel', icon: ComputerDesktopIcon, file: release.macIntel },
  ];
  return options.filter((option): option is (typeof options)[number] & { file: Installer } =>
    Boolean(option.file),
  );
}

function AppCard({ app, release }: { app: App; release: AppRelease | null }) {
  const files = release ? installers(release) : [];

  return (
    <article className={`flex h-full flex-col justify-between rounded-[1.25rem] p-6 lg:p-8 ${app.tone}`}>
      <div>
        <div className="mb-6 flex">
          {app.art.map((src, i) => (
            <Illustration
              key={src}
              src={src}
              className={`w-24 rounded-2xl shadow-md ${i === 0 ? '-rotate-3' : '-ml-5 rotate-6'}`}
            />
          ))}
        </div>
        <p className="label-mono !text-inherit opacity-75">{app.audience}</p>
        <h3 className="mt-5 font-display text-[1.9rem] font-extrabold leading-[1.02] tracking-[-0.01em]">
          {app.name}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed opacity-85">{app.description}</p>
      </div>

      <div className="mt-10 flex flex-col gap-2">
        {files.map(({ label, icon: FileIcon, file }) => (
          <a
            key={label}
            href={file.url}
            className="inline-flex items-center justify-between gap-3 rounded-full bg-card px-6 py-3.5 text-sm font-bold text-foreground transition-transform hover:-translate-y-0.5"
          >
            <span className="inline-flex items-center gap-2">
              <FileIcon className="h-4 w-4" />
              {label}
            </span>
            {formatSize(file.size) && (
              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {formatSize(file.size)}
              </span>
            )}
          </a>
        ))}
        {files.length === 0 && (
          <p className="rounded-full bg-white/15 px-6 py-3.5 text-sm font-bold">
            Download coming soon. Use the browser for now.
          </p>
        )}
        <a
          href={app.web}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between gap-3 rounded-full border-2 border-current px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
        >
          Open in the browser
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
        {release && (
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] opacity-60">
            Version {release.version}
          </p>
        )}
      </div>
    </article>
  );
}

export default function Downloads({
  apps,
}: {
  apps: { app: App; release: AppRelease | null }[];
}) {
  return (
    <section id="downloads" className="relative py-14 lg:py-20" data-chapter="N.011 · Downloads">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <ChapterHead number="N.011" label="Downloads" right="Free for every school" />

        <MaskReveal className="mt-10">
          <h2 className="chapter-title max-w-5xl">
            Get the apps. <Mark tone="blue">Sign in.</Mark>
          </h2>
        </MaskReveal>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Each app is free and also opens in any browser. Installed apps update themselves, so you
          rarely need to come back here.
        </p>

        <div className="mt-14 grid gap-3 lg:grid-cols-3">
          {apps.map(({ app, release }) => (
            <AppCard key={app.id} app={app} release={release} />
          ))}
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {installNotes.map((note) => (
            <div key={note.title} className="rounded-[1.25rem] bg-card p-6">
              <p className="label-mono">Installing on {note.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{note.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
