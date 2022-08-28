import { useRef } from "react";
import { Animated } from "react-native";
import { Center, Text, useTheme, Box, IBoxProps } from "native-base";

import { HomeCard } from "../components/HomeCard";

type ListProps = IBoxProps & {
  data: any[];
};

export function AnimatedList({ data, ...rest }: ListProps) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { variables } = useTheme();

  return (
    <Box {...rest}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        bounces={false}
        data={data}
        keyExtractor={(item) => String(item.id)}
        decelerationRate={0.5}
        snapToInterval={variables.CARD_WIDTH}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * variables.CARD_WIDTH,
            index * variables.CARD_WIDTH,
            (index + 1) * variables.CARD_WIDTH,
          ];

          const outputRange = [0.8, 1, 0.8];

          const scale = scrollX.interpolate({ inputRange, outputRange });

          return (
            <HomeCard
              image={item.image.medium}
              title={item.name}
              index={index}
              last={data.length - 1 === index}
              scale={scale}
              average={item.rating.average}
              id={item.id}
            />
          );
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        ListEmptyComponent={() => (
          <Center>
            <Text color="white" fontSize="xl" mt={6} textAlign="center">
              Você ainda não possui {"\n"}solicitações{" "}
            </Text>
          </Center>
        )}
      />
    </Box>
  );
}
