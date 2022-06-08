import React from "react";
import logo from "../../assets/Rick-and-Morty.png";
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={`container navbar ${styles["navbar"]}`} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="..">
          <img src={logo} alt="logo" width="112" height="28" />
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

      <div id="navbarBasicExample" className={`navbar-menu ${styles["navbar-menu"]}`}>
        <div className="navbar-start">
          <a href="https://www.netflix.com/watch/80098733?trackId=255824129&tctx=0%2C0%2CNAPA%40%40%7C42b6d692-dc43-45c7-97bb-db9c8e792373-331946766_titles%2F1%2F%2Frick%2F0%2F0%2CNAPA%40%40%7C42b6d692-dc43-45c7-97bb-db9c8e792373-331946766_titles%2F1%2F%2Frick%2F0%2F0%2Cunknown%2C%2C42b6d692-dc43-45c7-97bb-db9c8e792373-331946766%7C1%2CtitlesResults%2C80014749" target="_blank" referrer="noreferrer" className={`navbar-item ${styles["navbar-item"]}`} rel="noreferrer">
            Watch on Netflix
          </a>

          <a href="https://www.fff.com" className={`navbar-item ${styles["navbar-item"]}`}>
            Contact
          </a>

          <div className={`navbar-item ${styles["navbar-item"]} has-dropdown is-hoverable`}>
            <a href=".." className={`navbar-item navbar-link ${styles["navbar-item"]}`}>
              More
            </a>

            <div className="navbar-dropdown">
              <a href="https://www.fff.com" className="navbar-item">
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
      </div>
    </nav>
  );
};

export default Nav;
