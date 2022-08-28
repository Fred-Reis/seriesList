export type SeriesDetailsPropsDTO = {
  id: number;
  title: string;
  poster: string;
  summary: string;
  schedule: {
    time: string;
    days: string[];
  };
  genres: string[];
};
