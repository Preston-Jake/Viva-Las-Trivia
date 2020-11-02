import { AppContext } from "../AppContext";
import React, { useContext } from "react";
import styled from "styled-components";
import { device } from "../styled/device";

const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.75rem;
  color: white;
  margin: 2rem 1rem 0;
  border: 3px solid #ffd600;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0px 0px 16px #FFD600, 0px 0px 16px #FFD600;
  
  @media ${device.mobileM}{
    margin-top: 4rem;
  }
  @media ${device.tablet}{
    margin-top: 6rem;
    font-size: 2rem;
  }
  @media ${device.laptop}{
    font-size: 2rem;
    margin-top: 10rem;
  }
  @media ${device.desktop}{
    margin-top: 12rem;
  }
`;

const Question = (props) => {
  const { state } = useContext(AppContext);
  const { questions, questionIndex } = state;
  const question = questions[questionIndex].question;
  return (
    <div>
      <Title>{question}</Title>
    </div>
  );
};

Question.propTypes = {};

export default Question;
