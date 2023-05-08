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
