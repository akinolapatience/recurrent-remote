"use client";

import { MantineProvider } from "@mantine/core";
// Remove the CSS import from here since it's now in layout.tsx

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider defaultColorScheme="light">{children}</MantineProvider>
  );
}
