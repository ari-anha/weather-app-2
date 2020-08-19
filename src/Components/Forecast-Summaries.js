import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./Forecast-Summary";

import "../styles/forecast-summaries.css";

const ForecastSummaries = (props) => (
  <div className="forecast-summaries">
    {
      //props.forecasts is an array!!
      props.forecasts.map((eachElement) => (
        <ForecastSummary
          key={eachElement.date}
          date={eachElement.date}
          description={eachElement.description}
          icon={eachElement.icon}
          temperature={eachElement.temperature.max}
          onSelect={props.onForecastSelect}
        />
      ))
    }
  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.array.isRequired,
  onSelect: PropTypes.any,
};

export default ForecastSummaries;
