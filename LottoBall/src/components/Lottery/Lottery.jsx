/* eslint-disable */
import Ball from "../Ball/Ball";
import "./Lottery.css";
import { useState } from "react";

const Lottery = ({ title = "Lotto", numBalls = 6, maxNum = 60 }) => {
  const [ballValue, setBallValue] = useState(0);

  //generate random number
  const onClick = (args) => {
    setBallValue(Math.floor(Math.random() * maxNum) + 1);
  };

  return (
    <div className="Lottery">
      <h1 className="title">{title}</h1>
      <Ball randoNo={ballValue} numBalls={numBalls} maxNum={maxNum} />
      <button className="btn" onClick={onClick}>
        Generate
      </button>
    </div>
  );
};

export default Lottery;
