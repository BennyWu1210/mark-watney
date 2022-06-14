import React from "react";
import "./HeroSection.css";
function HeroSection({ imageSource, title, subtitle }) {
  return (
    <div className="hero-container">
      <img className="hero-background" src={imageSource} />
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>An English ISP by Benny Wu</p>
    </div>
  );
}
export default HeroSection;
