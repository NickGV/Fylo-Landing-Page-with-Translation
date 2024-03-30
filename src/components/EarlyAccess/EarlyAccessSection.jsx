import { useContext, useState } from "react";
import "./EarlyAccessSection.css";
import { LanguageContext } from "../../context/LanguageContext";
export const EarlyAccessSection = () => {
  const [isError, setIsError] = useState(false);

  const { translation } = useContext(LanguageContext);
  const earlyAccessText = translation.earlyAccessSection;

  const validEmail =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail.test(e.target.input.value)) {
      console.log("es correcto");
      setIsError(false);
    } else {
      console.log("no es correcto");
      setIsError(true);
    }
  };

  return (
    <section className="early-access">
      <div className="early-access-content">
        <h2 className="early-access-title">{earlyAccessText.title}</h2>
        <p className="early-access-description">{earlyAccessText.description}</p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder={earlyAccessText.placeholder}
              id="input"
            />
            <span
              className={isError ? "error-message active" : "error-message"}
              id="error-message"
            >
              {earlyAccessText.errorMessage}
            </span>
          </div>
          <button className="get-started-btn" id="submit-btn">
            {earlyAccessText.button}
          </button>
        </form>
      </div>
    </section>
  );
};
