import React, { useReducer, createContext } from "react";
import data from "./data/Apprentice_TandemFor400_Data.json";
import getQuestions from "./utilities";

export const AppContext = createContext();

const initialState = {
  answered: false,
  questionIndex: 0,
  questions: [],
  score: 0,
  selected: '',
};

function reducer(state, action) {
  switch (action.type) {
    case "answered":
      const newScore = action.correct ? state.score + 1 : state.score
      return { ...state, answered: true, score: newScore, selected: action.selected };
    case "getQuestions":
      return { ...state, questions: getQuestions(data) };
    case "nextQuestion":
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        selected: "",
        answered: false,
      };
    case "reset":
      return { ...initialState };
    case "restAnswered":
      return { ...state, answered: initialState.answered };
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
