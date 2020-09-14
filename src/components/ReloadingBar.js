import React, { useState, useEffect } from "react";
import "./styles/ReloadingBar.css";

export default function ReloadingBar() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    timer();
  }, []);

  useEffect(() => {
    if (seconds < 0) {
      setSeconds(10);
    }
  }, [seconds]);

  const timer = () => {
    setInterval(countDown, 1000);
  };

  const countDown = () => {
    setSeconds((second) => second - 1);
  };

  //seconds = 60
  //timer(every 1s => seconds--)
  //when seconds < 0 => fetch data and setSeconds(60)

  return (
    <div className="ReloadingBar">
      <p>Reloading in {seconds}s</p>
      <div className="container">
        <div className={`bar ${seconds === 10 ? "" : "bar-move"}`}></div>
      </div>
    </div>
  );
}
