"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Favorite } from "../types/types";

type ContextProps = {
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
  favorites: Favorite[];
  setFavorites: Dispatch<SetStateAction<Favorite[]>>;
};

export const GlobalContext = createContext<ContextProps>({
  year: "",
  setYear: (): string => "",
  favorites: [],
  setFavorites: (): Favorite[] => [],
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [year, setYear] = useState<string>("0");
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  return (
    <GlobalContext.Provider value={{ year, setYear, favorites, setFavorites }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
