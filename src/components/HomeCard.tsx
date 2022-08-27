import { Animated, TouchableWithoutFeedback } from "react-native";
import { Box, Text, useTheme } from "native-base";

type CardProps = {
  image: string;
  title: string;
  index: number;
  last: boolean;
  scale: any;
};

export function HomeCard({ image, title, index, last, scale }: CardProps) {
  const { variables } = useTheme();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("pressed", index);
      }}
    >
      <Animated.View
        style={{
          width: variables.CARD_WIDTH,
          marginLeft: index === 0 ? (variables.CARD_WIDTH * 0.6) / 2 : 0,
          marginRight: last ? (variables.CARD_WIDTH * 0.6) / 2 : 0,
        }}
      >
        <Box marginX={variables.SPACING}>
          <Animated.Image
            source={{ uri: image }}
            style={{
              height: variables.CARD_HEIGHT,
              borderRadius: 10,
              transform: [{ scaleY: scale }],
            }}
          />
          <Text textAlign="center" fontSize="2xl" color="white">
            {title}
          </Text>
        </Box>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
