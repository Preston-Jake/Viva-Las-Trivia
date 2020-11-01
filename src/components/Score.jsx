import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";

const decimalToPrecent = (score) => {
  return (score / 10) * 100;
};

const Score = (props) => {
  let history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  let score = state.score;

  
  const handleLetsPlay = () => {
    dispatch({ type: "reset" });
    dispatch({ type: "getQuestions" });
  };

  return (
    <div>
      <div>
        <h1>Scoreboard</h1>
        <h2>{score}/10</h2>
        <h3>Correct {decimalToPrecent(score)}%</h3>
      </div>
      <div>
        <button
          onClick={() => {
            handleLetsPlay();
            history.push(`/trivia`);
          }}
        >
          Play Again
        </button>
        <button
          onClick={() => {
            history.push(`/`);
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Score;
