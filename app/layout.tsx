// app/layout.tsx
"use client";

import { Providers } from "./providers";
import { Heading, Center } from "@chakra-ui/react";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// routing system is here with children
