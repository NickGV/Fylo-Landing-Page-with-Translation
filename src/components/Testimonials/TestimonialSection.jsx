import { useContext } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { LanguageContext } from "../../context/LanguageContext";
import './TestimonialSection.css'

export const TestimonialSection = () => {
  const { translation } = useContext(LanguageContext);
  const testimonials = translation.testimonialsSection;

  return (
    <section className="testimonials">
      <div className="testimonials-content">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            authorName={testimonial.authorName}
            authorPosition={testimonial.authorPosition}
            authorImg={testimonial.authorImg}
          />
        ))}
      </div>
    </section>
  );
};
