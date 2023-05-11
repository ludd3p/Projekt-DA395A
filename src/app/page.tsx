"use client";

import { checkCountries } from "@/utils/checkCountries";
import Image from "next/image";
import { useState } from "react";
import { Race } from "./types/types";

export default function Home() {
  const [races, setRaces] = useState<Race[]>([]);

  return <div className="container mx-auto"></div>;
}
