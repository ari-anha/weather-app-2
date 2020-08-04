import React from "react";
import ForecastSummary from "./forecast-summary";

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
        />
      ))
    }
  </div>
);

export default ForecastSummaries;
