import React from "react";
import { Redirect } from "react-router-dom";
import Answers from "./Answers";
import Question from "./Question";
import Round from "./Round";

const Trivia = (props) => {
  let round = props.round;
  let questionIndex = props.questionIndex;
  if (!round.length) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <Round round={questionIndex} />
        <Question question={round[questionIndex].question} />
        <Answers
          randomizedAnswers={props.randomizedAnswers}
          incorrect={round[questionIndex].incorrect}
          correct={round[questionIndex].correct}
          answerClick={props.answerClick}
          buttonDisabled={props.buttonDisabled}
        />
      </div>
    );
  }
};

export default Trivia;
