import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import { location } from "./data/forecast.json";

render(
  <React.StrictMode>
    <App location={location} />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
