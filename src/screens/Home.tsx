import { useEffect, useState } from "react";
import { SafeAreaView, Platform } from "react-native";

import { VStack, useTheme, HStack, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

import { AnimatedList } from "../components/AnimatedList";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { API } from "../api";

export function Home() {
  const [seriesList, setSeriesList] = useState<any[]>([]);

  const { variables, colors } = useTheme();

  const handleGetSeries = async (_page: string = "1") => {
    const response = await API.SHOWS_PAGE(_page);
    setSeriesList(response.data);
  };

  useEffect(() => {
    handleGetSeries();
  }, []);

  return (
    <VStack bg="gray.300" flex={1}>
      <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 35 : 0 }}>
        <HStack
          px={4}
          my={6}
          zIndex={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <MaterialIcons name="search" size={40} color="white" />
          <Input placeholder="Search" />
        </HStack>

        <LinearGradient
          colors={[colors.primary[700], "transparent", colors.primary[700]]}
          style={{
            width: variables.width,
            height:
              Platform.OS === "android"
                ? variables.height * 1.1
                : variables.height,
            position: "absolute",
          }}
        />

        <Text
          color="white"
          fontSize="2xl"
          textAlign="center"
          fontFamily="heading"
          mt={2}
        >
          Series List
        </Text>

        <AnimatedList data={seriesList} mt={10} />

        <Button
          title="next page"
          w="150px"
          alignSelf="flex-end"
          mt={10}
          mr={5}
        />
      </SafeAreaView>
    </VStack>
  );
}
