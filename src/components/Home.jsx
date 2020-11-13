import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import bgHome from "../images/bg_home.jpg";
import { device } from "../styled/device";

const Wrapper = styled.div`
  align-items: flex-start;
  background-color: #cccccc;
  background-image: url(${bgHome});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: center;
  width: 100vw;
  @media ${device.laptop} {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  -webkit-text-stroke: 2px #00ffff;
  font-family: "Hyperviper";
  font-size: 4rem;
  letter-spacing: 0.1rem;
  margin: 0;
  text-align: center;
  text-shadow: 0 0 1rem #00ffff;
  @media ${device.tablet} {
    font-size: 5rem;
  }
  @media ${device.laptop} {
    font-size: 8rem;
  }
  @media ${device.desktop} {
    font-size: 12rem;
  }
`;

const BlurContainer = styled.div`
  align-items: center;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.laptop} {
    align-self: center;
  }
`;

const BlurbOne = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 1.125rem;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff8f9;
  margin-bottom: 0;
  margin-top: 4rem;
  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.desktop} {
    font-size: 4rem;
  }
`;

const BlurbTwo = styled(BlurbOne)`
  margin-top: 1rem;
`;

const Button = styled.button`
  align-self: flex-end;
  border-radius: 8px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
  padding: 8px;
  width: 280px;
  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.laptop} {
    align-self: center;
    margin-bottom: 4rem;
  }
`;

const Home = () => {
  const history = useHistory();
  const { dispatch } = useContext(AppContext);
  const handleLetsPlay = () => {
    dispatch({ type: "reset" });
    dispatch({ type: "getQuestions" });
  };

  return (
    <Wrapper>
      <BlurContainer>
        <BlurbOne>become the best</BlurbOne>
        <BlurbTwo>put your trivia skills to the test!</BlurbTwo>
      </BlurContainer>
      <Title>Viva Las Trivia</Title>
      <Button
        onClick={() => {
          handleLetsPlay();
          history.push(`/trivia`);
        }}
      >
        LETS PLAY
      </Button>
    </Wrapper>
  );
};

export default Home;
