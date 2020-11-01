import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AppContext } from "../AppContext";
const Button = styled.button`
  border: 3px solid #00ffff;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 16px #00ffff);
  border-radius: 24px;
  display: block;
  background-color: transparent;
  font-size: 1.5rem;
  margin: 1rem;
  padding: 0.25rem 1rem;

  ${({ correct }) =>
    correct &&
    `
    border: 3px solid #01FD29;
    box-sizing: border-box;
    filter: drop-shadow(0px 0px 16px #01FD29);
    border-radius: 24px;
  `}
  ${({ incorrect }) =>
    incorrect &&
    `
    border: 3px solid #FD015B;
    box-sizing: border-box;
    filter: drop-shadow(0px 0px 16px #FD015B);
    border-radius: 24px;
  `}
`;

const Wrapper = styled.div`
  display: flex;
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
  console.log(state);
  const { answered, questionIndex, questions } = state;
  const answers = questions[questionIndex].answers;
  const correct = questions[questionIndex].correct;
  const incorrect = questions[questionIndex].incorrect;

  console.log(incorrect)

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
            incorrect={incorrect.includes(answer) && answered}
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
