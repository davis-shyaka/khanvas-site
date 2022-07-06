import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="khanvas__header section__padding" id="home">
      <div className="khanvas__header-content">
        <h1 className="gradient__text">
          “Art is to console those who are broken by life.” <br />― Vincent van
          Gogh
        </h1>
        <p>
          If you wish to be part of the community of KHANVAS, consider 'casting'
          your SHADOW
        </p>

        <div className="khanvas__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Cast</button>
        </div>

        <div className="khanvas__header-content__people">
          <img src={people} alt="people" />
          <p>3 SHADOWS have been cast in the last year</p>
        </div>
      </div>

      <div className="khanvas__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
