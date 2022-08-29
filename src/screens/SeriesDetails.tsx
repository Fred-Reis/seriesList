import { useEffect, useState } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import RenderHtml from "react-native-render-html";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";

import { SeriesDetailsPropsDTO } from "../DTOs/seriesDetailsPropsDTO";

import SeasonDetailCard from "../components/SeasonDetailCard";

import { API } from "../api";

export function SeriesDetails() {
  const [seriesList, setSeriesList] = useState<any[]>([]);

  const { variables, colors } = useTheme();

  const route = useRoute();
  const { goBack } = useNavigation();

  const { id, poster, genres, schedule, summary, title } =
    route.params as SeriesDetailsPropsDTO;

  const handleGetSeries = async (_id: string) => {
    const response = await API.SERIES_SEASONS(_id);
    setSeriesList(response.data);
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
  }, []);

  return (
    <Box bg="primary.700" h="100%">
      <BackDrop />

      <Ionicons
        name="ios-arrow-back-circle-outline"
        size={30}
        color="white"
        style={{ margin: 35, position: "absolute" }}
        onPress={() => {
          goBack();
        }}
      />

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

        <VStack px={4}>
          <Text fontSize="2xl" color="gray.100" fontFamily="body" mt={4}>
            {title}
          </Text>

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
    </Box>
  );
}
