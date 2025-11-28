import { createContext, useState } from "react";

export const GlobalInputContext = createContext(null);

export default function GlobalInputStateContext({ children }) {
  const [inputData, setInputData] = useState("");
  const [search, setSearch] = useState("");
  return (
    <GlobalInputContext.Provider
      value={{ inputData, setInputData, search, setSearch }}
    >
      {children}
    </GlobalInputContext.Provider>
  );
}
