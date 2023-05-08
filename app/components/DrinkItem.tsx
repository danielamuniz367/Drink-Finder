import { ListItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import DrinkImage from "./DrinkImage";
import { MARGINS } from "./../consts/margins";

export default function DrinkItem(props: any) {
  const { idDrink } = props;
  const { list } = MARGINS;

  return (
    <ListItem
      key={idDrink}
      height="60px"
      fontSize="17px"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Link href={`drink/${idDrink}`}>
        <DrinkImage
          {...props}
          boxSize="40px"
          flexDirection="row"
          margins={list}
        />
      </Link>
    </ListItem>
  );
}
