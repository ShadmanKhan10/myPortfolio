import React from "react";
import "./Home.css";
import profilePic from "../../assets/profilePic.jpg";
import html from "../../assets/html.png";
import css from "../../assets/files.png";
import responsive from "../../assets/responsive.png";
import javascript from "../../assets/js.png";
import react from "../../assets/science.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-hero-container">
          <div className="profile-pic-container">
            <img src={profilePic} alt="profilePic" className="profile-pic" />
          </div>
          <div className="hero-text-container">
            <h1 className="hero-text">
              Hi, I’m <span className="name">Shadman Khan</span>, a front-end
              developer.
            </h1>
           
            <div className="hero-button-container">
              <button className="call-to-action-button">Download Resume</button>
              <button className="call-to-action-button1">Contact Me</button>
            </div>
            <div className="hero-icons-container">
              <img src={html} alt="html" className="hero-skills-icon" />
              <img src={css} alt="css" className="hero-skills-icon" />
              <img
                src={responsive}
                alt="javascript"
                className="hero-skills-icon"
              />
              <img
                src={javascript}
                alt="responsive"
                className="hero-skills-icon"
              />
              <img src={react} alt="react" className="hero-skills-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
