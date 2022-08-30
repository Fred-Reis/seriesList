import React from "react";
import { TouchableWithoutFeedback } from "react-native";

import { Center, HStack, Image, Text, useTheme, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

import NoImage from "../assets/no-image.svg";

export function ActorsCard({ item }: any) {
  const { navigate } = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigate("ActorsDetails", {
          poster: item.image?.original,
          name: item.name,
          country: item?.country,
          birthday: item?.birthday,
          actorId: item.id,
        })
      }
    >
      <HStack
        rounded="xl"
        overflow="hidden"
        my={4}
        alignItems="center"
        bg="gray.100"
        h="150px"
      >
        {item.image?.medium ? (
          <Image
            source={{ uri: item.image?.medium }}
            h="150px"
            w="120px"
            alt={item.name}
          />
        ) : (
          <Center h="150px" w="120px">
            <NoImage height={130} />
          </Center>
        )}
        <VStack>
          <Text fontFamily="heading" color="primary.700" fontSize="2xl" ml={6}>
            {item.name}
          </Text>
          <Text fontFamily="body" color="primary.700" fontSize="xl" ml={6}>
            {item.country?.name ? item.country?.name : "N/A"}
          </Text>
        </VStack>
      </HStack>
    </TouchableWithoutFeedback>
  );
}
