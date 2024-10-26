import { Flags } from "./Flags";
import { useEffect, useState } from "react";
import Flag from "react-world-flags";
import useStore from "../zustand";
import { Link, useParams } from "react-router-dom";
const toggleTheme = () => {
  return localStorage.getItem("darkMode") || "light";
};
function Navbar() {
  const { title } = useParams();
  const { lang, changeLang } = useStore();
  const [theme, setTheme] = useState(toggleTheme());
  const handleToggleMode = () => {
    const newTheme = theme == "dark-mode" ? "light" : "dark-mode";
    setTheme(newTheme);
  };
  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme);
    localStorage.setItem("darkMode", theme);
  }, [theme]);
  const handleChange = (e) => {
    changeLang(e.target.value);
  };

  return (
    <header className="header">
      <div className=" header-container container">
        <div>
          {title && (
            <Link className="header-logo" to={"/"}>
              <figure>
                <img
                  src={`../assets/icon-${title.toLowerCase()}.svg`}
                  alt={`${title} icon`}
                />
              </figure>
              <span>{title}</span>
            </Link>
          )}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Flags lang={lang} />

            <select
              value={lang}
              onChange={(e) => handleChange(e)}
              className="bg-[#1D1D1D80] w-[92px] h-[42px] p-3 ps-6 rounded-xl  text-center"
            >
              <option value="uz">UZ</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
          </div>
          <div className="dark-btn" onClick={handleToggleMode}>
            <input type="checkbox" checked={theme == "dark-mode"} readOnly />
            <span>
              <Flag />
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
