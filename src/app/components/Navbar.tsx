"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";
import { Seasons } from "../types/types";

export default function Navbar() {
  const router = useRouter();
  const { year, setYear } = useGlobalContext();
  const [raceYears, setRaceYears] = useState<Seasons[]>([]);

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
    <nav className="container flex flex-row items-center justify-between w-full m-auto my-6">
      <p className="text-2xl">Formel 1</p>
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
    </nav>
  );
}
