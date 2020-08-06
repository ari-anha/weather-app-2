import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const DetailedForecast = (props) => {
  const { date, temperature, humidity, wind } = props.forecasts[0];
  return (
    <div className="detailed-forecast">
      <div className="date">{moment(date).format("ddd Do MMM")}</div>
      <div className="temperatureMax">
        Max Temperature: {temperature.max}&deg;c
      </div>
      <div className="temperatureMin">
        Min Temperature: {temperature.min}&deg;c
      </div>
      <div className="humidity">Humidity: {humidity}%</div>
      <div className="wind">
        Wind: {wind.speed}mph {wind.direction}
      </div>
      <i class="wi wi-alien"></i>
    </div>
  );
};

DetailedForecast.propTypes = {
  forecasts: PropTypes.object.isRequired,
};

export default DetailedForecast;