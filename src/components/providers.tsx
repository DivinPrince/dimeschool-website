'use client';

import { ThemeProvider } from 'next-themes';
import Navbar from './Navbar';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
    >
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
