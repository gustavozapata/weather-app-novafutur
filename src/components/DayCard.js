import React from "react";
import "./styles/DayCard.css";

export default function DayCard(props) {
  const getDayOfWeek = (dt) => {
    const date = new Date(dt * 1000);
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return days[date.getDay()];
  };
  return (
    <div className="DayCard">
      <div className="day">
        <p>{getDayOfWeek(props.day.dt)}</p>
        <p>{Math.round(props.day.main.temp - 273.15)}&deg;</p>
      </div>
      <div className="description">
        <img
          src={`http://openweathermap.org/img/wn/${props.day.weather[0].icon}.png`}
          alt="Forecast Icon"
        />
        <p>{props.day.weather[0].description.toUpperCase()}</p>
      </div>
    </div>
  );
}
