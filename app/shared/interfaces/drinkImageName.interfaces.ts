import { ResponsiveValue, As } from "@chakra-ui/react";
import { MarginGroup } from "./margins.interface";

export interface DrinkImageNameProps {
  idDrink?: string;
  strDrink: string;
  strDrinkThumb: string;
  boxSize: string;
  flexDirection: ResponsiveValue<any>;
  bold: As;
  fontSize: string;
  margins: {
    img: MarginGroup;
    name: MarginGroup;
  };
}
