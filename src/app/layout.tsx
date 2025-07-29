// src/app/layout.tsx

import "@mantine/core/styles.css";
// import Image from "next/image";
import {
  ColorSchemeScript,
  MantineProvider,
  Container,
  Flex,
  // Image,
} from "@mantine/core";
import { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={plusJakartaSans.className}
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider
          defaultColorScheme="light"
          theme={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            headings: { fontFamily: "Plus Jakarta Sans, sans-serif" },
          }}
        >
         <header className="main-header">
  <Container size="md" py={8} style={{ height: "60px", }}>
    <Flex justify="start" w="100%" h="100%" align="center">
      <Image
        src="/assets/recurrent-logo.svg"
        alt="re:current logo"
        width={150}
        height={150}
      />
    </Flex>
  </Container>
</header>


          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
