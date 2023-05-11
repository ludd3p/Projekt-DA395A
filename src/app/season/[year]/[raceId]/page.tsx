"use client";

import DriverCard from "@/app/components/DriverCard";
import { useGlobalContext } from "@/app/context/context";
import { removeFavoriteRace, setFavoriteRaces } from "@/utils/localStorage";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Year({ params }: { params: { raceId: string } }) {
  const { favorites, setFavorites } = useGlobalContext();
  const [results, setResults] = useState<any>([]);
  const { raceId } = params;
  var isFavorited = false;

  const year = usePathname().slice(8, 12);
  const id = raceId.slice(5, raceId.length);

  useEffect(() => {
    fetch(`http://ergast.com/api/f1/${year}/${id}/results.json`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.MRData.RaceTable.Races);
      });
  }, [year, id]);

  const handleFavorite = () => {
    let res;
    if (isFavorited) {
      res = removeFavoriteRace(results[0].date);
    } else {
      res = setFavoriteRaces({
        year: results[0].season,
        raceName: results[0].raceName,
        date: results[0].date,
        round: results[0].round,
      });
    }

    setFavorites(res);
  };

  favorites.map((favorite) => {
    if (results.length < 1) return;

    if (favorite.date === results[0].date) isFavorited = true;
  });

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
      <div className="flex items-center justify-between my-20">
        <div>
          <h1 className="text-3xl font-semibold text-white">
            {`Säsongen ${year} - Runda ${results[0].round}`}
          </h1>
          <p className="mt-3 text-xl font-semibold text-red-600">
            {results[0].raceName}
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isFavorited ? "red" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={isFavorited ? "red" : "white"}
          className="w-12 h-12 cursor-pointer"
          onClick={handleFavorite}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>

      <div className="flex flex-row flex-wrap justify-between gap-6 mb-40">
        {results[0].Results.map((driver: any, i: number) => {
          return <DriverCard driver={driver} key={i} />;
        })}
      </div>
    </div>
  );
}
