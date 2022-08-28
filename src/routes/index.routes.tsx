import { Platform } from "react-native";
import { HStack, Text, useTheme } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabStackParamList } from "./tabStackParamList";
import { RootStackParamList } from "./rootStackParamList";

import { Home } from "../screens/Home";
import { Actors } from "../screens/Actors";
import { Favorites } from "../screens/Favorites";
import { ActorsDetails } from "../screens/ActorsDetails";
import { SeasonDetails } from "../screens/SeasonDetails";
import { SeriesDetails } from "../screens/SeriesDetails";
import { EpisodeDetails } from "../screens/EpisodeDetails";

const { Navigator, Screen, Group } =
  createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabStackParamList>();

const TabRoutes = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.red[500],
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderColor: colors.primary[400],
          height:
            Platform.OS === "android"
              ? getBottomSpace() + 100
              : getBottomSpace() + 80,
          paddingBottom: Platform.OS === "android" ? 5 : 10,
          paddingTop: 10,
          paddingHorizontal: 10,
          backgroundColor: colors.primary[600],
        },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen
        name="Favorite"
        component={Favorites}
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HStack
                rounded="25px"
                h="50px"
                px={3}
                bg="red.500"
                alignItems="center"
                justifyContent="space-evenly"
              >
                <MaterialCommunityIcons
                  name="star"
                  size={30}
                  color={colors.gray[100]}
                />
                <Text
                  ml={2}
                  fontFamily="heading"
                  fontSize="md"
                  color={colors.gray[100]}
                >
                  Favorites
                </Text>
              </HStack>
            ) : (
              <MaterialCommunityIcons
                name="star"
                size={35}
                color={colors.gray[300]}
              />
            ),
        }}
      />

      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HStack
                rounded="25px"
                h="50px"
                px={3}
                bg="red.500"
                alignItems="center"
                justifyContent="space-evenly"
              >
                <MaterialCommunityIcons
                  name="home"
                  size={30}
                  color={colors.gray[100]}
                />
                <Text
                  ml={2}
                  fontFamily="heading"
                  fontSize="md"
                  color={colors.gray[100]}
                >
                  Home
                </Text>
              </HStack>
            ) : (
              <MaterialCommunityIcons
                name="home"
                size={35}
                color={colors.gray[300]}
              />
            ),
        }}
      />

      <Tab.Screen
        name="Actors"
        component={Actors}
        options={{
          title: "",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HStack
                rounded="25px"
                h="50px"
                px={3}
                bg="red.500"
                alignItems="center"
                justifyContent="space-evenly"
              >
                <MaterialCommunityIcons
                  name="movie-star"
                  size={30}
                  color={colors.gray[100]}
                />
                <Text
                  ml={2}
                  fontFamily="heading"
                  fontSize="md"
                  color={colors.gray[100]}
                >
                  Actors
                </Text>
              </HStack>
            ) : (
              <MaterialCommunityIcons
                name="movie-star"
                size={35}
                color={colors.gray[300]}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Group>
          <Screen name="Home" component={TabRoutes} />
          <Screen name="ActorsDetails" component={ActorsDetails} />
          <Screen name="EpisodeDetails" component={EpisodeDetails} />
          <Screen name="SeriesDetails" component={SeriesDetails} />
          <Screen name="SeasonDetails" component={SeasonDetails} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
