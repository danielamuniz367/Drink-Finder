"use client";

import { List } from "@chakra-ui/react";
import DrinkItem from "./DrinkItem";

export default function DrinksList({ data }: any) {
  return (
    <List>
      {data?.map((drink: any, index: number) => (
        <DrinkItem key={index} {...drink} />
      ))}
    </List>
  );
}
