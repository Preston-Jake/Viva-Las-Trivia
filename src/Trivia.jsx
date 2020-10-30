import React from "react";
import { Redirect } from "react-router-dom";
import Answers from "./Answers";
import Question from "./Question";
import DoubleCircleDiv from "./DoubleCircleDiv";

const Trivia = (props) => {
  let round = props.round;
  let questionIndex = props.questionIndex;
  let countDown = props.nextQuestionTimerSeconds
  if (!round.length) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <DoubleCircleDiv input={questionIndex + 1} />
        <DoubleCircleDiv input={countDown} />
        <Question question={round[questionIndex].question} />
        <Answers
          randomizedAnswers={props.randomizedAnswers}
          incorrect={round[questionIndex].incorrect}
          correct={round[questionIndex].correct}
          answerClick={props.answerClick}
          buttonDisabled={props.buttonDisabled}
          stylesActive={props.stylesActive}
        />
      </div>
    );
  }
};

export default Trivia;
