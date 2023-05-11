"use client";

import Link from "next/link";
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
    <nav className="py-4 mb-6 bg-opacity-40 bg-slate-800">
      <div className="container flex flex-row items-center justify-between w-5/6 m-auto my-6">
        <p className="text-2xl font-semibold text-white">
          <Link href="/">Formel 1</Link>
        </p>
        <select
          name="seasons"
          id="seasons"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 hover:border-red-500 cursor-pointer"
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
    </nav>
  );
}
