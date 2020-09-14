import React from "react";
import "./styles/DayCard.css";

export default function DayCard() {
  return (
    <div className="DayCard">
      <div className="day">
        <p>TUE</p>
        <p>12&deg;</p>
      </div>
      <div className="description">
        <img
          src="http://openweathermap.org/img/wn/11d.png"
          alt="Forecast Icon"
        />
        <p>A BIT CLOUDY</p>
      </div>
    </div>
  );
}
