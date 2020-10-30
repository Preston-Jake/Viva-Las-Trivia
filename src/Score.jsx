import React from "react";

const Score = (props) => {
  let score = props.score;
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
        <button>Play Again</button>
      </div>
    </div>
  );
};

export default Score;
