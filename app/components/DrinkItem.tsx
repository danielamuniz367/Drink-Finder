import { LinkOverlay, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";

export default function DrinkItem(props: any) {
  const { idDrink, strDrink } = props;
  console.log(props);
  return (
    <ListItem key={idDrink} height="60px" fontSize="17px">
      <LinkOverlay as={NextLink} href={`drink/${idDrink}`}>
        {strDrink}
      </LinkOverlay>
    </ListItem>
  );
}
