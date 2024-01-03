/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import landingPageImage from "../images/landing-page.png";
import profilePic from "../images/profile-pic.jpg";

const imageAltText = "Mark Fernan Simeon";

const Home = ({ name, title, title2 }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative" }}>
      <img className="background" src={landingPageImage} alt={imageAltText} />

      {/* Frosted glass effect container */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "20px", // Adjust the border-radius as needed
          overflow: "hidden",
          padding: "20px", // Add padding for spacing
          background: "rgba(255, 255, 255, 0.2)", // White background with transparency
          backdropFilter: "blur(10px)", // Frosted glass effect with blur
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow for a subtle shadow effect
        }}
      >
        <div
          style={{
            width: "200px", // Adjust the width for a larger circle
            height: "200px", // Adjust the height for a larger circle
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src={profilePic}
            alt={imageAltText}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Move the name and title below the circle */}
        <div style={{ textAlign: "center", color: "white", marginTop: "10px" }}>
          <h2 style={{ fontWeight: "bold" }}>{name}</h2><br />
          <h3>{title}</h3>
          <h3>{title2}</h3>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
  title2: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};

export default Home;
