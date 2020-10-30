import React from "react";
import { useHistory } from "react-router-dom";

const Answers = (props) => {
  let randomizedAnswers = props.randomizedAnswers;
  const history = useHistory();
  return (
    <div>
      {randomizedAnswers.map((answer, index) => (
        <button
          disabled={props.buttonDisabled ? "true" : ""}
          key={index}
          onClick={() => {
            props.answerClick(answer, history);
          }}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;

// button onClick need to know if you selected the right answer and then update your score and then change the question index to the next
