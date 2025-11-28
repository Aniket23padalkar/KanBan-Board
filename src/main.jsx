import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import GlobalDataStateContext from "./context/DataContext";

createRoot(document.getElementById("root")).render(
  <GlobalDataStateContext>
    <App />
  </GlobalDataStateContext>
);
