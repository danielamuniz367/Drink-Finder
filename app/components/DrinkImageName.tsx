import { Flex, Center, Image, Text, ResponsiveValue } from "@chakra-ui/react";
import { MarginGroup, AllMarginGroups } from "../consts/margins";

export interface DrinkImageNameProps {
  idDrink?: string;
  strDrink: string;
  strDrinkThumb: string;
  boxSize: string;
  flexDirection: ResponsiveValue<any>;
  bold: any;
  fontSize: string;
  margins: {
    img: MarginGroup;
    name: MarginGroup;
  };
}

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
