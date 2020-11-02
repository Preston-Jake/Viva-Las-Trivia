import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AppContext } from "../AppContext";
import { device } from "../styled/device";

const Button = styled.button`
  border: 3px solid #00ffff;
  box-sizing: border-box;
  color: white;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  border-radius: 24px;
  display: block;
  background-color: transparent;
  font-size: 1.5rem;
  margin: 1rem;
  padding: 0.2rem;
  width: 18rem;
  box-shadow: 0px 0px 16px #00ffff;

  @media ${device.laptop} {
    font-size: 2rem;
    width: 24rem;
  }

  ${({ correct, selected }) => {
    if (correct) {
      return `
        border: 3px solid #01FD29;
    box-sizing: border-box;
    box-shadow: 0px 0px 16px #01FD29, 0px 0px 16px #01FD29;
    filter: drop-shadow(0px 0px 16px #01FD29);
    border-radius: 24px;
      `;
    }
    if (selected && !correct) {
      return `
      border: 3px solid #FD015B;
      box-sizing: border-box;
      filter: drop-shadow(0px 0px 16px #FD015B);
      border-radius: 24px;
      box-shadow: 0px 0px 8px #FD015B;
    `;
    }
  }}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  @media ${device.mobileM}{
    margin-bottom: 4rem;
  }
  @media ${device.tablet}{
    margin-bottom: 6rem;
    font-size: 2rem;
  }
  @media ${device.laptop}{
    font-size: 2rem;
    margin-bottom: 10rem;
  }
  @media ${device.desktop}{
    margin-bottom: 12rem;
  }
`;

const Answers = () => {
  const { state, dispatch } = useContext(AppContext);
  const { answered, questionIndex, questions, selected } = state;
  const { answers, correct } = questions[questionIndex];

  const handleAnswerClick = (answer) => {
    dispatch({ type: "answered", correct: answer === correct, selected: answer });
    setTimeout(() => {
      dispatch({ type: "nextQuestion" });
    }, 2000);
  };

  return (
    <Wrapper className={answered ? "answered" : ""}>
      {answers.map((answer, index) => {
        return (
          <Button
            selected={selected === answer && answered}
            correct={answer === correct && answered}
            disabled={answered ? true : ""}
            key={index}
            onClick={() => {handleAnswerClick(answer)}}
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
