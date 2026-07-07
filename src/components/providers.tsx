'use client';

import { ReactNode, useCallback, useState } from 'react';
import Navbar from './Navbar';
import Dock from './Dock';
import Preloader from './motion/Preloader';
import Cursor from './motion/Cursor';
import { IntroContext } from './motion/Motion';

export function Providers({ children }: { children: ReactNode }) {
  const [introDone, setIntroDone] = useState(false);
  const onDone = useCallback(() => setIntroDone(true), []);

  return (
    <IntroContext.Provider value={introDone}>
      <Preloader onDone={onDone} />
      <Navbar />
      {children}
      <Dock />
      <Cursor />
    </IntroContext.Provider>
  );
}
