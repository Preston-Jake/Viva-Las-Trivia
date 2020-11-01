import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";
import Answers from "./Answers";
import Question from "./Question";
import React, { useContext } from "react";
import Round from "./DoubleCircleDiv";
import styled from "styled-components";

const Wrapper = styled.div`
height: 100vh;
  width: 100vw;
  background: linear-gradient(
    68.94deg,
    #f97c76 2.55%,
    #fc4387 29.82%,
    #903795 61.53%,
    #651866 93.58%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Trivia = () => {
  console.log("RENDER TRIVIA");
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
        {/* <Round /> */}
        <Question />
        <Answers />
      </Wrapper>
    );
  }
};

export default Trivia;
