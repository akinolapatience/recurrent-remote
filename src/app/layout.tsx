// src/app/layout.tsx

import "@mantine/core/styles.css";
// import Image from "next/image";
import {
  ColorSchemeScript,
  MantineProvider,
  Container,
  Flex,
  Image,
} from "@mantine/core";
import { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Logo from "@/assets/LogoWithoutText.png";

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
            <Container size="md">
              <Flex justify="start" w="100%">
                <Image
                  src={Logo.src}
                  // src="/recurrent-logo.png"
                  alt="re:current logo"
                  // className="logo"
                  w={20}
                  h={20}
                  // fit="cover"
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
