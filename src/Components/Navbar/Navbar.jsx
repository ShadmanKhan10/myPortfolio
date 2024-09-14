// import React, { useState } from "react";
// import "./Navbar.css";
// import instaIcon from "../../assets/instagram.png";
// import code from "../../assets/code.png";
// import hamburger from "../../assets/hamburger.png";
// import closeMenu from "../../assets/close-button.png";

// function Navbar() {
//   const [showSideView, setShowSideView] = useState(false);

//   const showMobileMenus = () => {
//     setShowSideView(true);
//   };
//   return (
//     <>
//       <div className="navbar-container">
//         <div className="portfolio-logo-container">
//           <div className="portfolioCode-logo-container">
//             <img className="portfolio-logo" src={code} alt="logo" />{" "}
//           </div>
//           <h1 className="portfolio-logo-name">SHADMAN.</h1>
//         </div>
//         <ul className="nav-items-container">
//           <li className="nav-items">HOME</li>
//           <li className="nav-items">ABOUT</li>
//           <li className="nav-items">RESUME</li>
//           <li className="nav-items">CONTACT</li>
//           {/* <li className="nav-items">TESTIMONIALS</li> */}
//         </ul>
//         <div className="hamburger-icon-container">
//           <img
//             onClick={showMobileMenus}
//             src={hamburger}
//             alt="menu"
//             className="hamburger-image"
//           />
//         </div>
//         <div className="social-media-icons-container">
//           <div className="social-media-icons">
//             <img
//               src={instaIcon}
//               className="social-media-icon"
//               alt="instagram"
//             />
//             <img
//               src={instaIcon}
//               className="social-media-icon"
//               alt="instagram"
//             />
//             <img
//               src={instaIcon}
//               className="social-media-icon"
//               alt="instagram"
//             />
//           </div>
//         </div>
//       </div>
//       {showSideView && (
//         <div className="mobileMenu-container">
//           <img
//             onClick={() => {
//               setShowSideView(false);
//             }}
//             src={closeMenu}
//             className="close-menu"
//             alt="close"
//           />
//           <div className="menu-items-container-sidebar">
//             <ul className="nav-items-container-sidebar">
//               <li className="nav-items-sidebar">HOME</li>
//               <li className="nav-items-sidebar">ABOUT</li>
//               <li className="nav-items-sidebar">RESUME</li>
//               <li className="nav-items-sidebar">CONTACT</li>
//             </ul>
//           </div>
//           <div className="social-media-icons-container-sidebar">
//             <img
//               src={instaIcon}
//               className="social-media-icon-sidebar"
//               alt="instagram"
//             />
//             <img
//               src={instaIcon}
//               className="social-media-icon-sidebar"
//               alt="instagram"
//             />
//             <img
//               src={instaIcon}
//               className="social-media-icon-sidebar"
//               alt="instagram"
//             />
//             <img
//               src={instaIcon}
//               className="social-media-icon-sidebar"
//               alt="instagram"
//             />
//             <img
//               src={instaIcon}
//               className="social-media-icon-sidebar"
//               alt="instagram"
//             />
//           </div>
//           <p className="sidebar-bottom-text">
//             EVERYTHING TO ACHIEVE, NOTHING TO PROVE.
//           </p>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
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

  // Define animation variants
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

      {/* AnimatePresence wraps the sidebar to animate its exit */}
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
                <li className="nav-items-sidebar">HOME</li>
                <li className="nav-items-sidebar">ABOUT</li>
                <li className="nav-items-sidebar">RESUME</li>
                <li className="nav-items-sidebar">CONTACT</li>
              </ul>
            </div>
            <div className="social-media-icons-container-sidebar">
              <img
                src={instaIcon}
                className="social-media-icon-sidebar"
                alt="instagram"
              />
              <img
                src={instaIcon}
                className="social-media-icon-sidebar"
                alt="instagram"
              />
              <img
                src={instaIcon}
                className="social-media-icon-sidebar"
                alt="instagram"
              />
              <img
                src={instaIcon}
                className="social-media-icon-sidebar"
                alt="instagram"
              />
              <img
                src={instaIcon}
                className="social-media-icon-sidebar"
                alt="instagram"
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
