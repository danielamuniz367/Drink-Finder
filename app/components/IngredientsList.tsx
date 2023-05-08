"use client";

import { Flex, List, ListItem, Square, Text } from "@chakra-ui/react";
import { AllMarginGroups } from "../shared/interfaces/margins.interface";

interface IngredientsListProps {
  drinkDetails: any;
  ingredientsKeys: string[];
  measurementsKeys: string[];
  margins: AllMarginGroups["card"];
  randomPastelColors: string[];
}

export default function IngredientsList(props: IngredientsListProps) {
  const {
    drinkDetails,
    ingredientsKeys,
    measurementsKeys,
    margins,
    randomPastelColors,
  } = props;
  const { legend } = margins;

  return (
    <List m={legend?.m}>
      {ingredientsKeys?.map((key: string, index: number) => (
        <ListItem key={index} fontSize="17px">
          <Flex alignItems="center" gap="2">
            <Square
              size="20px"
              bg={randomPastelColors[index]}
              borderRadius="3"
            ></Square>
            <Text>
              {drinkDetails[key]}
              {drinkDetails[measurementsKeys[index]] && (
                <span>&nbsp;({drinkDetails[measurementsKeys[index]]})</span>
              )}
            </Text>
          </Flex>
        </ListItem>
      ))}
    </List>
  );
}
