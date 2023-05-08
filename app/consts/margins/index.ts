export interface MarginGroup {
  m?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
}

export interface AllMarginGroups {
  list: {
    img: MarginGroup;
    name: MarginGroup;
  };
  card: {
    img?: MarginGroup;
    name?: MarginGroup;
    ingredients?: MarginGroup;
    legend?: MarginGroup;
    chart?: MarginGroup;
    instructions?: MarginGroup;
  };
}

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
      // margin-top is 10px here since we want to be a total of 30px away from either
      // the ingredients legend or the pie chart
      mt: "10px",
      mr: "20px",
      mb: "20px",
      ml: "20px",
    },
  },
};
