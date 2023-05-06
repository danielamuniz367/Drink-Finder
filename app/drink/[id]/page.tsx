"use client";

import PieChart from "@/app/components/PieChart";
import useCocktailDetails from "@/app/hooks/useCocktailDetails";
// import useConvertToOz from "@/app/hooks/useConvertToOz";
import { Image, List, ListItem, useConst } from "@chakra-ui/react";

export default function DrinkId({ params }: any) {
  const { id } = params;
  const { data, isLoading, isError } = useCocktailDetails(id);
  const { drinks } = data ? data : [];
  const drinkDetails = drinks ? drinks[0] : {};
  const { strDrink, strDrinkThumb, strInstructions } = drinkDetails;

  // note to self that you want to make a hook or function to get ingredients and measurements

  // ingredients
  const ingredientsKeys = Object.keys(drinkDetails).filter(
    (k) => k.includes("strIngredient") && drinkDetails[k] !== null
  );

  // measurements
  const measurementsKeys = Object.keys(drinkDetails).filter(
    (k) => k.includes("strMeasure") && drinkDetails[k] !== null
  );

  if (isLoading) return <div>Loading drink details...</div>;

  return (
    <>
      <Image
        borderRadius="full"
        boxSize="150px"
        src={strDrinkThumb}
        fallbackSrc="https://via.placeholder.com/150"
        alt={strDrink}
      />
      <h2>{strDrink}</h2>
      <h3>Ingredients:</h3>
      <List spacing={3}>
        {ingredientsKeys?.map((key: any, index: any) => (
          <ListItem key={index} height="60px" fontSize="17px">
            {drinkDetails[key]} ({drinkDetails[measurementsKeys[index]]})
          </ListItem>
        ))}
      </List>
      <p>{strInstructions}</p>
      {/* <PieChart /> */}
    </>
  );
}
