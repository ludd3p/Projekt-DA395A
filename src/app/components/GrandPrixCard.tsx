import { checkCountries } from "@/utils/checkCountries";
import Image from "next/image";
import { Race } from "../types/types";

export default function GrandPrixCard({ race }: { race: Race }) {
  return (
    <div className="flex flex-col w-[48%] p-8 bg-slate-800" key={race.date}>
      <div className="flex flex-row items-center justify-between">
        <p className="text-xl font-semibold text-white">{race.raceName}</p>
        <Image
          src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${checkCountries(
            race.Circuit.Location.country
          ).toLowerCase()}.svg`}
          alt={race.Circuit.Location.country}
          width={40}
          height={30}
        />
      </div>
      <p className="text-gray-200 ">{race.Circuit.Location.locality}</p>
      <p className="mb-3 italic text-red-600">{race.Circuit.circuitName}</p>
      <p className="text-gray-200">Round {race.round}</p>
      <p className="text-gray-200">{race.date} - {race.time}</p>
    </div>
  );
}
