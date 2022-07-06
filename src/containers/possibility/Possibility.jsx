import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="khanvas__possibility section__padding" id="possibility">
    <div className="khanvas__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="khanvas__possibility-content">
      <h4>Download the IBIMANUKA app to Get Started</h4>
      <h1 className="gradient__text">
        For an intimate experience <br /> download the IBIMANUKA app.
      </h1>
      <p>
        The ibimanuka universe is slowly, but surely expanding. Follow the
        adventures of our beloved SHADOWS alongside a diverse and ethereal cast
        of characters. Remember, it's all about being candescent in the
        limelight.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
