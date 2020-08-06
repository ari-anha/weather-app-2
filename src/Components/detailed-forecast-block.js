import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const DetailedForecastBlock = ({
  date,
  temperatureMax,
  temperatureMin,
  humidity,
  windSpeed,
  windDirection,
}) => {
  return (
    <div className="detailed-forecast">
      <div data-testid="date-id">{moment(date).format("ddd Do MMM")}</div>
      <div className="temperatureMax" data-testid="temperatureMax-id">
        Max Temperature: {temperatureMax}&deg;c
      </div>
      <div className="temperatureMin" data-testid="temperatureMin-id">
        Min Temperature: {temperatureMin}&deg;c
      </div>
      <div className="humidity" data-testid="humidity-id">
        Humidity: {humidity}%
      </div>
      <div className="wind" data-testid="wind-id">
        Wind: {windSpeed}mph {windDirection}
        <i class="wi wi-alien"></i>
      </div>
    </div>
  );
};

DetailedForecastBlock.propTypes = {
  date: PropTypes.number.isRequired,
  temperatureMax: PropTypes.number.isRequired,
  temperatureMin: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.string.isRequired,
};

export default DetailedForecastBlock;
