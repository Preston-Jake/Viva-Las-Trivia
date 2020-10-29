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
  console.log("Rendering APP")
  const [round, setRound] = useState([]);

  useEffect(() => {
    setRound(createRoundOfTrivia(data, 10))
    return () => {
      setRound([]);
    };
  }, []);
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/trivia">
          <Trivia round={round}/>
        </Route>
        <Route path="/scoreboard">
          <Score />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
