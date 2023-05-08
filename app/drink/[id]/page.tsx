"use client";

import { Card, CardBody, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { MARGINS } from "../../consts/margins";
import DrinkImage from "@/app/components/DrinkImage";
import IngredientsList from "@/app/components/IngredientsList";
import PieChart from "@/app/components/PieChart";
import useCocktailDetails from "@/app/hooks/useCocktailDetails";
import convertToOz from "@/app/utils/convertToOz";
import getPastelColor from "@/app/utils/getPastelColor";
import getKeys from "@/app/utils/getKeys";

export default function DrinkId({ params }: any) {
  const { id } = params;
  const { data, isLoading, isError } = useCocktailDetails(id);
  const { drinks } = data ? data : [];
  const drinkDetails = drinks ? drinks[0] : {};
  const { strInstructions } = drinkDetails;

  const { img, name, ingredients, legend, chart, instructions } = MARGINS.card;

  // ingredients
  const ingredientsKeys = getKeys(drinkDetails, "strIngredient");

  // measurements
  const measurementsKeys = getKeys(drinkDetails, "strMeasure");

  const series = measurementsKeys
    .map((k) => (drinkDetails[k] = convertToOz(drinkDetails[k])))
    .filter((d: any) => d.includes("oz"))
    .map((s) => parseFloat(s));

  const randomPastelColors = ingredientsKeys.map((i) => getPastelColor());

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
          <Flex flexDirection="row" gap={0}>
            <IngredientsList
              drinkDetails={drinkDetails}
              ingredientsKeys={ingredientsKeys}
              measurementsKeys={measurementsKeys}
              randomPastelColors={randomPastelColors}
              margins={{ legend }}
            />
            {series.length > 0 ? (
              <PieChart
                labels={ingredientsKeys}
                series={series}
                colors={randomPastelColors}
                margin={chart.m}
              />
            ) : null}
          </Flex>
          <Text
            fontSize="17px"
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
