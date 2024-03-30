import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./Hero.css";
export const Hero = () => {
  const { translation } = useContext(LanguageContext);
  const text = translation.hero;
  return (
    <section className="hero">
      <div>
        <img
          src="./images/illustration-intro.png"
          alt="hero-img"
          className="hero-img"
        />
        <h1 className="hero-title">{text.title}</h1>
        <p className="hero-description">{text.description}</p>
        <button className="get-started-btn">{text.button}</button>
      </div>
    </section>
  );
};
