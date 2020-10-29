import React, { useState, useEffect } from "react";
import Answers from "./Answers";
import Question from "./Question";
import Round from "./Round";

const Trivia = (props) => {

  let questionIndex = props.questionIndex

  return (
    <div>
      <Round round={questionIndex}/>
      <Question question={props.round[questionIndex].question} />
      <Answers incorrect={props.round[questionIndex].incorrect} correct={props.round[questionIndex].correct} answerClick={props.answerClick} buttonDisabled={props.buttonDisabled}/>
    </div>
  );
};

export default Trivia;
