import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./location-details";
import ForecastSummaries from "./forecast-summaries";
import DetailedForecastOnClick from "./detailed-forecast-onclick";

import "../styles/app.css";

const App = (jsonfile) => (
  <div className="forecast">
    <LocationDetails
      city={jsonfile.location.city}
      country={jsonfile.location.country}
    />
    <ForecastSummaries forecasts={jsonfile.forecasts} />
    <DetailedForecastOnClick forecasts={jsonfile.forecasts} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
