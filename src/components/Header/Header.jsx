import { useContext } from "react";
import "./Header.css";
import { LanguageContext } from "../../context/LanguageContext";

export const Header = () => {
  const { language, changeLanguage, translation } = useContext(LanguageContext);
  const text = translation;
  return (
    <header>
      <nav className="nav-bar">
        <img src="./images/logo.svg" alt="logo" className="logo" />
        <ul className="nav-list">
          <li className="translate-btn">
            <button
              onClick={() => changeLanguage(language === "en" ? "es" : "en")}
            >
              <i className="fa-solid fa-language"></i>
            </button>
          </li>
          <li className="nav-item">
            <a href="#">{text.features}</a>
          </li>
          <li className="nav-item">
            <a href="#">{text.team}</a>
          </li>
          <li className="nav-item">
            <a href="#">{text.singIn}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
