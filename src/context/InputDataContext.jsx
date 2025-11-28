import { createContext, useState } from "react";

export const GlobalInputContext = createContext(null);

export default function GlobalInputStateContext({ children }) {
  const [inputData, setInputData] = useState("");
  return (
    <GlobalInputContext.Provider value={{ inputData, setInputData }}>
      {children}
    </GlobalInputContext.Provider>
  );
}
