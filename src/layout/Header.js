import React from "react";
import ReloadingBar from "../components/ReloadingBar";
import "./styles/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="banner">
        <h1>LONDON</h1>
        <div className="time">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>18:36 GMT</p>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <h2>12&deg;</h2>
      </div>
      <ReloadingBar />
    </div>
  );
}
