"use client";

import DrinkImage from "@/app/components/DrinkImage";
import IngredientsList from "@/app/components/IngredientsList";
import PieChart from "@/app/components/PieChart";
import useCocktailDetails from "@/app/hooks/useCocktailDetails";
import convertToOz from "@/app/utils/convertToOz";
import { Card, CardBody, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { MARGINS } from "../../consts";
import getPastelColor from "@/app/utils/getPastelColor";

export default function DrinkId({ params }: any) {
  const { id } = params;
  const { data, isLoading, isError } = useCocktailDetails(id);
  const { drinks } = data ? data : [];
  const drinkDetails = drinks ? drinks[0] : {};
  const { strInstructions } = drinkDetails;

  const { img, name, ingredients, legend, chart, instructions } = MARGINS.card;

  // note to self that you want to make a function to get ingredients and measurements
  // ingredients
  const ingredientsKeys = Object.keys(drinkDetails).filter(
    (k) => k.includes("strIngredient") && drinkDetails[k] !== null
  );

  // measurements
  const measurementsKeys = Object.keys(drinkDetails).filter(
    (k) => k.includes("strMeasure") && drinkDetails[k] !== null
  );

  measurementsKeys.forEach((k) => {
    drinkDetails[k] = convertToOz(drinkDetails[k]);
  });

  const randomPastelColors = ingredientsKeys.map((m) => getPastelColor());

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>Loading drink details...</div>;

  return (
    <>
      <Card variant="unstyled">
        <CardBody>
          <Center>
            <DrinkImage
              {...drinkDetails}
              boxSize="150px"
              flexDirection="column"
              bold="b"
              fontSize="20px"
              margins={{ img, name }}
            />
          </Center>
          <Heading
            fontSize="17px"
            mt={ingredients.mt}
            mb={ingredients.mb}
            ml={ingredients.ml}
          >
            Ingredients:
          </Heading>
          <Flex flexDirection="row">
            <IngredientsList
              drinkDetails={drinkDetails}
              ingredientsKeys={ingredientsKeys}
              measurementsKeys={measurementsKeys}
              randomPastelColors={randomPastelColors}
              margins={{ legend }}
            />
            {/* <PieChart /> */}
          </Flex>
          <Text
            mt={instructions.mt}
            mr={instructions.mr}
            mb={instructions.mb}
            ml={instructions.ml}
          >
            {strInstructions}
          </Text>
        </CardBody>
      </Card>
    </>
  );
}
