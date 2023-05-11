export const getFavoriteRaces = () => {
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
