import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/detailed-forecast.css";

const DetailedForecast = (props) => {
  const { date, temperature, humidity, wind } = props.forecasts;
  return (
    <div className="detailed-forecast">
      <div className="detailedDate">{moment(date).format("ddd Do MMM")}</div>
      <div className="temperatureMax">
        Max Temperature: {temperature.max}&deg;c
      </div>
      <div className="temperatureMin">
        Min Temperature: {temperature.min}&deg;c
      </div>
      <div className="humidity">Humidity: {humidity}%</div>
      <div className="wind">
        Wind: {wind.speed}mph & Direction {wind.direction}
      </div>
    </div>
  );
};

DetailedForecast.defaultProps = {
  forecasts: undefined,
};

DetailedForecast.propTypes = {
  forecasts: PropTypes.object,
};

export default DetailedForecast;
