import { useRef } from "react";
import { Animated } from "react-native";
import { Center, Text, useTheme, Box, IBoxProps } from "native-base";

import HomeCard from "../components/HomeCard";

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
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces={false}
        data={data}
        keyExtractor={(item) => String(item.id)}
        decelerationRate={0.5}
        snapToInterval={variables.CARD_WIDTH}
        initialNumToRender={8}
        maxToRenderPerBatch={10}
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
              id={item.id}
              title={item.name}
              image={item.image.medium}
              poster={item.image.original}
              summary={item.summary}
              schedule={item.schedule}
              genres={item.genres}
              index={index}
              last={data.length - 1 === index}
              scale={scale}
              average={item.rating.average}
            />
          );
        }}
      />
    </Box>
  );
}
