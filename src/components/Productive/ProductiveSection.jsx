import "./ProductiveSection.css";
import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";

export const ProductiveSection = () => {
  const { translation } = useContext(LanguageContext);
  const text = translation.productiveSection

  return (
    <section className="productive">
      <div className="productive-content">
        <div className="img-container">
          <img
            src="./images/illustration-stay-productive.png"
            alt=""
            className="productive-img"
          />
        </div>
        <div className="productive-text">
          <h2 className="productive-title">
            {text.title}
          </h2>
          <div className="productive-description">
            <p>
              {text.description1}
            </p>
            <p>
              {text.description2}
            </p>
          </div>
          <a href="" className="productive-link">
            {text.link}
            <img src="./images/icon-arrow.svg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};
