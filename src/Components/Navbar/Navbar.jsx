import React from "react";
import "./Navbar.css";
import instaIcon from "../../assets/instagram.png";
import code from "../../assets/code.png";
import hamburger from "../../assets/hamburger.png";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="portfolio-logo-container">
          <div className="portfolioCode-logo-container">
            <img className="portfolio-logo" src={code} alt="logo" />{" "}
          </div>
          <h1 className="portfolio-logo-name">SHADMAN.</h1>
        </div>
        <ul className="nav-items-container">
          <li className="nav-items">HOME</li>
          <li className="nav-items">ABOUT</li>
          <li className="nav-items">RESUME</li>
          <li className="nav-items">CONTACT</li>
          {/* <li className="nav-items">TESTIMONIALS</li> */}
        </ul>
        <div className="hamburger-icon-container">
          <img src={hamburger} alt="menu" className="hamburger-image" />
        </div>
        <div className="social-media-icons-container">
          <div className="social-media-icons">
            <img
              src={instaIcon}
              className="social-media-icon"
              alt="instagram"
            />
            <img
              src={instaIcon}
              className="social-media-icon"
              alt="instagram"
            />
            <img
              src={instaIcon}
              className="social-media-icon"
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
