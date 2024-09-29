import React from "react";
import school from "../../assets/school.gif";
import member from "../../assets/member.png";
import freelancer from "../../assets/freelancer.png";
import music from "../../assets/music.png";
import meeting from "../../assets/meeting.png";
import support from "../../assets/support.png";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="about-container">
        <h1 className="main-about-heading">About Me</h1>
        <div className="about-me-content-introduction">
          <img
            src="https://media1.tenor.com/m/GfSX-u7VGM4AAAAC/coding.gif"
            alt="coding"
            className="about-me-gif"
          />
          <p className="about-me-description">
            Hi, I’m Shadman Khan, a passionate and dedicated front-end developer
            with a strong focus on crafting responsive, visually engaging, and
            user-friendly websites. I specialize in using modern technologies
            like React, JavaScript, HTML, and CSS to bring creative ideas to
            life in the digital space.
          </p>
        </div>
        <div className="about-me-content-education">
          <p className="about-me-college-description">
            With a degree in Computer Science and Engineering, I have honed my
            skills in building interactive UIs, collaborating with backend
            teams, and turning client visions into seamless web applications. My
            journey as a developer is fueled by curiosity and a desire to create
            meaningful experiences through clean, efficient code.
          </p>
          <img src={school} alt="college" className="about-me-college" />
        </div>
        <div className="about-me-content-fist">
          <div className="fist-members-container">
            <div className="fist-member-first-row">
              <img className="fist-member" src={member} alt="member" />
              <p className="fist-member-name">Shadman Khan</p>
            </div>
            <div className="fist-member-second-row">
              <img className="fist-member" src={member} alt="member" />
              <p className="fist-member-name">Md. Sami Adnan</p>
            </div>
            <div className="fist-member-third-row">
              <img className="fist-member" src={member} alt="member" />
              <p className="fist-member-name">G. Raj Kumar</p>
            </div>
            <div className="fist-member-fourth-row">
              <img className="fist-member" src={member} alt="member" />
              <p className="fist-member-name">Faisal Khan</p>
            </div>
          </div>
          <div className="fist-description-container">
            {" "}
            <p>
              Apart from my personal work, I’m also part of{" "}
              <span style={{ color: "#fec576", fontWeight: "bold" }}>FIST</span>
              , a dynamic group of developers ready to tackle{" "}
              <span style={{ color: "#fec576", fontWeight: "bold" }}>
                freelance projects
              </span>
              . Our team consists of:
            </p>
            <ul className="ul-fist">
              <li className="fist-list">
                <span style={{ color: "#fec576", fontWeight: "bold" }}>
                  G. Raj Kumar
                </span>{" "}
                – An App Developer, creating smooth and user-friendly mobile
                applications.
              </li>
              <li className="fist-list">
                <span style={{ color: "#fec576", fontWeight: "bold" }}>
                  Md. Sami Adnan
                </span>{" "}
                – A Backend Developer, building secure, scalable server-side
                solutions.
              </li>
              <li className="fist-list">
                <span style={{ color: "#fec576", fontWeight: "bold" }}>
                  Faisal Khan and I
                </span>{" "}
                – Frontend Developers, focused on crafting responsive, visually
                engaging websites and web applications.
              </li>
            </ul>
            <p>
              Though we’re just starting out, our diverse skills allow us to
              deliver high-quality digital products at affordable rates. Whether
              you need a cutting-edge website, an intuitive app, or a full-stack
              solution, Fist is here to provide tailored, effective solutions.
              We're driven by a passion for delivering value and turning ideas
              into reality.
            </p>
          </div>
          {/* <div className="fist-description"></div> */}
        </div>
        <div className="about-me-content-interests">
          <p className="intest-heading">INTEREST</p>
          <div className="interests-icon-container">
            <div className="icon-containing-div">
              <img src={freelancer} alt="interest" className="interest-icon" />
              <p className="interest-text">Freelance Available</p>
            </div>
            <div className="icon-containing-div">
              <img src={music} alt="interest" className="interest-icon" />
              <p className="interest-text">Music</p>
            </div>
            <div className="icon-containing-div">
              <img src={support} alt="interest" className="interest-icon" />
              <p className="interest-text">24*7 Support</p>
            </div>
            <div className="icon-containing-div">
              <img src={meeting} alt="interest" className="interest-icon" />
              <p className="interest-text">Meeting Peopke</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
