export const DRINKS_SEARCH_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const DRINK_DETAILS_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const FETCHER = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export const MARGINS = {
  list: {
    img: {
      mt: "10px",
      mr: "15px",
      mb: "10px",
      ml: "10px",
    },
    name: {
      mt: "0px",
    },
  },
  card: {
    img: {
      mt: "30px",
    },
    name: {
      mt: "20px",
    },
    ingredients: {
      mt: "30px",
      mb: "20px",
      ml: "20px",
    },
    legend: {
      m: "20px",
    },
    chart: {
      m: "20px",
    },
    instructions: {
      mt: "30px",
      mr: "20px",
      mb: "20px",
      ml: "20px",
    },
  },
};
