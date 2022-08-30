import { memo } from "react";
import { TouchableWithoutFeedback } from "react-native";

import { Box, Image, Text, useTheme } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { SeriesDetailsPropsDTO } from "../DTOs/seriesDetailsPropsDTO";
import { Button } from "./Button";

type CardProps = SeriesDetailsPropsDTO & {
  last: boolean;
  image: string;
  title: string;
  index: number;
  isFavorite?: boolean;
  removeFavoriteFromList?: (number) => void;
};

const SeriesByActorCard = ({
  image,
  title,
  index,
  id,
  poster,
  last,
  genres,
  schedule,
  summary,
  isFavorite = false,
  removeFavoriteFromList,
}: CardProps) => {
  const { variables } = useTheme();

  const { navigate } = useNavigation();

  function handleOpenSeriesDetails() {
    const data: SeriesDetailsPropsDTO = {
      id,
      genres,
      poster,
      schedule,
      summary,
      title,
    };

    navigate("SeriesDetails", data);
  }

  return (
    <TouchableWithoutFeedback onPress={handleOpenSeriesDetails}>
      <Box
        w={variables.CARD_WIDTH * 0.8}
        ml={index === 0 ? (variables.CARD_WIDTH * 0.8) / 2 : 0}
        mr={last ? (variables.CARD_WIDTH * 0.8) / 2 : 0}
      >
        <Box position="relative" overflowY="hidden" marginX={variables.SPACING}>
          {isFavorite && (
            <Button
              onPress={() => {
                removeFavoriteFromList(id);
              }}
              title="Remove"
              h={12}
              mb={8}
              mx={2}
            />
          )}
          <Image
            alt={title}
            source={{ uri: image }}
            h={variables.CARD_HEIGHT * 0.8}
            rounded="3xl"
          />

          <Text
            textAlign="center"
            fontSize={isFavorite ? "xl" : "md"}
            color="white"
            fontFamily="body"
            mt={isFavorite && 4}
          >
            {title}
          </Text>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default memo(SeriesByActorCard);
