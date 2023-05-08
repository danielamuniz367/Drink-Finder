import useSWR from "swr";
import { DRINK_DETAILS_URL, FETCHER } from "../consts/api";

function useCocktailDetails(id: string) {
  const { data, isLoading, error } = useSWR(
    id ? `${DRINK_DETAILS_URL}${id}` : null,
    FETCHER
  );

  return {
    data: data,
    isLoading,
    isError: error,
  };
}

export default useCocktailDetails;
