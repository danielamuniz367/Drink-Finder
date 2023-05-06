import useSWR from "swr";
import { DRINKS_SEARCH_URL, FETCHER } from "../consts";

function useCocktails(search: string) {
  const { data, isLoading, error } = useSWR(
    search ? `${DRINKS_SEARCH_URL}${search}` : null,
    FETCHER
  );

  return {
    data: data,
    isLoading,
    isError: error,
  };
}

export default useCocktails;
