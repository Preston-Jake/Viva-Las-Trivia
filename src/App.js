import React, { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Trivia from "./Trivia";
import Score from "./Score";
import data from "./data/Apprentice_TandemFor400_Data.json";

const intialState = {
  buttonDisabled: false,
  nextQuestionTimerIsActive: false,
  nextQuestionTimerSeconds: 3,
  questionIndex: 0,
  randomizedAnswers: [],
  round: [],
  score: 0,
  stylesActive: false,
};

const App = () => {
  const [buttonDisabled, setButtonDisabled] = useState(
    intialState.buttonDisabled
  );
  const [nextQuestionTimerIsActive, setNextQuestionTimerIsActive] = useState(
    intialState.nextQuestionTimerIsActive
  );
  const [nextQuestionTimerSeconds, setnextQuestionTimerSeconds] = useState(
    intialState.nextQuestionTimerSeconds
  );
  const [questionIndex, setQuestionIndex] = useState(intialState.questionIndex);
  const [randomizedAnswers, setRandomizedAnswers] = useState(
    intialState.randomizedAnswers
  );
  const [round, setRound] = useState(intialState.round);
  const [score, setScore] = useState(intialState.score);
  const [stylesActive, setStylesActive] = useState(intialState.stylesActive);

  const handleLetsPlay = (history) => {
    setupNewGame();
    history.push(`/trivia`);
  };

  const handleAnswerClick = (answer, history) => {
    if (round.length - 1 === questionIndex) {
      history.push(`/scoreboard`);
    }
    setButtonDisabled(true);
    setStylesActive(true)
    checkAnswerAndUpdateScore(answer);
    setNextQuestionTimerIsActive(true);
  };

  const setupNewGame = () => {
    let roundOfTrivia = createRoundOfTrivia(data, 10);
    setRound(roundOfTrivia);
    setQuestionIndex(intialState.questionIndex);
    setScore(intialState.score);
    let incorrectAnswers = roundOfTrivia[0].incorrect;
    let correctAnswer = roundOfTrivia[0].correct;
    let answers = shuffleAnswers(incorrectAnswers, correctAnswer);
    setRandomizedAnswers(answers);
  };

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

  useLayoutEffect(() => {
    if (round.length && questionIndex < round.length) {
      let incorrectAnswers = round[questionIndex].incorrect;
      let correctAnswer = round[questionIndex].correct;
      let answers = shuffleAnswers(incorrectAnswers, correctAnswer);
      setRandomizedAnswers(answers);
    }
    return () => {};
  }, [questionIndex, round]);

  useEffect(() => {
    let interval = null;

    if (nextQuestionTimerSeconds === 0) {
      setNextQuestionTimerIsActive(intialState.nextQuestionTimerIsActive);
      setnextQuestionTimerSeconds(intialState.nextQuestionTimerSeconds);
      clearInterval(interval);
      setQuestionIndex(questionIndex + 1);
      setButtonDisabled(intialState.buttonDisabled);
      setStylesActive(intialState.stylesActive)
    }

    if (nextQuestionTimerIsActive && nextQuestionTimerSeconds > 0) {
      interval = interval = setInterval(() => {
        setnextQuestionTimerSeconds(nextQuestionTimerSeconds - 1);
      }, 1000);
    }

    if (!nextQuestionTimerIsActive) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [nextQuestionTimerIsActive, nextQuestionTimerSeconds, questionIndex]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home letsPlay={handleLetsPlay} />
        </Route>
        <Route path="/trivia">
          <Trivia
            answerClick={handleAnswerClick}
            buttonDisabled={buttonDisabled}
            nextQuestionTimerSeconds={nextQuestionTimerSeconds}
            questionIndex={questionIndex}
            randomizedAnswers={randomizedAnswers}
            round={round}
            stylesActive={stylesActive}
          />
        </Route>
        <Route path="/scoreboard">
          <Score score={score} letsPlay={handleLetsPlay} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

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
