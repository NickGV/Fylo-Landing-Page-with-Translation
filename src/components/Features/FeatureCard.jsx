export const FeatureCard = ({ img, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-img-container">
        <img src={img + ".svg"} alt="" className="feature-img" />
      </div>
      <h2 className="feature-title">{title}</h2>
      <p className="feature-description">{description}</p>
    </div>
  );
};
