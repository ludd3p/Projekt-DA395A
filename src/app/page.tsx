"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type seasons = {
  season: string;
  url: string;
};

export default function Home() {
  const [raceYears, setRaceYears] = useState<seasons[]>([]);
  const [year, setYear] = useState<string>("0");

  useEffect(() => {
    fetch("http://ergast.com/api/f1/seasons.json?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setRaceYears(data.MRData.SeasonTable.Seasons.reverse());
      });
  }, []);

  const handleYearSelection = (e: ChangeEvent<HTMLSelectElement>) => {};

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="py-3 text-4xl">Grupp 5</h1>
        <select
          name="seasons"
          id="seasons"
          className="h-10 px-4 py-2 border rounded-md border-slate-500"
          onChange={handleYearSelection}
          value={year}
        >
          <option disabled value="0">
            Välj år...
          </option>
          {raceYears.map((season) => {
            return (
              <option key={season.season} value={season.season}>
                {season.season}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
