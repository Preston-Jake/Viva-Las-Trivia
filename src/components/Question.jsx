import { AppContext } from "../AppContext";
import React, { useContext } from "react";
import styled from "styled-components";

const Title = styled.h1`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 65px;
`

const Question = (props) => {
	const { state } = useContext(AppContext);
	const {questions, questionIndex} = state
  const question = questions[questionIndex].question;
  return (
    <div>
      <Title>{question}</Title>
    </div>
  );
};

Question.propTypes = {};

export default Question;
