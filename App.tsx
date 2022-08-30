import React from "react";
import { NativeBaseProvider, Center, Text, StatusBar } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { THEME } from "./src/styles/theme";
import { Loading } from "./src/components/Loading";

import Routes from "./src/routes/index.routes";
import { AuthProvider } from "./src/hooks/useAuth";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        {fontsLoaded === true ? <Routes /> : <Loading />}
      </AuthProvider>
    </NativeBaseProvider>
  );
}
