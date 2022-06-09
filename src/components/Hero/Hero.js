import React from "react";
import styles from "./Hero.module.css";
import Nav from "../Nav/Nav";
import backgroundImage from "../../assets/rick-and-morty-background.jpeg";
import logo from '../../assets/Rick-and-Morty.png';

const Hero = () => {
  return (
    <div>
      <img className={styles["image"]} src={backgroundImage} alt="Hero" />
      <img className={styles["logo"]} src={logo} alt="logo" />
      <h2 className={styles["subtitle"]}>The Wiki App</h2>
      <Nav />
    </div>
  );
};

export default Hero;
