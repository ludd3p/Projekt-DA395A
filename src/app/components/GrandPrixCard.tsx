import { checkCountries } from "@/utils/checkCountries";
import Image from "next/image";
import { Race } from "../types/types";

export default function GrandPrixCard({ race }: { race: Race }) {
  return (
    <div className="flex" key={race.date}>
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
}
