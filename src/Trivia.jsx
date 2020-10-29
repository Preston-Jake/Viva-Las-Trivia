import React, { useState, useEffect } from "react";
import Answers from "./Answers";
import Question from "./Question";
import Round from "./Round";

const Trivia = (props) => {

  console.log(props)
  const [questionIndex, setquestionIndex] = useState(0);


  return (
    <div>
      <Round round={questionIndex}/>
      <Question question={props.round[questionIndex].question}/>
      <Answers incorrect={props.round[questionIndex].incorrect} correct={props.round[questionIndex].correct}/>
    </div>
  );
};

export default Trivia;
