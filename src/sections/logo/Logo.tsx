import React from "react";
import "./Logo.scss";
import image from "../../assets/RunCalculatorLogo.png";

export default function Logo() {
  return (
    <div className="Logo">
      <img src={image} alt="running astronaut" height="200px" width="185px" />
      <h3>Pace Calculator</h3>
    </div>
  );
}
