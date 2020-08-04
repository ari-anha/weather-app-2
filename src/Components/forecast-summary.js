import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  handleForecastSelect,
}) => {
  return (
    <>
      <div className="date" data-testid="date-id">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="temperature" data-testid="temperature-id">
        {temperature}&deg;c
      </div>
      <div className="description" data-testid="description-id">
        {description}
      </div>
      <div className="icon" data-testid="icon-id">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <button value={date} onClick={handleForecastSelect}>
        More Details
      </button>
    </>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.any.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
};

export default ForecastSummary;
