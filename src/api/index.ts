import api from "./setup";

export const URLS = {
  SHOWS_PAGE: "/shows?page=:number",
  SHOWS_BY_NAME: "/singlesearch/shows?q=:name",
  SERIES_SEASONS: "/shows/:id/seasons",
  SEASON_EPISODES: "/seasons/:id/episodes",
  SHOWS_BY_ACTOR: "/people/:id/castcredits?embed=show",
  PEOPLE_BY_NAME: "/search/people?q=:name",
};

const showsByPage = (_page: string) => {
  return api.get(URLS.SHOWS_PAGE.replace(":number", _page));
};

const showsByName = (_name: string) => {
  return api.get(URLS.SHOWS_BY_NAME.replace(":name", _name));
};

const showsByActor = (_id: string) => {
  return api.get(URLS.SHOWS_BY_ACTOR.replace(":id", _id));
};

const seriesSeason = (_id: string) => {
  return api.get(URLS.SERIES_SEASONS.replace(":id", _id));
};

const seasonEpisodes = (_id: string) => {
  return api.get(URLS.SEASON_EPISODES.replace(":id", _id));
};

const peopleByName = (_name: string) => {
  return api.get(URLS.PEOPLE_BY_NAME.replace(":name", _name));
};

export const API = {
  SHOWS_PAGE: showsByPage,
  SHOWS_BY_NAME: showsByName,
  SHOWS_BY_ACTOR: showsByActor,
  SERIES_SEASONS: seriesSeason,
  SEASON_EPISODES: seasonEpisodes,
  PEOPLE_BY_NAME: peopleByName,
};
