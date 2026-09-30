import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
  faGooglePlay,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/css/header.css";

function Footer() {
  const firstLinks = [
    "Home",
    "Delivery Areas",
    "Careers",
    "Customer Support",
    "Press",
    "Tech Blog",
    "Recipes",
    "Bestsellers",
  ];

  const secondLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Responsible Disclosure Policy",
    "Sell on Zepto",
    "Deliver with Zepto",
    "Franchise with Zepto",
    "Investor Relations",
  ];

  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          {/* Logo & Social Media */}
          <div className="footer-brand">
            <h2 className="footer-logo">zepto</h2>

            <div className="social-icons">
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>

              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>

            <p>© Zepto Marketplace Private Limited</p>
            <p>fssai lic no : 11224999000872</p>
          </div>

          <div className="footer-links">
            {firstLinks.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>

          <div className="footer-links">
            {secondLinks.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>

          <div className="footer-app">
            <h3>Download App</h3>

            <a href="#" className="app-button">
              <FontAwesomeIcon icon={faGooglePlay} />
              <span>Get it on play store</span>
            </a>

            <a href="#" className="app-button">
              <FontAwesomeIcon icon={faApple} />
              <span>Get it on app store</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
