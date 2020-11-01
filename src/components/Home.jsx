import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";

const Home = () => {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);
  const handleLetsPlay = () => {
    dispatch({ type: "reset" });
    dispatch({ type: "getQuestions" });
  };

  return (
    <div>
      <div>
        <h3>BECOME THE BEST</h3>
        <h1>Viva Las Trivia</h1>
        <h3>PUT YOUR TRIVIA SKILLS TO THE TEST!</h3>
      </div>
      <div>
        <button
          onClick={() => {
            handleLetsPlay();
            history.push(`/trivia`);
          }}
        >
          Let's Play
        </button>
      </div>
    </div>
  );
};

export default Home;
