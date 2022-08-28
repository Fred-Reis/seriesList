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
import { LinearGradient } from "expo-linear-gradient";
import RenderHtml from "react-native-render-html";

import { SeasonDetailCard } from "../components/SeasonDetailCard";

const seriesList = [
  {
    id: 753,
    url: "https://www.tvmaze.com/seasons/753/breaking-bad-season-1",
    number: 1,
    name: "",
    episodeOrder: 7,
    premiereDate: "2008-01-20",
    endDate: "2008-03-09",
    network: {
      id: 20,
      name: "AMC",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: null,
    },
    webChannel: null,
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/405/1012791.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/405/1012791.jpg",
    },
    summary: null,
    _links: {
      self: {
        href: "https://api.tvmaze.com/seasons/753",
      },
    },
  },
  {
    id: 754,
    url: "https://www.tvmaze.com/seasons/754/breaking-bad-season-2",
    number: 2,
    name: "",
    episodeOrder: 13,
    premiereDate: "2009-03-08",
    endDate: "2009-05-31",
    network: {
      id: 20,
      name: "AMC",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: null,
    },
    webChannel: null,
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/405/1012792.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/405/1012792.jpg",
    },
    summary: null,
    _links: {
      self: {
        href: "https://api.tvmaze.com/seasons/754",
      },
    },
  },
  {
    id: 755,
    url: "https://www.tvmaze.com/seasons/755/breaking-bad-season-3",
    number: 3,
    name: "",
    episodeOrder: 13,
    premiereDate: "2010-03-21",
    endDate: "2010-06-13",
    network: {
      id: 20,
      name: "AMC",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: null,
    },
    webChannel: null,
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/405/1012793.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/405/1012793.jpg",
    },
    summary: null,
    _links: {
      self: {
        href: "https://api.tvmaze.com/seasons/755",
      },
    },
  },
  {
    id: 756,
    url: "https://www.tvmaze.com/seasons/756/breaking-bad-season-4",
    number: 4,
    name: "",
    episodeOrder: 13,
    premiereDate: "2011-07-17",
    endDate: "2011-10-09",
    network: {
      id: 20,
      name: "AMC",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: null,
    },
    webChannel: null,
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/405/1012794.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/405/1012794.jpg",
    },
    summary: null,
    _links: {
      self: {
        href: "https://api.tvmaze.com/seasons/756",
      },
    },
  },
  {
    id: 757,
    url: "https://www.tvmaze.com/seasons/757/breaking-bad-season-5",
    number: 5,
    name: "",
    episodeOrder: 16,
    premiereDate: "2012-07-15",
    endDate: "2019-10-11",
    network: {
      id: 20,
      name: "AMC",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: null,
    },
    webChannel: null,
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/405/1012795.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/405/1012795.jpg",
    },
    summary: null,
    _links: {
      self: {
        href: "https://api.tvmaze.com/seasons/757",
      },
    },
  },
];

export function SeasonDetail() {
  const { variables, colors } = useTheme();

  const poster =
    "https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg";
  const name = "Breaking Bad";
  const summary =
    "<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>";
  const genres = ["Drama", "Crime", "Thriller"];
  const schedule = {
    time: "22:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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

  return (
    <Box bg="primary.700" h="100%">
      <BackDrop />

      <VStack mt="50%">
        <FlatList
          bounces={false}
          data={seriesList}
          keyExtractor={(item) => String(item.id)}
          decelerationRate={1}
          snapToInterval={variables.CARD_WIDTH * 0.8}
          scrollEventThrottle={16}
          renderItem={({ item, index }) => {
            return (
              <SeasonDetailCard
                image={item.image.medium}
                title={item.name}
                index={index}
                last={seriesList.length - 1 === index}
              />
            );
          }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={
            {
              // alignItems: "center",
              // paddingBottom: 100,
              // alignItems: "center",
              // justifyContent: "center",
              // flex: 1,
            }
          }
          horizontal
          ListEmptyComponent={() => (
            <Center>
              <Text color="white" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {"\n"}solicitações{" "}
              </Text>
            </Center>
          )}
        />

        <VStack px={4}>
          <Text fontSize="2xl" color="gray.100" fontFamily="body" mt={4}>
            {name}
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
