import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Fragment = React.Fragment;
const Menu = () => (
  <Fragment>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whatkhanvas">What is KHANVAS?</a>
    </p>
    <p>
      <a href="#possibility">Explore</a>
    </p>
    <p>
      <a href="#features">SHADOWS</a>
    </p>
    <p>
      <a href="#blog">The Grand Library</a>
    </p>
  </Fragment>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="khanvas__navbar">
      <div className="khanvas__navbar-links">
        <div className="khanvas__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="khanvas__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="khanvas__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="khanvas__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="khanvas__navbar-menu_container scale-up-center">
            <div className="khanvas__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="khanvas__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
