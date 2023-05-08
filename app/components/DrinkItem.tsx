import { ListItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import DrinkImageName from "./DrinkImageName";
import { DrinkImageNameProps } from "../shared/interfaces/drinkImageName.interfaces";
import { MARGINS } from "./../consts/margins";

export default function DrinkItem(props: DrinkImageNameProps) {
  const { idDrink } = props;
  const { list } = MARGINS;

  return (
    <ListItem
      key={idDrink}
      height="60px"
      fontSize="17px"
      borderBottom="1px"
      borderColor="gray.200"
      _hover={{ backgroundColor: "blue.100" }}
    >
      <Link href={`drink/${idDrink}`}>
        <DrinkImageName
          {...props}
          boxSize="40px"
          flexDirection="row"
          margins={list}
        />
      </Link>
    </ListItem>
  );
}
