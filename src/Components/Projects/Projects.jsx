import React, { useState } from "react";
import project_picture from "../../assets/project_picture.png";
import project_video from "../../assets/project_video.mp4";
import leftArrow from "../../assets/left-arrow.png";
import leftArrowCarousel from "../../assets/left-arrow-caraousel.png";
import "./Projects.css";

const images = [
  project_picture,
  "https://images6.alphacoders.com/614/thumb-1920-614633.jpg",
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="projects-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-visulas-container">
        <div className="project-image-container">
          <img
            src={images[currentIndex]}
            className="project-picture"
            alt="project"
          />
          <img
            src={leftArrowCarousel}
            alt="left"
            className="carousel-left-arrow"
            onClick={handlePrev}
          />
          <img
            src={leftArrowCarousel}
            alt="right"
            className="carousel-right-arrow"
            onClick={handleNext}
          />
        </div>
        <div className="video-container">
          <video
            src={project_video}
            autoPlay={true}
            loop
            muted
            controls
            className="project-video"
          ></video>
        </div>
        <h1 className="project-name">COMPARE KARO</h1>
        <p className="tech-stack">
          <span className="tech-stack-heading">TECH STACK:</span> HTML CSS
          JAVASCRIPT REACT NODE.JS EXPRESS.JS postgreSQL
        </p>
        <img src={leftArrow} alt="left" className="left-arrow" />
        <img src={leftArrow} alt="left" className="right-arrow" />
      </div>
    </div>
  );
}
