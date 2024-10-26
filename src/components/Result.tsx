import { Link } from "react-router-dom";
import useStore from "../zustand";
import detectLang from "../helpers/LangHelper";

function Result({ title, color, icon, correctAnswerCount, questionsLength }) {
  const { lang } = useStore();
  return (
    <div className="test-container result-container">
      <div className="home-content">
        <h1 className="home-title">
          <span>
            {detectLang(
              lang,
              "Quiz yakunlandi",
              "Quiz завершена",
              "Quiz completed"
            )}
          </span>
          <span>
            {detectLang(
              lang,
              "Siz to'pladingiz...",
              "Ты забил...",
              "You scored..."
            )}
          </span>
        </h1>
      </div>
      <div className="test-completed">
        <div className="test-completed-body">
          <div className="menu-item header-logo">
            <figure style={{ backgroundColor: color }}>
              <img src={`${icon}`} alt="" />
            </figure>
            <span>{title}</span>
          </div>
          <div className="big-text">{correctAnswerCount}</div>
          <p>
            {detectLang(lang, "ta ", "из ", "out of ")}
            {questionsLength}
          </p>
        </div>
        <Link className="btn" to="/">
          {detectLang(lang, "Qayta o'ynash", "Играть снова", "Play Again")}
        </Link>
      </div>
    </div>
  );
}

export default Result;
