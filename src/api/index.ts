import api from "./setup";

export const URLS = {
  SHOWS_PAGE: "/shows?page=:number",
  SHOWS_BY_NAME: "/singlesearch/shows?q=:name",
  SERIES_SEASONS: "/shows/:id/seasons",
  SEASON_EPISODES: "/seasons/:id/episodes",
  PEOPLE_BY_NAME: "/search/people?q=:name",
};

const showsByPage = (page: string) => {
  return api.get(URLS.SHOWS_PAGE.replace(":number", page));
};

const showsByName = (name: string) => {
  return api.get(URLS.SHOWS_BY_NAME.replace(":name", name));
};

const seriesSeason = (id: string) => {
  return api.get(URLS.SERIES_SEASONS.replace(":id", id));
};

const seasonEpisodes = (id: string) => {
  return api.get(URLS.SEASON_EPISODES.replace(":id", id));
};

const peopleByName = (name: string) => {
  return api.get(URLS.PEOPLE_BY_NAME.replace(":name", name));
};

export const API = {
  SHOWS_PAGE: showsByPage,
  SHOWS_BY_NAME: showsByName,
  SERIES_SEASONS: seriesSeason,
  SEASON_EPISODES: seasonEpisodes,
  PEOPLE_BY_NAME: peopleByName,
};
