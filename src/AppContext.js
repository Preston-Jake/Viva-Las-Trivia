import React, { useReducer, createContext } from "react";
import data from "./data/Apprentice_TandemFor400_Data.json";
import getQuestions from "./utilities";

export const AppContext = createContext();

const initialState = {
  answered: false,
  questionIndex: 0,
  questions: [],
  score: 0,
  timer: 3,
};

function reducer(state, action) {
  switch (action.type) {
    case "answered":
      return { ...state, answered: true };
    case "decrementTimer":
      return { ...state, timer: state.timer - 1 };
    case "getQuestions":
      return { ...state, questions: getQuestions(data) };
    case "incrementScore":
      return { ...state, score: state.score + 1};
    case "nextQuestion":
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        answered: false,
      };
    case "reset":
      return { ...initialState };
    case "restAnswered":
      return { ...state, answered: initialState.answered };
    case "restTimer":
      return { ...state, timer: initialState.timer };
    default:
      return state;
  }
}

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
