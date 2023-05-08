"use client";

import { Center, Heading, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <Center bg="tomato" h="100px" color="white">
      <Heading>
        <Link href="/">Thirsty drink finder</Link>
      </Heading>
    </Center>
  );
}
