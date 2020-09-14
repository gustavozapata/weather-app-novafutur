import React, { useState, useEffect } from "react";
import { getWeather } from "../services/weather-api";
import ReloadingBar from "../components/ReloadingBar";
import "./styles/Header.css";

export default function Header(props) {
  const [data, setData] = useState(null);
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getWeather("london");
    setData(response.data);
  };

  return (
    <div className="Header">
      <div className="banner">
        <h1>{data && data.name.toUpperCase()}</h1>
        <div className="time">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>
            {hour}:{minute} GMT
          </p>

          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <h2>{data && Math.round(data.main.temp - 273.15)}&deg;</h2>
      </div>
      <ReloadingBar fetchData={props.fetchData} />
    </div>
  );
}
