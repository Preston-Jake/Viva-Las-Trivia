import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;

  ${({correct}) => correct && `
  background:green;
  `}
  ${({incorrect}) => incorrect && `
  background:red;
  `}
`;

const Answers = (props) => {
  let randomizedAnswers = props.randomizedAnswers;
  const history = useHistory();
  let correct = props.correct;
  let stylesActive = props.stylesActive;
  console.log(stylesActive)
  return (
    <div>
      {randomizedAnswers.map((answer, index) => {
        // if answer = correct then and styles is active change the style to correct btn style else btn incorrect style
        if (answer === correct) {
          return (
            <Button
              correct={stylesActive}
              disabled={props.buttonDisabled ? true : ""}
              key={index}
              onClick={() => {
                props.answerClick(answer, history);
              }}
            >
              {answer}
            </Button>
          );
        } else {
          return (
            <Button
              incorrect={stylesActive}
              disabled={props.buttonDisabled ? true : ""}
              key={index}
              onClick={() => {
                props.answerClick(answer, history);
              }}
            >
              {answer}
            </Button>
          );
        }
      })}
    </div>
  );
};

export default Answers;

// button onClick need to know if you selected the right answer and then update your score and then change the question index to the next
