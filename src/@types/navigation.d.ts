import { SeriesDetailsPropsDTO } from "../DTOs/seriesDetailsPropsDTO";
import { SeasonPropsDTO } from "../DTOs/seasonPropsDTO";

import { ActorPropsDTO } from "../screens/ActorsDetails";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Splash: undefined;
      Login: any;
      Home: undefined;
      SeriesDetails: SeriesDetailsPropsDTO;
      Favorite: undefined;
      EpisodeDetails: undefined;
      Actors: undefined;
      ActorsDetails: ActorPropsDTO;
      SeasonDetails: SeasonPropsDTO;
    }
  }
}
