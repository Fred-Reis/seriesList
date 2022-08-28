import { NavigatorScreenParams } from "@react-navigation/native";
import { TabStackParamList } from "./tabStackParamList";

export type RootStackParamList = {
  Home: NavigatorScreenParams<TabStackParamList>;
  SeasonDetails: undefined;
  EpisodeDetails: undefined;
  ActorsDetails: undefined;
};
