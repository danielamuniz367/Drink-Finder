"use client";

import { Card, CardBody, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { SpinnerIcon } from "@chakra-ui/icons";
import { MARGINS } from "../../consts/margins";
import IngredientsList from "@/app/components/IngredientsList";
import PieChart from "@/app/components/PieChart";
import DrinkImageName from "@/app/components/DrinkImageName";
import useCocktailDetails from "@/app/hooks/useCocktailDetails";
import convertToOz from "@/app/utils/convertToOz";
import getPastelColor from "@/app/utils/getPastelColor";
import getKeys from "@/app/utils/getKeys";

export default function DrinkId({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data, isLoading, isError } = useCocktailDetails(id);
  const { drinks } = data ? data : [];
  const drinkDetails = drinks ? drinks[0] : {};
  const { strInstructions } = drinkDetails;

  // for margins
  const { img, name, ingredients, legend, chart, instructions } = MARGINS.card;

  // gets ingredient and measurement keys
  const ingredientsKeys = getKeys(drinkDetails, "strIngredient").filter(
    (d) => drinkDetails[d] !== null
  );
  const measurementsKeys = getKeys(
    drinkDetails,
    "strMeasure",
    ingredientsKeys.length
  );

  // for pie chart data
  // conversions that don't return with oz unit get assigned 0 so they are not included in pie chart
  const series = measurementsKeys
    .map((k) => (drinkDetails[k] = convertToOz(drinkDetails[k])))
    .map((s) => (!s.includes("oz") ? (s = "0") : s))
    .map((s) => parseFloat(s));

  // random pastel colors for ingredients and pie chart
  const randomPastelColors = ingredientsKeys.map((i) => getPastelColor());

  if (isError) return <div>failed to load</div>;
  if (isLoading)
    return (
      <div>
        <SpinnerIcon />
        Loading drink details...
      </div>
    );

  return (
    <>
      <Card variant="unstyled">
        <CardBody>
          <Center>
            <DrinkImageName
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
            {!series.every((s) => s === 0) ? (
              <PieChart
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
