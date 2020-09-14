import React from "react";
import "./styles/DayCard.css";

export default function DayCard() {
  return (
    <div className="DayCard">
      <div>
        <p>MON</p>
        <p>12&deg;</p>
      </div>
      <div>
        <img
          src="http://openweathermap.org/img/wn/10d.png"
          alt="Forecast Icon"
        />
        <p>A bit cloudy</p>
      </div>
    </div>
  );
}
