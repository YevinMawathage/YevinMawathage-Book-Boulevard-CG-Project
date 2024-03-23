import React from "react";
import "./Css/Footer.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {

  return (
    <div className="footer-container">
      <div className="subscription_links">
        <section className="footer-subscription">
      
          <p className="footer-subscription-text">
          Hey there, bookworms! Welcome to Book Boulevard, 
          your go-to destination for e-book adventures. 
          Get ready to dive into a world where stories leap 
          off the screen and imagination knows no bounds.
          Whether you're into magical realms, heart-pounding adventures, 
          or heartwarming romances, we've got something for every kind of reader. 
          Join us as we embark on thrilling journeys between the pages, 
          where the only limit is your imagination. Let's turn the next page together 
          and discover the magic of reading.
          </p>
          
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Contact Us</Link>
              <Link to={"/Shop"}>Shop</Link>
              <Link to={"/About"}>About Us</Link>
              <Link to={"/Testimonials"}>Testimonials</Link>
            </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to={"/"} className="social-logo">
              <span style={{ color: "#F6C20A" }}>Book</span>
              <span style={{ color: "white" }}>Boulevard</span>
            </Link>
          </div>
          <small className="website-rights">Book Boulevard © 2024</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to={"https://www.facebook.com/"}
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              className="social-icon-link instagram"
              to={"https://www.instagram.com/"}
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className="social-icon-link youtube"
              to={"https://youtube.com/"}
              target="_blank"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link
              className="social-icon-link twitter"
              to={"https://twitter.com/"}
              target="_blank"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to={"https://www.linkedin.com/"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
  }

export default Footer;