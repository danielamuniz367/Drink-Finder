"use client";

import {
  AbsoluteCenter,
  Center,
  LinkOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";
import DrinkItem from "./DrinkItem";

export default function DrinksList({ data }: any) {
  return (
    <List spacing={3}>
      {data?.map((drink: any, index: any) => (
        <DrinkItem key={index} {...drink} />
      ))}
    </List>
  );
}
