import React, { useState } from "react";
import project_picture from "../../assets/project_picture.png";
import project_video from "../../assets/project_video.mp4";
import leftArrow from "../../assets/left-arrow.png";
import leftArrowCarousel from "../../assets/left-arrow-caraousel.png";
import "./Projects.css";

const projects = [
  {
    name: "COMPARE KARO",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    images: [
      project_picture,
      "https://images6.alphacoders.com/614/thumb-1920-614633.jpg",
    ],
    video: project_video,
  },
  {
    name: "PROJECT X",
    techStack: ["React", "Redux", "TypeScript", "GraphQL", "MongoDB"],
    images: [
      "https://images6.alphacoders.com/614/thumb-1920-614633.jpg",
      project_picture,
    ],
    video: project_video,
  },
  {
    name: "INNOVATE NOW",
    techStack: ["HTML", "CSS", "JavaScript", "Python", "Django", "MySQL"],
    images: [
      project_picture,
      "https://images6.alphacoders.com/614/thumb-1920-614633.jpg",
    ],
    video: project_video,
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setCurrentImageIndex(0); // Reset image carousel when project changes
  };

  const handlePrevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setCurrentImageIndex(0); // Reset image carousel when project changes
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % projects[currentIndex].images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projects[currentIndex].images.length - 1 : prevIndex - 1
    );
  };

  const { name, techStack, images, video } = projects[currentIndex];

  return (
    <div className="projects-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-visulas-container">
        <div className="project-image-container">
          <img
            src={images[currentImageIndex]}
            className="project-picture"
            alt="project"
          />
          <img
            src={leftArrowCarousel}
            alt="left"
            className="carousel-left-arrow"
            onClick={handlePrevImage}
          />
          <img
            src={leftArrowCarousel}
            alt="right"
            className="carousel-right-arrow"
            onClick={handleNextImage}
          />
        </div>
        <div className="video-container">
          <video
            src={video}
            autoPlay={true}
            loop
            muted
            controls
            className="project-video"
          ></video>
        </div>
        <h1 className="project-name">{name}</h1>
        <p className="tech-stack">
          <span className="tech-stack-heading">TECH STACK:</span>{" "}
          {techStack.join(" ")}
        </p>
        <img
          src={leftArrow}
          alt="previous project"
          className="left-arrow"
          onClick={handlePrevProject}
        />
        <img
          src={leftArrow}
          alt="next project"
          className="right-arrow"
          onClick={handleNextProject}
        />
      </div>
    </div>
  );
}
