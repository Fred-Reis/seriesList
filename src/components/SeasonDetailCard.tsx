import { TouchableWithoutFeedback } from "react-native";
import { Box, Image, Text, useTheme } from "native-base";
// import { MaterialIcons } from "@expo/vector-icons";

type CardProps = {
  image: string;
  title: string;
  index: number;
  last: boolean;
};

export function SeasonDetailCard({ image, title, index, last }: CardProps) {
  const { variables } = useTheme();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("pressed", index);
      }}
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
          <Text
            textAlign="center"
            fontSize="2xl"
            color="white"
            fontFamily="heading"
          >
            Season - {index + 1}
          </Text>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
}
