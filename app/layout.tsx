// app/layout.tsx
"use client";

import { Providers } from "./providers";
import { Heading, Center } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Center bg="tomato" h="100px" color="white">
            <Heading>I'm a Heading</Heading>
          </Center>
          {children}
        </Providers>
      </body>
    </html>
  );
}

// routing system is here with children
