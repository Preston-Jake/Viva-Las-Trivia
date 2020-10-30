import React from "react";
import { useHistory } from "react-router-dom";

const Score = (props) => {
  let score = props.score;
  let history = useHistory()
  const decimalToPrecent = (score) => {
    return (score / 10) * 100;
  };
  return (
    <div>
      <div>
        <h1>Scoreboard</h1>
        <h2>{score}/10</h2>
        <h3>Correct {decimalToPrecent(score)}%</h3>
      </div>
      <div>
        <button onClick={()=>{props.letsPlay(history)}}>Play Again</button>
        <button onClick={()=>{history.push(`/`)}}>Home</button>
      </div>
    </div>
  );
};

export default Score;
