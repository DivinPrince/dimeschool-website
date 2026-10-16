/**
 * Current installers for one app, read at build time from the stable.json its
 * release workflow publishes (see siteConfig.apps). The deploy workflow
 * rebuilds daily to pick up new releases. A missing or malformed file yields
 * null so the download page still renders its browser links.
 */
export type Installer = { name: string; url: string; size: number | null };

export type AppRelease = {
  version: string;
  android: Installer | null;
  windows: Installer | null;
  macAppleSilicon: Installer | null;
  macIntel: Installer | null;
};

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

// An app with no release yet has no manifest (404). Any other failure throws,
// failing the build so the deployed page keeps its last good downloads.
export async function getRelease(manifestUrl: string): Promise<AppRelease | null> {
  const response = await fetch(manifestUrl);
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`${manifestUrl} returned HTTP ${response.status}`);
  }
  const data: unknown = await response.json().catch(() => null);
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
}

export function formatSize(bytes: number | null): string | null {
  if (bytes === null) return null;
  const mb = bytes / (1024 * 1024);
  return `${mb < 10 ? mb.toFixed(1) : Math.round(mb)} MB`;
}
