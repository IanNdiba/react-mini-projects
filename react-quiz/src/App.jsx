import Main from "./components/Main";
import Header from "./Header";
import { useEffect, useReducer } from "react";

const API_URL = "http://localhost:5000";

const initialState = {
  questions: [],

  //controlls 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action Unknown");
  }
};

function App() {
  //controlling state with useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetching data
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await fetch(`${API_URL}/questions`);
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
      }
    };

    getQuestions();
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        <p>1/15</p>
        <p>Questions</p>
      </Main>
    </div>
  );
}

export default App;
