export const TestimonialCard = ({
  text,
  authorName,
  authorPosition,
  authorImg,
}) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <img src={authorImg} alt="" className="testimonial-author-img" />
        <div>
          <h4 className="testimonial-author-name">{authorName}</h4>
          <p className="testimonial-author-position">{authorPosition}</p>
        </div>
      </div>
    </div>
  );
};
