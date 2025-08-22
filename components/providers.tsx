'use client';

import { ThemeProvider } from 'next-themes';

export const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider
    attribute='class'
    defaultTheme='system'
    disableTransitionOnChange
    enableSystem>
    {children}
  </ThemeProvider>
);
