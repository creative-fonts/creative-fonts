import React from "react";
import "./about.css";
import logo from "../../images/favicon.png";
function About() {
  return (
    <>
      <div className="about">
        <div className="about-box">
          <div className="visible-logo">
            <img src={logo} alt="cf" />
          </div>
          <br />
          <p className="about-para">
            Creative Fonts is a non - profit organisation which provides some of
            the coolest fonts available on the internet in form of bundled
            packages which can be used directly for development. Creative Fonts
            converts the raw files of fonts into small npm packages so that they
            can be installed locally via terminal.
            <br />
            All the fonts available on creative fonts are licensed as FREE for
            commercial use by their creators.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
