import { useEffect, useState } from "react";
import { SafeAreaView, Platform } from "react-native";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { VStack, useTheme, Text, FlatList, Center } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { useIsFocused } from "@react-navigation/native";

import SeriesByActorCard from "../components/SeriesByActorCard";
import { Loading } from "../components/Loading";

import NotFound from "../assets/not-found.svg";

export function Favorites() {
  const [favoritesList, setFavoritesList] = useState<any[] | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  const { variables, colors } = useTheme();

  const { getItem, setItem } = useAsyncStorage("@storage_play_series");

  const isFocused = useIsFocused();

  const getFavoritesStorage = async () => {
    setLoading(true);
    const item = await getItem();
    setFavoritesList(item != null ? JSON.parse(item) : []);
    setLoading(false);
  };

  const removeFavoriteFromList = async (_id: number) => {
    setLoading(true);
    setFavoritesList((prevState) =>
      prevState.filter((favorite) => favorite.id !== _id)
    );
    await setItem(
      JSON.stringify(favoritesList.filter((favorite) => favorite.id !== _id))
    );
    setLoading(false);
  };

  useEffect(() => {
    getFavoritesStorage();
  }, [isFocused]);

  return (
    <VStack bg="gray.300" flex={1}>
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView
          style={{ paddingTop: Platform.OS === "android" ? 35 : 0 }}
        >
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

          <VStack h="90%">
            <Text
              color="white"
              fontSize="3xl"
              textAlign="center"
              fontFamily="heading"
              mt={8}
              mb={8}
            >
              Favorites List
            </Text>

            <FlatList
              bounces={false}
              data={favoritesList}
              keyExtractor={(item) => String(item.id)}
              decelerationRate={1}
              snapToInterval={variables.CARD_WIDTH * 0.8}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              horizontal
              initialNumToRender={8}
              maxToRenderPerBatch={10}
              contentContainerStyle={{
                paddingBottom: 70,
                alignItems: "center",
              }}
              renderItem={({ item, index }) => {
                return (
                  <SeriesByActorCard
                    image={item.poster}
                    title={item.title}
                    index={index}
                    last={favoritesList.length - 1 === index}
                    id={item.id}
                    poster={item.poster}
                    summary={item.summary}
                    schedule={item.schedule}
                    genres={item.genres}
                    isFavorite
                    removeFavoriteFromList={removeFavoriteFromList}
                  />
                );
              }}
              ListEmptyComponent={() => (
                <Center ml={9}>
                  <Text
                    textAlign="center"
                    my={8}
                    fontFamily="heading"
                    color="gray.100"
                    fontSize="2xl"
                  >
                    You don't have favorites yet!
                  </Text>
                  <NotFound height={350} width={350} />
                </Center>
              )}
            />
          </VStack>
        </SafeAreaView>
      )}
    </VStack>
  );
}
