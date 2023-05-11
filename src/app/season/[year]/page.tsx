"use client";

import GrandPrixCard from "@/app/components/GrandPrixCard";
import { Race } from "@/app/types/types";
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
    <div className="container w-5/6 mx-auto">
      <h1 className="my-20 text-3xl font-semibold text-white">
        Säsongen {year}
      </h1>
      <div className="flex flex-row flex-wrap justify-between gap-6 mb-40">
        {races.map((race) => {
          return <GrandPrixCard key={race.date} race={race} />;
        })}
      </div>
    </div>
  );
}
