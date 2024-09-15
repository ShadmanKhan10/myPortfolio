import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import instaIcon from "../../assets/instagram.png";
import code from "../../assets/code.png";
import hamburger from "../../assets/hamburger.png";
import closeMenu from "../../assets/close-button.png";

function Navbar() {
  const [showSideView, setShowSideView] = useState(false);

  const showMobileMenus = () => {
    setShowSideView(true);
  };

  const sidebarVariants = {
    hidden: {
      x: "100%", // Hidden off-screen to the right
      opacity: 0, // Fully transparent
    },
    visible: {
      x: 0, // Slide into view
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12, // Bounce effect for entrance
      },
    },
    exit: {
      x: "100%", // Slide out to the right
      opacity: 0, // Fade out
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4, // Smooth and quick exit
      },
    },
  };

  const navItemVariants = {
    hidden: {
      opacity: 0,
      y: -30, // Start off-screen above
    },
    visible: {
      opacity: 1,
      y: 0, // Bounce into view
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 8, // Controls the bounce effect
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2, // Stagger each icon
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <>
      <div className="navbar-container">
        <div className="portfolio-logo-container">
          <div className="portfolioCode-logo-container">
            <img className="portfolio-logo" src={code} alt="logo" />
          </div>
          <h1 className="portfolio-logo-name">SHADMAN.</h1>
        </div>
        <ul className="nav-items-container">
          <li className="nav-items">HOME</li>
          <li className="nav-items">ABOUT</li>
          <li className="nav-items">RESUME</li>
          <li className="nav-items">CONTACT</li>
        </ul>
        <div className="hamburger-icon-container">
          <img
            onClick={showMobileMenus}
            src={hamburger}
            alt="menu"
            className="hamburger-image"
          />
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

      <AnimatePresence>
        {showSideView && (
          <motion.div
            className="mobileMenu-container"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
          >
            <img
              onClick={() => setShowSideView(false)}
              src={closeMenu}
              className="close-menu"
              alt="close"
            />
            <div className="menu-items-container-sidebar">
              <ul className="nav-items-container-sidebar">
                {/* Apply initial and animate directly to each list item */}
                <motion.li
                  className="nav-items-sidebar"
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  HOME
                </motion.li>
                <motion.li
                  className="nav-items-sidebar"
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  ABOUT
                </motion.li>
                <motion.li
                  className="nav-items-sidebar"
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  RESUME
                </motion.li>
                <motion.li
                  className="nav-items-sidebar"
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  CONTACT
                </motion.li>
              </ul>
            </div>

            {/* Adding unique 'custom' props to each icon */}
            <div className="social-media-icons-container-sidebar">
              <motion.img
                src={instaIcon}
                className="social-media-icon-sidebar"
                alt="instagram"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                custom={0} // Custom prop for staggered effect
              />
              <motion.img
                src={instaIcon}
                className="social-media-icon-sidebar"
                alt="instagram"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                custom={1}
              />
              <motion.img
                src={instaIcon}
                className="social-media-icon-sidebar"
                alt="instagram"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                custom={2}
              />
              <motion.img
                src={instaIcon}
                className="social-media-icon-sidebar"
                alt="instagram"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                custom={3}
              />
              <motion.img
                src={instaIcon}
                className="social-media-icon-sidebar"
                alt="instagram"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                custom={4}
              />
            </div>

            <p className="sidebar-bottom-text">
              EVERYTHING TO ACHIEVE, NOTHING TO PROVE.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
