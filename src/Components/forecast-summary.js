import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import "../styles/forecast-summary.css";

const ForecastSummary = (props) => {
  return (
    <div className="forecast-summary">
      <div className="date" data-testid="date-id">
        {moment(props.date).format("ddd Do MMM")}
      </div>

      <div className="weatherIcon">
        <WeatherIcon
          className="icon"
          name="owm"
          iconId={props.icon}
          data-testid="icon-id"
        />
      </div>

      <div className="temperature" data-testid="temperature-id">
        {props.temperature}&deg;c
      </div>

      <div className="description" data-testid="description-id">
        {props.description}
      </div>

      <button onClick={() => props.onSelect(props.date)}>More details</button>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  onSelect: PropTypes.any,
};

export default ForecastSummary;
