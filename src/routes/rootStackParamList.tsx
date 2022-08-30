import { NavigatorScreenParams } from "@react-navigation/native";
import { TabStackParamList } from "./tabStackParamList";

export type RootStackParamList = {
  Home: NavigatorScreenParams<TabStackParamList>;
  SeriesDetails: undefined;
  EpisodeDetails: undefined;
  ActorsDetails: undefined;
  SeasonDetails: undefined;
  Login: undefined;
};
