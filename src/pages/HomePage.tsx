import React from "react";
import MenuLinks from "../components/MenuLinks";
import useStore from "../zustand";
import detectLang from "../helpers/LangHelper";

function HomePage(): React.ReactNode {
  const { lang } = useStore();
  return (
    <section className="home-container container">
      <div className="home-content">
        <h1 className="home-title">
          <span>
            {detectLang(
              lang,
              "Xush kelibsiz",
              "Добро пожаловать в",
              " Welcome to the"
            )}{" "}
          </span>
          <span>Frontend Quiz</span>
        </h1>
        <p>
          {detectLang(
            lang,
            "Boshlash uchun mavzuni tanlang",
            "Выберите тему, чтобы начать",
            " Pick a subject to get started"
          )}
        </p>
      </div>
      <div className="home-nav-list">
        <MenuLinks />
      </div>
    </section>
  );
}

export default HomePage;
