import React, { useState, useEffect } from "react";
import { getForecast } from "./services/weather-api";
import Header from "./layout/Header";
import DayCard from "./components/DayCard";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getForecast("london");
    setData(response);
  };

  return (
    <div className="App">
      <Header fetchData={fetchData} />
      {data && data.map((el, i) => <DayCard day={el} key={i} />)}
    </div>
  );
}

export default App;
