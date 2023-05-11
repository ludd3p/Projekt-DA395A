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
      <h1 className="text-3xl font-semibold">Säsongen {year}</h1>
      {races.map((race) => {
        return <GrandPrixCard key={race.date} race={race} />;
      })}
    </div>
  );
}
