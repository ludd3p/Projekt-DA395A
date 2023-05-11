"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ContextProps = {
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
  favorites: [];
  setFavorites: Dispatch<SetStateAction<[]>>;
};

export const GlobalContext = createContext<ContextProps>({
  year: "",
  setYear: (): string => "",
  favorites: [],
  setFavorites: (): [] => [],
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [year, setYear] = useState<string>("0");
  const [favorites, setFavorites] = useState<[]>([]);

  return (
    <GlobalContext.Provider value={{ year, setYear, favorites, setFavorites }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
