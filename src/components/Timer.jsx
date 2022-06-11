import React from "react";
import "./Timer.css";

function Timer() {
  return (
    <div className="timer">
      <h1 className="timer-title">It has been...</h1>
      <div className="timer-container">
        <ul className="timer-time">
          <li>324</li>
          <li>13</li>
          <li>18</li>
        </ul>
        <ul className="timer-words">
          <li>Sols</li>
          <li>Hours</li>
          <li>Minutes</li>
        </ul>
      </div>
    </div>
  );
}
export default Timer;
