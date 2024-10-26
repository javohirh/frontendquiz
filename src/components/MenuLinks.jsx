import React from "react";
import quizData from "../../data/data.json";
import { Link } from "react-router-dom";

function MenuLinks() {
  const questions = quizData.quizzes;

  return (
    <div>
      {
        <div className="menu-list">
          {questions?.map((quiz, i) => {
            return (
              <Link
                key={i}
                to={`quiz/${quiz.title}`}
                className="menu-item header-logo"
              >
                <figure style={{ background: quiz.color }}>
                  <img src={quiz.icon} alt={quiz.title} />
                </figure>
                <span> {quiz.title}</span>
              </Link>
            );
          })}
        </div>
      }
    </div>
  );
}

export default MenuLinks;
