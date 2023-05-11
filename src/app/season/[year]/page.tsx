"use client";

import { useGlobalContext } from "@/app/context/context";
import { Race } from "@/app/types/types";
import { checkCountries } from "@/utils/checkCountries";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Year({ params }: { params: { year: string } }) {
  const [races, setRaces] = useState<Race[]>([]);
  const { year } = params;

  useEffect(() => {
    fetch(`http://ergast.com/api/f1/${year}.json`)
      .then((response) => response.json())
      .then((data) => {
        setRaces(data.MRData.RaceTable.Races);
      });
  }, [year]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold">Säsongen {year}</h1>
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
  );
}
