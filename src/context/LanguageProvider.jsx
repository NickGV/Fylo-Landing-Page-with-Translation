import { useState } from "react";
import translations from "./translations/trasnlations";
import { LanguageContext } from "./LanguageContext";
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const currentTranslation = translations[language];

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider
      value={{ changeLanguage, language, translation: currentTranslation }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
