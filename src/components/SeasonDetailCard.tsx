import { memo } from "react";
import { TouchableWithoutFeedback } from "react-native";

import { Box, Image, Text, useTheme } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { SeasonPropsDTO } from "../DTOs/seasonPropsDTO";

type CardProps = SeasonPropsDTO & {
  image: string;
  title: string;
  index: number;
  last: boolean;
  isEpisod?: boolean;
  episode?: any;
};

function SeasonDetailCard({
  image,
  title,
  index,
  last,
  isEpisod = false,
  seasonId,
  seasonNumber,
  poster,
  premiereDate,
  endDate,
  episodeOrder,
  episode,
}: CardProps) {
  const { variables } = useTheme();

  const { navigate } = useNavigation();

  function handleOpenSeasonDetails() {
    const data: SeasonPropsDTO = {
      seasonId,
      poster,
      seasonNumber,
      premiereDate,
      endDate,
      episodeOrder,
    };

    navigate("SeasonDetails", data);
  }

  function handleOpenEpisodeDetails() {
    episode.poster = image;
    navigate("EpisodeDetails", episode);
  }

  return (
    <TouchableWithoutFeedback
      onPress={isEpisod ? handleOpenEpisodeDetails : handleOpenSeasonDetails}
    >
      <Box
        w={variables.CARD_WIDTH * 0.8}
        ml={index === 0 ? (variables.CARD_WIDTH * 0.8) / 2 : 0}
        mr={last ? (variables.CARD_WIDTH * 0.8) / 2 : 0}
      >
        <Box position="relative" overflowY="hidden" marginX={variables.SPACING}>
          <Image
            alt={title}
            source={{ uri: image }}
            h={variables.CARD_HEIGHT * 0.8}
            rounded="3xl"
          />
          {isEpisod && (
            <Text
              textAlign="center"
              fontSize={"xs"}
              color="white"
              fontFamily="body"
              mt={2}
            >
              Episode - {index + 1}
            </Text>
          )}
          <Text
            textAlign="center"
            fontSize={isEpisod ? "sm" : "2xl"}
            color="white"
            fontFamily="body"
          >
            {isEpisod ? title : `Season - ${index + 1}`}
          </Text>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
}

export default memo(SeasonDetailCard);
