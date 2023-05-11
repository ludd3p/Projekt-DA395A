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
};

export const GlobalContext = createContext<ContextProps>({
  year: "",
  setYear: (): string => "",
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [year, setYear] = useState<string>("0");

  return (
    <GlobalContext.Provider value={{ year, setYear }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
