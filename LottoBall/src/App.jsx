import "./App.css";
import Lottery from "./components/Lottery/Lottery";

function App() {
  return (
    <>
      <Lottery title={"Lotto"} numBalls={6} maxNum={60} />
      <Lottery title={"Powerball"} numBalls={5} maxNum={69} />
    </>
  );
}

export default App;
