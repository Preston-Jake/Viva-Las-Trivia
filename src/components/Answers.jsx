import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AppContext } from "../AppContext";
const Button = styled.button`
  display: block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;

  ${({ correct }) =>
    correct &&
    `
  background:green;
  `}
  ${({ incorrect }) =>
    incorrect &&
    `
  background:red;
  `}
`;

const Wrapper = styled.div`
  &.answered {
    btn {
      background: red;
      &.correct {
        background: green;
      }
    }
  }
`;

const Answers = () => {
  console.log("RENDER ANSWERS");
  const { state, dispatch } = useContext(AppContext);
  console.log(state)
  const { answered, questionIndex, questions } = state;
  const answers = questions[questionIndex].answers;
  const correct = questions[questionIndex].correct;

  let handleAnswerClick = (answer) => {
    // not incrementing score evereything seem right in context and here????
    // this might need to be in useEffect?? ... i guess but idk
    if (answer === correct) {
      dispatch({ tpye: "incrementScore" });
    }
    dispatch({ type: "answered" });
    setTimeout(() => {
      dispatch({ type: "nextQuestion" });
    }, 2000);
  };

  return (
    <Wrapper className={answered ? "answered" : ""}>
      {answers.map((answer, index) => {
        return (
          <Button
            correct={answer === correct && answered}
            disabled={answered ? true : ""}
            key={index}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </Button>
        );
      })}
    </Wrapper>
  );
};

Answers.propTypes = {
  handleAnswerClick: PropTypes.func,
  buttonDisabled: PropTypes.bool,
  correct: PropTypes.string,
  randomizedAnswers: PropTypes.array,
  stylesActive: PropTypes.bool,
};

export default Answers;

// button onClick need to know if you selected the right answer and then update your score and then change the question index to the next
