import { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import Test from "../components/Test";
function QuizPage() {
  const { title } = useParams();
  const quizzes = data.quizzes.filter((quiz) => quiz.title === title)[0];

  useEffect(() => {
    document.title = "Quiz " + title;
  }, [title]);

  return (
    <section className="quiz-container container">
      <Test quizzes={quizzes} />
    </section>
  );
}

export default QuizPage;
