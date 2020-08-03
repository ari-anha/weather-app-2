import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import { location, forecasts } from "./data/forecast.json";

render(
  <React.StrictMode>
    <App location={location} forecasts={forecasts} />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
