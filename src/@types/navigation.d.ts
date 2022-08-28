import { SeriesDetailsPropsDTO } from "../DTOs/seriesDetailsPropsDTO";
import { SeasonPropsDTO } from "../DTOs/seasonPropsDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      SeriesDetails: SeriesDetailsPropsDTO;
      Favorite: undefined;
      EpisodeDetails: undefined;
      Actors: undefined;
      ActorsDetails: undefined;
      SeasonDetails: SeasonPropsDTO;
    }
  }
}
