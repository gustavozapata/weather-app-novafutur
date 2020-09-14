import React from "react";
import Header from "./layout/Header";
import DayCard from "./components/DayCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
    </div>
  );
}

export default App;
