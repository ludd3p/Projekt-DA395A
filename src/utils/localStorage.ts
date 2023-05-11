import { Favorite } from "@/app/types/types";

export const getFavoriteRaces = (): Favorite[] => {
  const data = localStorage.getItem("favorites");

  if (!data) return [];

  return JSON.parse(data);
};

export const setFavoriteRaces = (race: any) => {
  const currentRaces = getFavoriteRaces();

  const newRaces = [...currentRaces, race];

  localStorage.setItem("favorites", JSON.stringify(newRaces));

  return getFavoriteRaces();
};

export const removeFavoriteRace = (date: string) => {
  const currentRaces = getFavoriteRaces();

  let newRaces = new Array<Favorite>();

  currentRaces.map((race) => {
    if (race.date !== date) newRaces.push(race);
  });

  localStorage.setItem("favorites", JSON.stringify(newRaces));

  return getFavoriteRaces();
};
