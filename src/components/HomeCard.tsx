import { Animated, TouchableWithoutFeedback } from "react-native";
import { Box, Center, Text, useTheme } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type CardProps = {
  id: number;
  image: string;
  title: string;
  index: number;
  last: boolean;
  average: number | null;
  scale: any;
};

export function HomeCard({
  id,
  image,
  title,
  index,
  last,
  scale,
  average,
}: CardProps) {
  const { variables } = useTheme();

  const { navigate } = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate("SeasonDetails");
      }}
    >
      <Animated.View
        style={{
          width: variables.CARD_WIDTH,
          marginLeft: index === 0 ? (variables.CARD_WIDTH * 0.6) / 2 : 0,
          marginRight: last ? (variables.CARD_WIDTH * 0.6) / 2 : 0,
          transform: [{ scaleY: scale }],
        }}
      >
        <Box position="relative" overflowY="hidden" marginX={variables.SPACING}>
          <Center
            position="absolute"
            flexDirection="row"
            w="60px"
            opacity={0.9}
            bg="gray.300"
            h={12}
            zIndex={1}
            borderTopLeftRadius={30}
            borderBottomRightRadius={10}
          >
            <MaterialIcons name="star" size={18} color="yellow" />
            <Text ml={1} color="white" fontFamily="heading">
              {average !== null ? String(average) : " - "}
            </Text>
          </Center>
          <Animated.Image
            source={{ uri: image }}
            style={{
              height: variables.CARD_HEIGHT * 1.1,
              borderRadius: 30,
            }}
          />
          <Text
            textAlign="center"
            fontSize="2xl"
            color="white"
            fontFamily="heading"
            mt={2}
          >
            {title}
          </Text>
        </Box>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
