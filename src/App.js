import React, { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Trivia from "./Trivia";
import Score from "./Score";
import data from "./data/Apprentice_TandemFor400_Data.json";

const createRoundOfTrivia = (array, num) => {
  let round = [];
  let randomNumbers = [];

  while (num > randomNumbers.length) {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
      round.push(array[randomNumber]);
    }
  }
  return round;
};

const App = () => {
  const [round, setRound] = useState([]);
  const [score, setScore] = useState(0);
  const [questionIndex, setquestionIndex] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState("false")
  
  useEffect(() => {
    setRound(createRoundOfTrivia(data, 10));
    return () => {
      setRound([]);
    };
  }, []);

  const handleAnswerClick = (answer) => {
    // check if correct
    console.log("BANG!!", score)

    setButtonDisabled('')

    let correct = round[questionIndex].correct

    if(answer.answer === correct){
      setScore(score + 1)
    }
    // if(answer === correct){
      // update score 
    // }
    // timer 5s => end fire off  new indexed question 
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/trivia">
          <Trivia round={round} questionIndex={questionIndex} answerClick={handleAnswerClick} buttonDisabled={buttonDisabled}/>
        </Route>
        <Route path="/scoreboard">
          <Score socre={score}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
