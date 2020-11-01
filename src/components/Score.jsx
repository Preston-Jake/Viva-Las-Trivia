import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";

const decimalToPrecent = (score) => {
  return (score / 10) * 100;
};

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
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin-top: 200px;
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Yellowtail", cursive;
  font-size: 144px;
  letter-spacing: 10%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 1.25rem;
  color: #e1ffff;
  text-shadow: 0px 0px 16px #00ffff;
`;

const Subtitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5rem;

  color: #fff8f9;
`;

const Button = styled.button`
  padding: 8px 72px;
  background: rgba(0, 0, 0, 0.9);
  border: 3px solid #f9ff0c;
  box-sizing: border-box;
  box-shadow: 0px 0px 16px #f9ff0c;
  border-radius: 24px;
  font-family: "Yellowtail", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 49px;
  margin: 0 4rem;
  /* identical to box height */

  color: #f9ff0c;

  text-shadow: 0px 0px 4px #f9ff0c;
`;

const Score = (props) => {
  let history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  let score = state.score;

  
  const handleLetsPlay = () => {
    dispatch({ type: "reset" });
    dispatch({ type: "getQuestions" });
  };

  return (
    <Wrapper>
      <TitleContainer>
        <Title>Scoreboard</Title>
        <Subtitle>{score}/10</Subtitle>
        <Subtitle>Correct {decimalToPrecent(score)}%</Subtitle>
      </TitleContainer>
      <ButtonContainer>
        <Button
          onClick={() => {
            handleLetsPlay();
            history.push(`/trivia`);
          }}
        >
          Play Again
        </Button>
        <Button
          onClick={() => {
            history.push(`/`);
          }}
        >
          Home
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Score;
