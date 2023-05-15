// app/page.tsx
"use client";
import { Input } from "@chakra-ui/react";
import { SpinnerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import DrinksList from "./components/DrinksList";
import useCocktails from "./hooks/useCocktails";
import { useDebounce } from "usehooks-ts";

export default function Page() {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce<string>(search, 500);
  const { data, isLoading, isError } = useCocktails(debouncedValue);

  const { drinks } = data ? data : [];

  return (
    <>
      <Input
        placeholder="Find a drink"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
      />
      {isError && <div>failed to load</div>}
      {isLoading && (
        <div>
          <SpinnerIcon />
          loading drinks...
        </div>
      )}
      <DrinksList data={drinks} />
    </>
  );
}

// main page of app
