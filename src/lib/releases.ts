/**
 * Current installers for one app, read from the stable.json its release
 * workflow publishes (see siteConfig.apps). A missing or malformed file
 * yields null so the download page still renders its browser links.
 */
export type Installer = { name: string; url: string; size: number | null };

export type AppRelease = {
  version: string;
  android: Installer | null;
  windows: Installer | null;
  macAppleSilicon: Installer | null;
  macIntel: Installer | null;
};

const REVALIDATE_SECONDS = 300;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function installer(value: unknown): Installer | null {
  if (
    !isRecord(value) ||
    typeof value.name !== 'string' ||
    typeof value.url !== 'string' ||
    !value.url.startsWith('https://')
  ) {
    return null;
  }
  return {
    name: value.name,
    url: value.url,
    size: typeof value.size === 'number' ? value.size : null,
  };
}

function slot(group: unknown, key: string): Installer | null {
  return isRecord(group) ? installer(group[key]) : null;
}

export async function getRelease(manifestUrl: string): Promise<AppRelease | null> {
  try {
    const response = await fetch(manifestUrl, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!response.ok) return null;
    const data: unknown = await response.json();
    if (!isRecord(data) || typeof data.version !== 'string' || !isRecord(data.installers)) {
      return null;
    }
    const { android, windows, macos } = data.installers;
    return {
      version: data.version,
      android: slot(android, 'default'),
      windows: slot(windows, 'default'),
      macAppleSilicon: slot(macos, 'aarch64') ?? slot(macos, 'universal'),
      macIntel: slot(macos, 'x64'),
    };
  } catch {
    return null;
  }
}

export function formatSize(bytes: number | null): string | null {
  if (bytes === null) return null;
  const mb = bytes / (1024 * 1024);
  return `${mb < 10 ? mb.toFixed(1) : Math.round(mb)} MB`;
}
