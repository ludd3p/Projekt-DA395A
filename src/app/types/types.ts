export type Seasons = {
  season: string;
  url: string;
};

export type Race = {
  Circuit: Circuit;
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
};

export type Circuit = {
  Location: Location;
  circuitId: string;
  circuitName: string;
  url: string;
};

export type Location = {
  country: string;
  lat: string;
  locality: string;
  long: string;
};

export type Favorite = {
  year: string;
  date: string;
  raceName: string;
  round: string;
};
