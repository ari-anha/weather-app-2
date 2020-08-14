import React, { useState, useEffect } from "react";
import LocationDetails from "./location-details";
import SearchForm from "./search-form";
import ForecastSummaries from "./forecast-summaries";
import DetailedForecast from "./detailed-forecast";
import axios from "axios";
// import PropTypes from "prop-types";

import "../styles/app.css";

const App = (props) => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://mcr-codes-weather.herokuapp.com/forecast")
        .then((response) => {
          setForecasts(response.data.forecasts);
          setLocation(response.data.location);
        })
        .catch((error) => {
          // Response status codes will only be 404 or 500
          if (error.response.status === 404) {
            throw new Error("Page not found.");
          } else if (error.response.status === 500) {
            throw new Error("Server error. Please try again later.");
          } else {
            // client never received a response, or request never left,
            // basically anything else.
            console.log(error.message);
            throw new Error("Whoops, something has gone wrong...");
          }
        });
    }

    fetchData();
  }, []);

  const findCity = (e) => {
    e.preventDefault();
    async function fetchData() {
      await axios
        .get(
          `https://mcr-codes-weather.herokuapp.com/forecast?city=${searchText}`
        )
        .then((response) => {
          setForecasts(response.data.forecasts);
          setLocation(response.data.location);
        })
        .catch((error) => {
          // Response status codes will only be 404 or 500
          if (error.response.status === 404) {
            alert("This city cannot be found. Please try a different city.");
          } else if (error.response.status === 500) {
            throw new Error("Server error. Please try again later.");
          } else {
            // client never received a response, or request never left,
            // basically anything else.
            console.log(error.message);
            throw new Error("Whoops, something has gone wrong...");
          }
        });
    }
    fetchData();
    setSearchText("");
  };
  // console.log(searchText);
  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm
        findCity={findCity}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />

      {
        // Because we are using actual JS, not just JSX, we have to wrap this
        // block in curly brackets.
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
