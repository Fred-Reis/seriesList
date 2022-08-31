import { useEffect, useState } from "react";
import {
  Box,
  FlatList,
  HStack,
  Image,
  Text,
  useTheme,
  VStack,
} from "native-base";

import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";

import SeasonDetailCard from "../components/SeasonDetailCard";
import { BackButton } from "../components/BackButton";
import { Loading } from "../components/Loading";

import { SeasonPropsDTO } from "../DTOs/seasonPropsDTO";

import { API } from "../api";

export function SeasonDetails() {
  const [episodesList, setEpisodesList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const { variables, colors } = useTheme();

  const route = useRoute();

  const {
    seasonId,
    poster,
    seasonNumber,
    premiereDate,
    endDate,
    episodeOrder,
  } = route.params as SeasonPropsDTO;

  const handleGetEpisodes = async (_id: string) => {
    setLoading(true);
    try {
      const response = await API.SEASON_EPISODES(_id);
      setEpisodesList(response.data);
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
    handleGetEpisodes(String(seasonId));
  }, []);

  return (
    <Box bg="primary.700" h="100%">
      {loading ? (
        <Loading />
      ) : (
        <>
          <BackDrop />

          <BackButton />

          <VStack mt="90%">
            <VStack px={4} mb={6}>
              <Text
                fontSize="2xl"
                color="gray.100"
                fontFamily="heading"
                mt={4}
                textAlign="center"
              >
                Episodes Season - {seasonNumber}:
              </Text>

              <HStack
                justifyContent="center"
                alignItems="baseline"
                flexWrap="wrap"
              >
                <Text fontSize="md" color="gray.100" fontFamily="body" mr={2}>
                  Premiere Date:
                </Text>

                <Text fontSize="md" color="gray.200" fontFamily="body" mr={2}>
                  {premiereDate}
                </Text>
              </HStack>

              <HStack
                justifyContent="center"
                alignItems="baseline"
                flexWrap="wrap"
              >
                <Text fontSize="md" color="gray.100" fontFamily="body" mr={2}>
                  End Date:
                </Text>

                <Text fontSize="md" color="gray.200" fontFamily="body" mr={2}>
                  {endDate}
                </Text>
              </HStack>

              <HStack
                justifyContent="center"
                alignItems="baseline"
                flexWrap="wrap"
              >
                <Text fontSize="md" color="gray.100" fontFamily="body" mr={2}>
                  Episodes:
                </Text>

                <Text fontSize="md" color="gray.200" fontFamily="body" mr={2}>
                  {episodeOrder}
                </Text>
              </HStack>
            </VStack>

            <FlatList
              bounces={false}
              data={episodesList}
              keyExtractor={(item) => String(item.id)}
              decelerationRate={1}
              snapToInterval={variables.CARD_WIDTH * 0.8}
              showsHorizontalScrollIndicator={false}
              initialNumToRender={8}
              maxToRenderPerBatch={10}
              scrollEventThrottle={16}
              horizontal
              renderItem={({ item, index }) => {
                return (
                  <SeasonDetailCard
                    isEpisod
                    image={item.image?.medium ? item.image.medium : poster}
                    title={item.name}
                    index={index}
                    last={episodesList.length - 1 === index}
                    episode={item}
                  />
                );
              }}
            />
          </VStack>
        </>
      )}
    </Box>
  );
}
