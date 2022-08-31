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

import SeriesByActorCard from "../components/SeriesByActorCard";
import { BackButton } from "../components/BackButton";
import { Loading } from "../components/Loading";

import { API } from "../api";

export type ActorPropsDTO = {
  actorId: number;
  birthday: string | null;
  country: {
    name: string | null;
  };
  name: string;
  poster: string | undefined;
};

export function ActorsDetails() {
  const [seriesList, setSeriesList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const { variables, colors } = useTheme();

  const route = useRoute();

  const { actorId, birthday, country, name, poster } =
    route.params as ActorPropsDTO;

  const handleGetShows = async (_id: string) => {
    setLoading(true);
    try {
      const response = await API.SHOWS_BY_ACTOR(_id);
      setSeriesList(response.data.map((show) => show._embedded.show));
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
    handleGetShows(String(actorId));
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
            <VStack px={4} mb={2}>
              <Text
                fontSize="2xl"
                color="gray.100"
                fontFamily="heading"
                mt={4}
                textAlign="center"
              >
                {name}
              </Text>

              <HStack
                justifyContent="center"
                alignItems="baseline"
                flexWrap="wrap"
              >
                <Text fontSize="md" color="gray.100" fontFamily="body" mr={2}>
                  from:
                </Text>

                <Text fontSize="md" color="gray.200" fontFamily="body" mr={2}>
                  {country?.name ? country?.name : "N/A"}
                </Text>
              </HStack>

              <HStack
                justifyContent="center"
                alignItems="baseline"
                flexWrap="wrap"
              >
                <Text fontSize="md" color="gray.100" fontFamily="body" mr={2}>
                  birthday:
                </Text>

                <Text fontSize="md" color="gray.200" fontFamily="body" mr={2}>
                  {birthday ? birthday : "N/A"}
                </Text>
              </HStack>
            </VStack>

            <Text
              fontSize="xl"
              color="gray.100"
              fontFamily="heading"
              my={2}
              textAlign="center"
            >
              Worked on:
            </Text>

            <FlatList
              bounces={false}
              data={seriesList}
              keyExtractor={(item) => String(item.id)}
              decelerationRate={1}
              snapToInterval={variables.CARD_WIDTH * 0.8}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({ item, index }) => {
                return (
                  <SeriesByActorCard
                    image={item.image?.medium ? item.image.medium : poster}
                    title={item.name}
                    index={index}
                    last={seriesList.length - 1 === index}
                    id={item.id}
                    poster={item.image?.original ? item.image.original : poster}
                    summary={item.summary}
                    schedule={item.schedule}
                    genres={item.genres}
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
