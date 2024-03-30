import { useContext } from "react";
import "./Footer.css";
import { LanguageContext } from "../../context/LanguageContext";
export const Footer = () => {
  const { translation } = useContext(LanguageContext);

  const footerText = translation.footer;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="ubication">
          <i className="fa-solid fa-location-dot"></i>
          <p>{footerText.ubication}</p>
        </div>
        <div className="contacts">
          <div>
            <i className="fa-solid fa-phone-volume"></i>
            <span>{footerText.contacts.phone}</span>
          </div>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <span>{footerText.contacts.email}</span>
          </div>
        </div>
        <div className="links">
          <div>
            <a href="#">{footerText.links.about}</a>
            <a href="#">{footerText.links.jobs}</a>
            <a href="#">{footerText.links.press}</a>
            <a href="#">{footerText.links.blog}</a>
          </div>
          <div>
            <a href="">{footerText.links.conctactUs} </a>
            <a href="">{footerText.links.terms}</a>
            <a href="">{footerText.links.privacy}</a>
          </div>
        </div>
        <div className="social-media">
          <div className="icon-container">
            <i className="fa-brands fa-facebook-f"></i>
          </div>
          <div className="icon-container">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="icon-container">
            <i className="fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};
