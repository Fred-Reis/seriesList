import {
  Box,
  Center,
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

type EpisodeProps = {
  image: {
    original: string;
  };
  name: string;
  number: number;
  season: number;
  airdate: string;
  airtime: string;
  runtime: number;
  summary: string;
  poster: string;
};

export function EpisodeDetails() {
  const { variables, colors } = useTheme();

  const route = useRoute();
  const { goBack } = useNavigation();

  const {
    name,
    image,
    airdate,
    airtime,
    number,
    runtime,
    season,
    summary,
    poster,
  } = route.params as EpisodeProps;

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
        src={image?.original ? image?.original : poster}
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

  return (
    <Box bg="primary.700" h="100%" position="relative" pt={3}>
      <BackDrop />

      <Box
        bg="primary.500"
        h={variables.BACKDROP_HEIGHT * 0.7}
        w={variables.width}
        borderTopRadius="70px"
        borderColor="gray.300"
        borderWidth={2}
        borderLeftWidth={0.5}
        borderRightWidth={0.5}
        borderBottomWidth={0}
        opacity={0.4}
        position="absolute"
        bottom={0}
      />

      <Ionicons
        name="ios-arrow-back-circle-outline"
        size={30}
        color="white"
        style={{ margin: 35, position: "absolute" }}
        onPress={() => {
          goBack();
        }}
      />

      <VStack p={6} mt="120%">
        <VStack px={4}>
          <Text
            fontSize="xl"
            color="gray.100"
            fontFamily="heading"
            mt={4}
            // textAlign="center"
          >
            {name}
          </Text>

          <HStack
            alignItems="baseline"
            w={variables.width}
            flexWrap="wrap"
            my={2}
          >
            <Text fontSize="md" color="gray.100" fontFamily="body" mr={1}>
              Season:
            </Text>

            <Text fontSize="md" color="gray.200" fontFamily="body" mr={2}>
              {season}
            </Text>

            <Text fontSize="md" color="gray.100" fontFamily="body" mr={1}>
              Episode:
            </Text>

            <Text fontSize="md" color="gray.200" fontFamily="body" mr={2}>
              {number}
            </Text>
          </HStack>

          <HStack alignItems="baseline" flexWrap="wrap">
            <Text fontSize="md" color="gray.100" fontFamily="body" mr={1}>
              Air Date:
            </Text>

            <Text fontSize="md" color="gray.200" fontFamily="body" mr={2}>
              {airdate}
            </Text>
            <Text fontSize="md" color="gray.200" fontFamily="body" mr={2}>
              {airtime} hs
            </Text>

            <Text fontSize="md" color="gray.200" fontFamily="body">
              {runtime} min
            </Text>
          </HStack>

          <Text fontSize="xl" color="gray.100" fontFamily="heading" mt={8}>
            Summary:
          </Text>

          <ScrollView height="50%">
            <RenderHtml
              source={{ html: summary }}
              contentWidth={variables.width}
              tagsStyles={{
                body: {
                  color: colors.gray[100],
                  lineHeight: 22,
                  fontSize: 15,
                },
              }}
            />
          </ScrollView>
        </VStack>
      </VStack>
    </Box>
  );
}
