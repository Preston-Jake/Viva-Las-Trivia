import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
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
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [nextQuestionTimerIsActive, setNextQuestionTimerIsActive] = useState(
    false
  );
  const [nextQuestionTimerSeconds, setnextQuestionTimerSeconds] = useState(3);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [randomizedAnswers, setRandomizedAnswers] = useState([]);
  const [round, setRound] = useState([]);
  const [score, setScore] = useState(0);
  const [isNewGame, setIsNewGame] = useState(true);
  const [isGameOver, setGameOver] = useState(false);

  const handleAnswerClick = (answer, history) => {
    setButtonDisabled(true);
    checkAnswerAndUpdateScore(answer);
    setNextQuestionTimerIsActive(true);
    if(isGameOver === true){
      history.push(`/scoreboard`);
    }
  };

  //handleClickPlay if !round.length fire off function to set up round data

  const checkAnswer = (answer) => {
    let correct = round[questionIndex].correct;
    let result = answer === correct ? true : false;
    return result;
  };

  const updateScore = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
  };

  const checkAnswerAndUpdateScore = (answer) => {
    let isCorrect = checkAnswer(answer);
    updateScore(isCorrect);
  };

  const shuffleAnswers = (incorrect, correct) => {
    let answers = [...incorrect, correct];
    let counter = answers.length;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);

      counter--;

      let temp = answers[counter];
      answers[counter] = answers[index];
      answers[index] = temp;
    }
    return answers;
  };

  useEffect(() => {
    if (isNewGame) {
      let roundOfTrivia = createRoundOfTrivia(data, 10);
      setRound(roundOfTrivia);
      setIsNewGame(false);
    }

    if (round.length && nextQuestionTimerIsActive === false && isGameOver === false) {
      let incorrectAnswers = round[questionIndex].incorrect;
      let correctAnswer = round[questionIndex].correct;
      let randomizedAnswers = shuffleAnswers(incorrectAnswers, correctAnswer);
      setRandomizedAnswers(randomizedAnswers);
    }
    
    let interval = null;

    if (nextQuestionTimerSeconds === 0) {
      setNextQuestionTimerIsActive(false);
      clearInterval(interval);
      setnextQuestionTimerSeconds(3);
      setQuestionIndex(questionIndex + 1);
      setButtonDisabled(false);
    }

    
    if (nextQuestionTimerIsActive && nextQuestionTimerSeconds > 0) {
      interval = interval = setInterval(() => {
        setnextQuestionTimerSeconds(nextQuestionTimerSeconds - 1);
      }, 100);
    }

    if (!nextQuestionTimerIsActive) {
      clearInterval(interval);
    }

    if(round.length && round.length - 1 === questionIndex){
      setGameOver(true)
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    nextQuestionTimerIsActive,
    nextQuestionTimerSeconds,
    questionIndex,
    round,
  ]);

  console.log("APP RENDERED");
  console.log("ROUND:", round);
  console.log("GAMEOVER",isGameOver);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/trivia">
          <Trivia
            answerClick={handleAnswerClick}
            buttonDisabled={buttonDisabled}
            isGameOver={isGameOver}
            questionIndex={questionIndex}
            randomizedAnswers={randomizedAnswers}
            round={round}
          />
        </Route>
        <Route path="/scoreboard">
          <Score score={score} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
