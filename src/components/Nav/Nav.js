import React from "react";
import logo from "../../assets/Rick-and-Morty.png";
import './Nav.module.css';

const Nav = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="..">
          <img src={logo} alt="logo" width="150" height="28" />
        </a>

        <a
          href="https://www.fff.com"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href="https://www.fff.com" className="navbar-item">
            Watch on Netflix
          </a>

          <a href="https://www.fff.com" className="navbar-item">
            Contact
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href="https://www.fff.com" className="navbar-link">
              More
            </a>

            <div className="navbar-dropdown">
              <a href="https://www.fff.com" className="navbar-item is-active">
                Characters
              </a>
              <a href="https://www.fff.com" className="navbar-item">
                Worlds
              </a>
              <a href="https://www.fff.com" className="navbar-item">
                Species
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end"></div>
      </div>
    </nav>
  );
};

export default Nav;
