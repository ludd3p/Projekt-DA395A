"use client";

import { useEffect, useState } from "react";

type seasons = {
  season: string;
  url: string;
};

export default function Home() {
  const [raceYears, setRaceYears] = useState<seasons[]>([]);

  useEffect(() => {
    fetch("http://ergast.com/api/f1/seasons.json?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setRaceYears(data.MRData.SeasonTable.Seasons);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl py-3">Grupp 5</h1>
      {raceYears.map((season) => {
        return <h1 key={season.season}>{season.season}</h1>;
      })}
    </div>
  );
}
