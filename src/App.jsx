import { Header } from "./components/Header/Header";
import "./App.css";
import { LanguageProvider } from "./context/LanguageProvider";
import { Hero } from "./components/Hero/Hero";
import { ProductiveSection } from "./components/Productive/ProductiveSection";
import { FeaturesSection } from "./components/Features/FeaturesSection";
import { TestimonialSection } from "./components/Testimonials/TestimonialSection";
import { EarlyAccessSection } from "./components/EarlyAccess/EarlyAccessSection";
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <FeaturesSection/>
      <ProductiveSection />
      <TestimonialSection/>
      <EarlyAccessSection/>
      <Footer/>
    </LanguageProvider>
  );
}

export default App;
