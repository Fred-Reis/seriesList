import { useRef, useState } from "react";
import { Animated } from "react-native";
import { useTheme, Box, IBoxProps } from "native-base";

import HomeCard from "../components/HomeCard";
import { Button } from "./Button";

type ListProps = IBoxProps & {
  data: any[];
  disabledReward: boolean;
  handleGetSeries: (string) => void;
  pageForward: () => void;
  pageReward: () => void;
};

export function AnimatedList({
  data,
  disabledReward,
  handleGetSeries,
  pageForward,
  pageReward,
  ...rest
}: ListProps) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const [index, setIndex] = useState<any>();

  const { variables, colors } = useTheme();

  const listRef = useRef(null);

  const asyncPagination = async () => {
    await pageForward();
  };

  const handleUpdateList = () => {
    asyncPagination().then((res) =>
      listRef.current.scrollToIndex({ index: 0 })
    );
  };

  const _onViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[viewableItems?.length - 1]?.index);
  });

  return (
    <Box {...rest}>
      <Animated.FlatList
        ref={listRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onViewableItemsChanged={_onViewableItemsChanged.current}
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces={false}
        data={data}
        keyExtractor={(item) => String(item.id)}
        decelerationRate={0.5}
        snapToInterval={variables.CARD_WIDTH}
        initialScrollIndex={0}
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

      {index === 1 && !disabledReward && (
        <Button
          bg={disabledReward ? colors.gray[300] : colors.red[500]}
          title="preview page"
          w="150px"
          alignSelf="flex-start"
          mt={4}
          ml={6}
          disabled={disabledReward}
          onPress={pageReward}
        />
      )}

      {data.length - 1 === index && data.length > 1 && (
        <Button
          title="next page"
          w="150px"
          alignSelf="flex-end"
          mt={10}
          mr={6}
          onPress={handleUpdateList}
        />
      )}

      {data.length === 1 && (
        <Button
          title="get series list"
          w="150px"
          alignSelf="center"
          mt={10}
          mr={6}
          onPress={() => handleGetSeries("1")}
        />
      )}
    </Box>
  );
}
