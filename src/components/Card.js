import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      bg="white"
      boxShadow="base"
      borderRadius="md"
      overflow="hidden"
      w="320px"
      p="4"
      spacing="2"
    >
      <Image src={imageSrc} alt={title} />
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
      <HStack alignSelf="flex-end">
        <Text>Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;