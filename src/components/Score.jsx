import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import { device } from "../styled/device";

const decimalToPrecent = (score) => {
  return (score / 10) * 100;
};

const Wrapper = styled.div`
  align-items: center;
  background: linear-gradient(
    68.94deg,
    #f97c76 2.55%,
    #fc4387 29.82%,
    #903795 61.53%,
    #651866 93.58%
  );
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  width: 100vw;
  @media ${device.laptop}{
    justify-content: space-evenly;
  }
`;

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  -webkit-text-stroke: 1px #00ffff;
  align-items: center;
  display: flex;
  font-family: "Hyperviper";
  font-size: 2rem;
  justify-content: center;
  letter-spacing: 0.2rem;
  margin: 0 1rem;
  text-align: center;
  text-shadow: 0 0 1rem #00ffff;
  @media ${device.tablet}{
    font-size: 4rem;
  }
`;

const StyledScore = styled.h2`
  align-items: center;
  color: #fff8f9;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 4rem;
  text-align: center;
  text-transform: uppercase;
  @media ${device.tablet}{
    font-size: 4rem;
  }
`;

const Percent = styled.h2`
  align-items: center;
  color: #fff8f9;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 4rem;
  text-align: center;
  text-transform: uppercase;
  @media ${device.tablet}{
    font-size: 2rem;
  }
`;

const Button = styled.button`
  font-family: "Open Sans", sans-serif;
  padding: 8px;
  width: 280px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
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
        <StyledScore>{score}/10</StyledScore>
        <Percent>Correct {decimalToPrecent(score)}%</Percent>
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
