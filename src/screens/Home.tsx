import { useEffect, useState } from "react";
import { SafeAreaView, Platform, Keyboard } from "react-native";

import { VStack, useTheme, HStack, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

import { AnimatedList } from "../components/AnimatedList";

import { Loading } from "../components/Loading";
import { Input } from "../components/Input";

import { API } from "../api";

export function Home() {
  const [seriesList, setSeriesList] = useState<any[]>([]);
  const [seriesName, setSeriesName] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { variables, colors } = useTheme();

  const handleGetSeries = async (_page: string = "1") => {
    setLoading(true);
    try {
      const response = await API.SHOWS_PAGE(_page);
      setSeriesList(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleForwardPage = async () => {
    setLoading(true);
    try {
      handleGetSeries(String(page + 1));
      setLoading(false);
      setPage((prevState) => prevState + 1);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleRewardPage = async () => {
    setLoading(true);
    if (page <= 1) {
      return setLoading(false);
    }

    try {
      handleGetSeries(String(page - 1));
      setLoading(false);
      setPage((prevState) => prevState - 1);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleGetSeriesByName = async () => {
    setLoading(true);
    Keyboard.dismiss();
    setSeriesName("");
    try {
      const response = await API.SHOWS_BY_NAME(seriesName);
      setLoading(false);
      setSeriesList([response.data]);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetSeries();
  }, []);

  return (
    <VStack bg="gray.300" flex={1}>
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView
          style={{ paddingTop: Platform.OS === "android" ? 35 : 0 }}
        >
          <HStack
            px={4}
            my={6}
            zIndex={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <MaterialIcons
              name="search"
              size={40}
              color="white"
              onPress={handleGetSeriesByName}
            />
            <Input
              placeholder="Search"
              onChangeText={setSeriesName}
              value={seriesName}
              onSubmitEditing={handleGetSeriesByName}
              autoCorrect={false}
            />
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

          <AnimatedList
            data={seriesList.length > 50 ? seriesList.slice(0, 50) : seriesList}
            mt={10}
            handleGetSeries={handleGetSeries}
            pageForward={handleForwardPage}
            pageReward={handleRewardPage}
            disabledReward={page === 1}
          />
        </SafeAreaView>
      )}
    </VStack>
  );
}
