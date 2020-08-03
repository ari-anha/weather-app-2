import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => (
  <div className="summary">
    <span className="date">{props.date}</span>
    <span className="temperature">{props.temperature}</span>
    <span className="description">{props.description}</span>
    <span className="icon">{props.icon}</span>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.any.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
};

export default ForecastSummary;
