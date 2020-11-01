import { AppContext } from "../AppContext";
import React, { useContext } from "react";

const Question = (props) => {
	const { state } = useContext(AppContext);
	const {questions, questionIndex} = state
  const question = questions[questionIndex].question;
  return (
    <div>
      <h2>{question}</h2>
    </div>
  );
};

Question.propTypes = {};

export default Question;
