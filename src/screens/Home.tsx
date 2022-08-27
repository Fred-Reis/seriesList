import { useEffect, useRef } from "react";
import { SafeAreaView, Animated } from "react-native";
import { Center, Text, VStack, useTheme } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

import { HomeCard } from "../components/HomeCard";

export function Home() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { variables, colors } = useTheme();
  const series = [
    {
      id: 1,
      title: "any",
      image:
        "https://randompicturegenerator.com/img/national-park-generator/g213a0e91cd385fadad658c035180b784390ca043845e0a679af7d11eb3f7f29091da07e859e7bc051f4699fa94628525_640.jpg",
    },
    {
      id: 2,
      title: "any",
      image:
        "https://randompicturegenerator.com/img/national-park-generator/gce1793f473652df24e7312f1a995f86928b4d16dd5ff9c2c430fd42a22c189c4dcf8e624000b63392256e5aceaf24bee_640.jpg",
    },
    {
      id: 3,
      title: "any",
      image:
        "https://randompicturegenerator.com/img/national-park-generator/g78b792486a0e26da2293c0a70b8358b0349c6b43f02cfa03ba546cb4e7aad1ac6af1a6207e04697dd3206627fb83ded2_640.jpg",
    },
    {
      id: 4,
      title: "any",
      image:
        "https://randompicturegenerator.com/img/national-park-generator/gcca465546c1c87efc607c503f5edbbe1c047a9b82037dd26ac13416756333432029ffb1f5d07a450f836f24344ebb8e5_640.jpg",
    },
    {
      id: 5,
      title: "any",
      image:
        "https://randompicturegenerator.com/img/national-park-generator/g22f389c78c4affe98be5b9bd2036650436d9a0483e3292a3887b6b59e0be868f177807a0db1428495720304308557232_640.jpg",
    },
    {
      id: 6,
      title: "any",
      image:
        "https://randompicturegenerator.com/img/national-park-generator/g8e37a27575a2394035c63fbd52b2e91dddf0ff7e87810becbd251ca9db950f9450f1c61e39a1855de7e9fc0097656100_640.jpg",
    },
    {
      id: 7,
      title: "any",
      image:
        "https://randompicturegenerator.com/img/national-park-generator/g1508dff88fc5278782df3bcd4837e0cf2c9ff965134666060276a7545a029625573f6d44d30b11b2a5984bee76914253_640.jpg",
    },
  ];

  return (
    <VStack bg="gray.300" flex={1}>
      <SafeAreaView>
        <LinearGradient
          colors={[colors.primary[500], "transparent", colors.primary[700]]}
          style={{
            width: variables.width,
            height: variables.height,
            position: "absolute",
          }}
        />
        <Text color="white" fontSize="xl">
          Hello world
        </Text>
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          bounces={false}
          data={series}
          keyExtractor={(item) => String(item.id)}
          decelerationRate={0}
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
                image={item.image}
                title={item.title}
                index={index}
                last={series.length - 1 === index}
                scale={scale}
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
      </SafeAreaView>
    </VStack>
  );
}
