import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="khanvas__footer section__padding">
    <div className="khanvas__footer-heading">
      <h1 className="gradient__text">
        Do you want to step into the Khanvanic community and so much more
      </h1>
    </div>

    <div className="khanvas__footer-btn">
      <p>Download the app</p>
    </div>

    <div className="khanvas__footer-links">
      <div className="khanvas__footer-links_logo">
        <img src={gpt3Logo} alt="khanvas_logo" />
        <p>
          KK 133 St Kigali, RWANDA, <br /> All Rights Reserved
        </p>
      </div>
      <div className="khanvas__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="khanvas__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="khanvas__footer-links_div">
        <h4>Get in touch</h4>
        <p>KK 133 St Kigali, RWANDA</p>
        <p>+250 788 888 888</p>
        <p>info@ibimanuka.io</p>
      </div>
    </div>

    <div className="khanvas__footer-copyright">
      <p>@2021 ibimanuka. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
