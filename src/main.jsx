import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import GlobalDataStateContext from "./context/DataContext";
import GlobalInputStateContext from "./context/InputDataContext";

createRoot(document.getElementById("root")).render(
  <GlobalDataStateContext>
    <GlobalInputStateContext>
      <App />
    </GlobalInputStateContext>
  </GlobalDataStateContext>
);
