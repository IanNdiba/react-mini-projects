import styles from "./Rolldice.module.css";
import Die from "../Die/Die";
import { useState } from "react";

const Rolldice = () => {
  //when the button is clicked it should provide a number between 1 and 6
  const handOneRando = Math.floor(Math.random() * 6) + 1;
  const handTwoRando = Math.floor(Math.random() * 6) + 1;

  //useState hook to manage the state of the die
  const [handOne, setHandOne] = useState(1);
  const [handTwo, setHandTwo] = useState(1);
  const [btnState, setBtnState] = useState("Roll");
  const [disabled, setDisabled] = useState(false);
  const [dieAnimate, setDieAnimate] = useState("");
  const onClick = () => {
    //use hook to set the hands value
    setHandOne(handOneRando);
    setHandTwo(handTwoRando);
    setDieAnimate("animate");
    setDisabled(true);

    setBtnState("Rolling...");
    setTimeout(() => {
      setBtnState("Roll");
      setDieAnimate("");
      setDisabled(false);
    }, 800);
  };

  return (
    <div className={styles.Rolldice}>
      <div className="dies">
        <Die value={handOne} className={dieAnimate} />
        <Die value={handTwo} className={dieAnimate} />
      </div>
      <div
        className={`${styles.Button} disabled = ${disabled}`}
        onClick={onClick}
      >
        {btnState}
      </div>
    </div>
  );
};

export default Rolldice;
