import React from "react";

const randomizeAnswers = (incorrect, correct) => {
  let answers = [...incorrect, correct];
  let counter = answers.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = answers[counter];
    answers[counter] = answers[index];
    answers[index] = temp;
  }
  return answers;
};

const Answers = (props) => {
  let randonizedAnswers = randomizeAnswers(props.incorrect, props.correct);

return <div>{randonizedAnswers.map((answer) => <button>{answer}</button>)}</div>;
};

export default Answers;

// button onClick need to know if you selected the right answer and then update your score and then change the question index to the next