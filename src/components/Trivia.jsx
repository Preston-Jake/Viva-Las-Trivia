import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";
import Answers from "./Answers";
import Question from "./Question";
import React, { useContext } from "react";
import Round from "./DoubleCircleDiv";

const Trivia = () => {
  console.log("RENDER TRIVIA");
  const history = useHistory();
  const { state } = useContext(AppContext);
  const { questions, questionIndex } = state;

  if (!questions.length) {
    history.push(`/`);
    return null;
  } else if (questionIndex === questions.length) {
    history.push(`/scoreboard`);
    return null;
  } else {
    return (
      <div>
        {/* <Round /> */}
        <Question />
        <Answers />
      </div>
    );
  }
};

export default Trivia;
