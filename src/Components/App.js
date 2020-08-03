import React from "react";
import logo from "../logo.svg";
import PropTypes from "prop-types";
import LocationDetails from "./location-details";
import ForecastSummary from "./forecast-summary";

const App = (props) => (
  <>
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />

    {
      //props.forecasts is an array!!
      props.forecasts.map((eachElement) => (
        <ForecastSummary
          date={eachElement.date}
          temperature={eachElement.temperature.max}
          description={eachElement.description}
          icon={eachElement.icon}
        />
      ))
    }
  </>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
