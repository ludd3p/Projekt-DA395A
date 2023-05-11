"use client";

import { checkCountries } from "@/utils/checkCountries";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useGlobalContext } from "./context/context";
import { Race, Seasons } from "./types/types";

export default function Home() {
  const router = useRouter();

  const [raceYears, setRaceYears] = useState<Seasons[]>([]);
  const [races, setRaces] = useState<Race[]>([]);
  const { year, setYear } = useGlobalContext();

  useEffect(() => {
    fetch("http://ergast.com/api/f1/seasons.json?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setRaceYears(data.MRData.SeasonTable.Seasons.reverse());
      });
  }, []);

  const handleYearSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value);

    router.push(`/season/${e.target.value}`);
  };

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
      <div>
        {races.map((race) => {
          return (
            <div key={race.date}>
              <p>{race.raceName}</p>
              <Image
                src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${checkCountries(
                  race.Circuit.Location.country
                ).toLowerCase()}.svg`}
                alt={race.Circuit.Location.country}
                width={40}
                height={30}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
