import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";
import Answers from "./Answers";
import bgTrivia from "../images/trivia_bg.jpg";
import Question from "./Question";
import React, { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  background-color: #000;
  background-image: url(${bgTrivia});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 100vw;
`;

const Trivia = () => {
  const history = useHistory();
  const { state } = useContext(AppContext);
  const { questions, questionIndex } = state;

  if (!questions.length) {
    history.push(`/`);
    return null;
  } else if (questionIndex === questions.length) {
    history.push(`/scoreboard`);
    return null;
  } else {
    return (
      <Wrapper>
        <Question />
        <Answers />
      </Wrapper>
    );
  }
};

export default Trivia;
