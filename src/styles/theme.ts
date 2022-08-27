import { extendTheme } from "native-base";
import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const CARD_WIDTH = Platform.OS === "ios" ? width * 0.62 : width * 0.64;

export type CustomThemeType = typeof THEME;

export const THEME = extendTheme({
  colors: {
    primary: {
      700: "#1E262E",
      600: "#212831",
      500: "#323841",
      400: "#2F353E",
    },
    secondary: {
      500: "#F32135",
    },
    green: {
      700: "#00875F",
      500: "#00B37E",
      300: "#04D361",
    },
    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#C4C4CC",
      100: "#E1E1E6",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56,
  },
  variables: {
    width,
    height,

    SPACING: "20px",
    CARD_WIDTH,
    CARD_HEIGHT: height * 0.35,

    EMPTY_ITEM_SIZE: (width - CARD_WIDTH) / 2,

    // BACKDROP_WIDTH: width,
    // BACKDROP_HEIGHT: height * 0.6,
  },
});
