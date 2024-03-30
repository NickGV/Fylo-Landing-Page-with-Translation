import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { FeatureCard } from "./FeatureCard";
import "./FeaturesSection.css";

export const FeaturesSection = () => {
  const { translation } = useContext(LanguageContext);
  const text = translation.featuresSection;
  return (
    <section className="features">
      <div className="feature-content">
        <FeatureCard
          img={text.accessAnywhere.img}
          title={text.accessAnywhere.title}
          description={text.accessAnywhere.description}
        />
        <FeatureCard
          img={text.securityTrust.img}
          title={text.securityTrust.title}
          description={text.securityTrust.description}
        />
        <FeatureCard
          img={text.realTimeCollaboration.img}
          title={text.realTimeCollaboration.title}
          description={text.realTimeCollaboration.description}
        />
        <FeatureCard
          img={text.storeAnyTypeOfFile.img}
          title={text.storeAnyTypeOfFile.title}
          description={text.storeAnyTypeOfFile.description}
        />
      </div>
    </section>
  );
};
