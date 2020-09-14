import React, { useState, useEffect } from "react";
import "./styles/ReloadingBar.css";

export default function ReloadingBar(props) {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    timer();
  }, []);

  useEffect(() => {
    if (seconds < 0) {
      setSeconds(60);
      props.fetchData();
      props.fetchWeather();
    }
  }, [seconds]);

  const timer = () => {
    setInterval(countDown, 1000);
  };

  const countDown = () => {
    setSeconds((second) => second - 1);
  };

  return (
    <div className="ReloadingBar">
      <p>Reloading in {seconds}s</p>
      <div className="container">
        <div className={`bar ${seconds === 60 ? "" : "bar-move"}`}></div>
      </div>
    </div>
  );
}
