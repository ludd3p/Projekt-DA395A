"use client";

import DriverCard from "@/app/components/DriverCard";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Year({ params }: { params: { raceId: string } }) {
  const [results, setResults] = useState<any>([]);
  const { raceId } = params;

  const year = usePathname().slice(8, 12);
  const id = raceId.slice(5, raceId.length);

  useEffect(() => {
    fetch(`http://ergast.com/api/f1/${year}/${id}/results.json`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.MRData.RaceTable.Races);
      });
  }, [year, id]);

  console.log(results);

  if (results.length < 1) {
    return (
      <div className="container flex flex-col items-center justify-center w-5/6 h-[80vh] mx-auto">
        <h1 className="my-20 text-3xl font-semibold text-white">
          Det här racet har inte varit än eller finns inte!
        </h1>
        <p className="text-lg text-gray-200">Välkommen tillbaka år {year}</p>
      </div>
    );
  }

  return (
    <div className="container w-5/6 mx-auto">
      <div className="my-20">
        <h1 className="text-3xl font-semibold text-white">
          {`Säsongen ${year} - Runda ${results[0].round}`}
        </h1>
        <p className="mt-3 text-xl font-semibold text-red-600">
          {results.raceName}
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-between gap-6 mb-40">
        {results[0].Results.map((driver: any) => {
          return <DriverCard driver={driver} key={driver.position} />;
        })}
      </div>
    </div>
  );
}
