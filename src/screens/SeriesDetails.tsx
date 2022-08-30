import { useEffect, useState, useRef } from "react";
import { TouchableOpacity } from "react-native";

import {
  Box,
  FlatList,
  HStack,
  Image,
  ScrollView,
  Text,
  useTheme,
  VStack,
} from "native-base";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import RenderHtml from "react-native-render-html";

import LottieView from "lottie-react-native";

import { SeriesDetailsPropsDTO } from "../DTOs/seriesDetailsPropsDTO";

import SeasonDetailCard from "../components/SeasonDetailCard";
import { BackButton } from "../components/BackButton";
import { Loading } from "../components/Loading";

import favorite from "../assets/favorite.json";

import { API } from "../api";

export function SeriesDetails() {
  const [favorites, setFavorites] = useState<SeriesDetailsPropsDTO[]>([]);
  const [seriesList, setSeriesList] = useState<any[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  const animationRef = useRef<LottieView>(null);

  const { variables, colors } = useTheme();

  const route = useRoute();

  const { id, poster, genres, schedule, summary, title } =
    route.params as SeriesDetailsPropsDTO;

  const { getItem, setItem } = useAsyncStorage("@storage_play_series");

  const getFavoritesStorage = async () => {
    const item = await getItem();
    setFavorites(item != null ? JSON.parse(item) : []);

    const alreadyFavorite =
      item != null
        ? JSON.parse(item).some((favorite) => favorite.id === id)
        : false;

    if (alreadyFavorite) {
      animationRef.current?.reset();
      animationRef.current?.play(130, 130);
    } else {
      animationRef.current?.reset();
      animationRef.current?.play(164, 164);
    }

    setIsFavorite(alreadyFavorite);
  };

  const setFavoritesStorage = async () => {
    await setItem(JSON.stringify(favorites));
  };

  const handleSetFavorite = () => {
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      animationRef.current?.reset();
      animationRef.current?.play(135, 155);
      return setFavorites((prevState) =>
        prevState.filter((favorite) => favorite.id !== id)
      );
    }
    animationRef.current?.reset();
    animationRef.current?.play(50, 110);
    setFavorites((prevState) => [
      { id, poster, genres, schedule, summary, title },
      ...prevState,
    ]);
  };

  const handleGetSeries = async (_id: string) => {
    setLoading(true);
    try {
      const response = await API.SERIES_SEASONS(_id);
      setSeriesList(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const BackDrop = () => (
    <VStack
      position="absolute"
      w={variables.BACKDROP_WIDTH}
      h={variables.BACKDROP_HEIGHT}
    >
      <Image
        w={variables.width}
        h={variables.BACKDROP_HEIGHT}
        resizeMode="cover"
        src={poster}
        alt="any"
      />
      <LinearGradient
        colors={["transparent", colors.primary[700]]}
        style={{
          width: variables.width,
          height: variables.BACKDROP_HEIGHT,
          position: "absolute",
          bottom: 0,
        }}
      />
    </VStack>
  );

  useEffect(() => {
    handleGetSeries(String(id));
    getFavoritesStorage();
    setLoading(false);
  }, []);

  useEffect(() => {
    setFavoritesStorage();
  }, [favorites]);

  return (
    <Box bg="primary.700" h="100%">
      {loading ? (
        <Loading />
      ) : (
        <>
          <BackDrop />

          <BackButton />

          <VStack mt="50%">
            <FlatList
              bounces={false}
              data={seriesList}
              keyExtractor={(item) => String(item.id)}
              decelerationRate={1}
              snapToInterval={variables.CARD_WIDTH * 0.8}
              scrollEventThrottle={16}
              initialNumToRender={8}
              maxToRenderPerBatch={10}
              renderItem={({ item, index }) => {
                return (
                  <SeasonDetailCard
                    image={item.image?.medium ? item.image.medium : poster}
                    title={item.name}
                    index={index}
                    last={seriesList.length - 1 === index}
                    poster={item.image?.medium ? item.image.original : poster}
                    seasonId={item.id}
                    seasonNumber={item.number}
                    episodeOrder={item.episodeOrder}
                    endDate={item.endDate}
                    premiereDate={item.premiereDate}
                  />
                );
              }}
              showsHorizontalScrollIndicator={false}
              horizontal
            />

            <VStack px={4} mt={4}>
              <HStack alignItems="center" justifyContent="space-between" pr={4}>
                <Text
                  fontSize="2xl"
                  color="gray.100"
                  fontFamily="body"
                  maxW="80%"
                >
                  {title}
                </Text>

                <TouchableOpacity
                  onPress={handleSetFavorite}
                  style={{
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LottieView
                    source={favorite}
                    loop={false}
                    style={{ width: 230, height: 230 }}
                    resizeMode="cover"
                    speed={1}
                    ref={animationRef}
                  />
                </TouchableOpacity>
              </HStack>

              <HStack alignItems="baseline" mt={2} flexWrap="wrap">
                <Text fontSize="lg" color="gray.100" fontFamily="body" mr={2}>
                  Genres:
                </Text>
                {genres.map((genre, index) => (
                  <Text
                    key={genre}
                    fontSize="md"
                    color="gray.200"
                    fontFamily="body"
                    mr={2}
                  >
                    {genre}
                    {index !== genres.length - 1 ? "," : "."}
                  </Text>
                ))}
              </HStack>

              <HStack
                alignItems="baseline"
                mt={2}
                w={variables.width}
                flexWrap="wrap"
              >
                <Text fontSize="lg" color="gray.100" fontFamily="body" mr={2}>
                  Schedule:{" "}
                  <Text fontSize="md" color="gray.200" fontFamily="body" mr={2}>
                    time - {schedule.time} hs -
                  </Text>
                </Text>

                {schedule.days.map((day, index) => (
                  <Text
                    key={day}
                    fontSize="md"
                    color="gray.200"
                    fontFamily="body"
                    mr={2}
                  >
                    {day}
                    {index !== schedule.days.length - 1 ? "," : "."}
                  </Text>
                ))}
              </HStack>

              <Text fontSize="lg" color="gray.100" fontFamily="body" mt={2}>
                Summary:
              </Text>
              <ScrollView height="25%">
                <RenderHtml
                  source={{ html: summary }}
                  contentWidth={variables.width}
                  tagsStyles={{
                    body: {
                      color: colors.gray[100],
                      lineHeight: 22,
                      fontSize: 16,
                    },
                  }}
                />
              </ScrollView>
            </VStack>
          </VStack>
        </>
      )}
    </Box>
  );
}
