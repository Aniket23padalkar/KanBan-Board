import { createContext, useEffect, useState } from "react";

export const GlobalDataContext = createContext(null);

export default function GlobalDataStateContext({ children }) {
  const initialColumn = [
    {
      id: crypto.randomUUID(),
      title: "Active",
      tasks: [],
    },
    {
      id: crypto.randomUUID(),
      title: "InProgress",
      tasks: [],
    },
    {
      id: crypto.randomUUID(),
      title: "Completed",
      tasks: [],
    },
  ];
  const [taskData, setTaskData] = useState(() => {
    const stored = localStorage.getItem("taskData");
    return stored ? JSON.parse(stored) : initialColumn;
  });

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(taskData));
  }, [taskData]);

  return (
    <GlobalDataContext.Provider value={{ taskData, setTaskData }}>
      {children}
    </GlobalDataContext.Provider>
  );
}
