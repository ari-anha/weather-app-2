import React from "react";
import PropTypes from "prop-types";

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
        {date}
      </div>
      <div className="temperature" data-testid="temperature-id">
        {temperature}&deg;c
      </div>
      <div className="description" data-testid="description-id">
        {description}
      </div>
      <div className="icon" data-testid="icon-id">
        {icon}
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
