"use client";

import { useGlobalContext } from "@/app/context/context";
import { Race } from "@/app/types/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export default function Year({ params }: { params: { raceId: string } }) {
  const [races, setRaces] = useState<Race[]>([]);
  const { raceId } = params;
  //const { year } = useGlobalContext();

  const year = usePathname().slice(8, 12)
  const id = raceId.slice(5, raceId.length);


  
  useEffect(() => {
    fetch(`http://ergast.com/api/f1/${year}/${id}/results.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, [year, id]);
  

  return (
    <div className="container w-5/6 mx-auto">
      <h1 className="my-20 text-3xl font-semibold text-white">Säsongen</h1>
      <div className="flex flex-row flex-wrap justify-between gap-6 mb-40">
        {races.map((race) => {
          return <>Driver 1</>;
        })}
      </div>
    </div>
  );
}
