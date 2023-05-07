import { Flex, Center, Image, Text } from "@chakra-ui/react";

export default function DrinkImage(props: any) {
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
