import React, { useReducer, useState } from "react";
import detectLang from "../helpers/LangHelper";
import useStore from "../zustand";
import Result from "./Result";
const initialState = {
  answeredQuestions: 1,
  correctAnswerCount: 0,
  questionIndex: 0,
  selectedAnswer: null,
  answerStatus: null,
  statusDisabled: false,
  showNextButton: false,
};
function quizReducer(state, action) {
  switch (action.type) {
    case "ANSWER_QUESTION":
      return {
        ...state,
        selectedAnswer: action.payload,
      };
    case "SELECT_TEST":
      return {
        ...state,
        showNextButton: true,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        selectedAnswer: null,
        answerStatus: null,
        statusDisabled: false,
        showNextButton: false,
        answeredQuestions: state.answeredQuestions + 1,
      };
    case "CORRECT_ANSWER":
      return {
        ...state,
        correctAnswerCount: state.correctAnswerCount + 1,
        answerStatus: "correct",
      };
    case "WRONG_ANSWER":
      return {
        ...state,
        answerStatus: "incorrect",
      };
    case "diableInput":
      return {
        ...state,
        statusDisabled: true,
      };
    default:
      return state;
  }
}
function Test({ quizzes: { questions, title, icon, color } }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const currentQuestion = questions[state.questionIndex];
  const totalQuestions = questions.length;
  const { lang } = useStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer =
      questions[state.questionIndex].answer[currentLanguage];

    if (state.selectedAnswer == null) {
      alert(
        detectLang(
          lang,
          "Iltimos savolga javob bering",
          "пожалуйста, ответьте на вопросы",
          "please answer the question"
        )
      );
    } else {
      if (state.selectedAnswer == correctAnswer) {
        dispatch({ type: "CORRECT_ANSWER" });
      } else {
        dispatch({ type: "WRONG_ANSWER" });
      }
    }
    dispatch({ type: "diableInput" });
    dispatch({ type: "SELECT_TEST" });
  };
  const currentLanguage = detectLang(lang, "uz", "ru", "en");

  if (totalQuestions === state.questionIndex) {
    return (
      <Result
        title={title}
        icon={icon}
        questionsLength={totalQuestions}
        correctAnswerCount={state.correctAnswerCount}
        color={color}
      />
    );
  }
  return (
    <div className="test-container">
      <div className="test-content">
        <p className="test-description">
          {detectLang(
            lang,
            `${totalQuestions} tadan ${state.answeredQuestions}-si`,
            `Вопрос ${totalQuestions} из ${state.answeredQuestions}`,
            `Question ${state.answeredQuestions} of ${totalQuestions}`
          )}
        </p>
        <h2 className="test-title">
          {detectLang(
            lang,
            currentQuestion.question.uz,
            currentQuestion.question.ru,
            currentQuestion.question.en
          )}
        </h2>
        <div className="test-proccess-container">
          <div
            className="test-proccess"
            style={{
              width: (state.answeredQuestions / totalQuestions) * 100 + "%",
            }}
          ></div>
        </div>
      </div>
      <div className="test-questions">
        <form onSubmit={handleSubmit}>
          <ul className="test-list">
            {currentQuestion.options[currentLanguage].map((item, i) => {
              const alphabet = String.fromCharCode(65 + i);
              let className = "";
              if (
                state.answerStatus == "correct" &&
                item == state.selectedAnswer
              ) {
                className = "correct";
              } else if (state.answerStatus == "incorrect") {
                if (item == state.selectedAnswer) {
                  className = "incorrect";
                }
                if (
                  item == questions[state.questionIndex].answer[currentLanguage]
                ) {
                  className = "correct";
                }
              }
              return (
                <li key={i}>
                  <label className={`test-label ${className}`}>
                    <span className="test-letter">{alphabet}</span>
                    <input
                      onChange={(e) =>
                        dispatch({
                          type: "ANSWER_QUESTION",
                          payload: item,
                        })
                      }
                      type="radio"
                      name="option"
                      checked={state.selectedAnswer === item}
                      disabled={state.statusDisabled}
                    />
                    <span className="test-text">{item}</span>
                    <img
                      className="test-icon-correct"
                      src="../assets/icon-correct.svg"
                      alt="icon"
                      width={40}
                      height={40}
                    />
                    <img
                      className="test-icon-incorrect"
                      src="../assets/icon-incorrect.svg"
                      alt="icon"
                      width={40}
                      height={40}
                    />
                  </label>
                </li>
              );
            })}
          </ul>
          {!state.showNextButton && (
            <button type="submit" className="btn test-btn">
              {detectLang(
                lang,
                "Javobni yuborish",
                "Отправить ответ",
                "Submit answer"
              )}
            </button>
          )}

          {state.showNextButton && (
            <button
              type="button"
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              className="btn test-btn"
            >
              {state.answeredQuestions == totalQuestions
                ? detectLang(lang, "Tugatish", "заканчивать", "Finish")
                : detectLang(
                    lang,
                    "Keyingi savol",
                    "Следующий вопрос",
                    "Next Question"
                  )}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Test;
