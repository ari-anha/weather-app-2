import React from "react";
import DetailedForecastBlock from "./detailed-forecast-block";

// import "../styles/forecast-summaries.css";

const DetailedForecastOnClick = (props) => (
  <div className="detailed-forecast-onclick">
    {
      //props.forecasts is an array!!
      <DetailedForecastBlock
        key={props.forecasts[0].date}
        date={props.forecasts[0].date}
        temperatureMax={props.forecasts[0].temperature.max}
        temperatureMin={props.forecasts[0].temperature.min}
        humidity={props.forecasts[0].humidity}
        windSpeed={props.forecasts[0].wind.speed}
        windDirection={props.forecasts[0].wind.direction}
      />
    }
  </div>
);

export default DetailedForecastOnClick;
