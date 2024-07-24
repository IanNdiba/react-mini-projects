// import classNames from "classnames";
import "./Die.css";
// import { useState } from "react";

const die = {
  one: (
    <span style={{ color: "blueviolet", fontSize: "8rem" }}>
      <i className="fas fa-dice-one"></i>
    </span>
  ),
  two: (
    <span style={{ color: "blueviolet", fontSize: "8rem" }}>
      <i className="fas fa-dice-two"></i>
    </span>
  ),
  three: (
    <span style={{ color: "blueviolet", fontSize: "8rem" }}>
      <i className="fas fa-dice-three"></i>
    </span>
  ),
  four: (
    <span style={{ color: "blueviolet", fontSize: "8rem" }}>
      <i className="fas fa-dice-four"></i>
    </span>
  ),
  five: (
    <span style={{ color: "blueviolet", fontSize: "8rem" }}>
      <i className="fas fa-dice-five"></i>
    </span>
  ),
  six: (
    <span style={{ color: "blueviolet", fontSize: "8rem" }}>
      <i className="fas fa-dice-six"></i>
    </span>
  ),
};

const Die = (props) => {
  //create a function that takes in the value and concats to die object
  const concat = (args) => {
    if (args === 1) {
      return die.one;
    } else if (args === 2) {
      return die.two;
    } else if (args === 3) {
      return die.three;
    } else if (args === 4) {
      return die.four;
    } else if (args === 5) {
      return die.five;
    } else if (args === 6) {
      return die.six;
    }
  };

  return <div className={`Die ${props.className}`}>{concat(props.value)}</div>;
};

export default Die;
