import { checkCountries } from "@/utils/checkCountries";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { Race } from "../types/types";

export default function GrandPrixCard({ race }: { race: Race }) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/season/${race.season}/race-${race.round}`);
  };

  return (
    <div
      className="flex flex-col w-[100%] md:w-[48%] p-8 bg-slate-800 hover:bg-slate-700 gap-1 cursor-pointer rounded-lg"
      key={race.date}
      onClick={handleClick}
    >
      <div className="flex flex-row justify-between">
        <p className="text-xl font-semibold text-white max-w-[70%] lg:max-w-full">
          {race.raceName}
        </p>
        <Image
          src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${checkCountries(
            race.Circuit.Location.country
          ).toLowerCase()}.svg`}
          alt={race.Circuit.Location.country}
          width={40}
          height={30}
          style={{ width: "40px", height: "30px" }}
        />
      </div>
      <p className="text-gray-200 ">{race.Circuit.Location.locality}</p>
      <p className="mb-3 font-semibold text-red-600 max-w-[70%] lg:max-w-full">
        {race.Circuit.circuitName}
      </p>
      <p className="text-gray-200">Round {race.round}</p>
      <p className="text-gray-200">
        {race.time ? `${race.date} - ${race.time}` : race.date}
      </p>
    </div>
  );
}
