// app/page.tsx
"use client";
import { Link } from "@chakra-ui/next-js";
import { Center, Input } from "@chakra-ui/react";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  PromiseLikeOfReactNode,
  Key,
  ChangeEvent,
  useState,
} from "react";
import useSWR from "swr";
import DrinksList from "./components/DrinksList";
import Header from "./components/Header";
import { DRINKS_SEARCH_URL, FETCHER } from "./consts";
import useCocktails from "./hooks/useCocktails";

export default function Page() {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useCocktails(search);

  const { drinks } = data ? data : [];

  return (
    <>
      <Center bg="tomato" h="100px" color="white">
        <Header />
      </Center>
      <Input
        placeholder="Find a drink"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
      />
      <DrinksList data={drinks} />
      {isLoading && <div>loading...</div>}
    </>
  );
}

// main page of app
