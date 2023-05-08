import {
  Flex,
  Center,
  Image,
  Text,
  ResponsiveValue,
  As,
} from "@chakra-ui/react";
import { DrinkImageNameProps } from "../shared/interfaces/drinkImageName.interfaces";

// combines both image and name of drink for list and drink details
// note: considered making separate (atomic) components for image and name but
// chakra-ui's Image and Text componets seem to take care of that (please correct me if not so)
export default function DrinkImageName(props: DrinkImageNameProps) {
  const {
    strDrink,
    strDrinkThumb,
    boxSize,
    flexDirection,
    bold,
    fontSize,
    margins,
  } = props;

  const { img, name } = margins;

  return (
    <Flex flexDirection={flexDirection}>
      <Image
        borderRadius="full"
        boxSize={boxSize}
        mt={img.mt}
        mr={img.mr}
        mb={img.mb}
        ml={img.ml}
        src={strDrinkThumb}
        fallbackSrc="https://via.placeholder.com/150"
        alt={strDrink}
      />
      <Center>
        <Text as={bold} fontSize={fontSize} mt={name.mt}>
          {strDrink}
        </Text>
      </Center>
    </Flex>
  );
}
