import { Platform } from "react-native";

import { useNavigation, StackActions } from "@react-navigation/native";
import { Center, useTheme, VStack } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

import LottieView from "lottie-react-native";

import movie from "../assets/movie.json";

export function Splash() {
  const { variables, colors } = useTheme();
  const { reset } = useNavigation();
  return (
    <VStack bg="gray.300" pl={8} flex={1}>
      <LinearGradient
        colors={[colors.primary[700], "transparent", colors.primary[700]]}
        style={{
          width: variables.width,
          height:
            Platform.OS === "android"
              ? variables.height * 1.1
              : variables.height,
          position: "absolute",
        }}
      />
      <Center w={variables.width} h={variables.height}>
        <LottieView
          source={movie}
          loop={false}
          autoPlay
          style={{ width: 230, height: 230 }}
          resizeMode="cover"
          speed={1}
          onAnimationFinish={() => {
            reset({ index: 0, routes: [{ name: "Login" }] });
          }}
        />
      </Center>
    </VStack>
  );
}
