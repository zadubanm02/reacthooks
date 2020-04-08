import React from "react";

export const WeatherCard = props => {
  return (
    <div className="card">
      <div className="card-title">{props.city}</div>
      <div className="card-text">{props.temperature}</div>
    </div>
  );
};
