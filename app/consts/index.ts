export const DRINKS_SEARCH_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const DRINK_DETAILS_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const FETCHER = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());
