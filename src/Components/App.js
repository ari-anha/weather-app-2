import React, { useState, useEffect } from "react";
import LocationDetails from "./location-details";
import ForecastSummaries from "./forecast-summaries";
import DetailedForecast from "./detailed-forecast";
import axios from "axios";
// import PropTypes from "prop-types";

import "../styles/app.css";

const App = (props) => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://mcr-codes-weather.herokuapp.com/forecast"
      );

      setForecasts(result.data.forecasts);
      setLocation(result.data.location);
    };

    fetchData();
  }, []);

  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />

      {
        // Because we are using actual JS, not just JSX, we have to wrap this
        // block in curly braces.
        selectedForecast && <DetailedForecast forecasts={selectedForecast} />
      }
    </div>
  );
};

// Since App no longer receives any props,
// there is no need to define any prop types.
//
// App.propTypes = {
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,
//   forecasts: PropTypes.array.isRequired,
//   onForecastSelect: PropTypes.any,
// };

export default App;
