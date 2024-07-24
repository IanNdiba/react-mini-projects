import styles from "./Ball.module.css";

const Ball = ({ numBalls, maxNum }) => {
  const balls = Array.from(
    { length: numBalls },
    () => Math.floor(Math.random() * maxNum) + 1
  );

  console.log(balls);
  console.log(typeof balls);

  return (
    <div className={styles.container}>
      {balls.map((ball) => (
        <div className={styles.Ball} key={ball}>
          <div className="ball">{ball}</div>
        </div>
      ))}
    </div>
  );
};

export default Ball;

//  <div className={styles.Ball}>
//    <div className="ball">{randoNo}</div>
//  </div>;
