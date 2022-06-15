import React from "react";
import styles from "./PopUp.module.css";

const PopUp = ({ display, character }) => {
  return (
    <div
      className={`${styles["pop_up_wrapper"]} ${
        display ? styles["display"] : ""
      }`}
    >
      <h2 className={styles["titulo"]}>Aparece en una cantidad de {`${character.episodes}`}</h2>
      <h3>{character.episodes}</h3>
      <button className={`button is-rounded ${styles["btn3"]}`}>Cerrar</button>
    </div>
  );
};

export default PopUp;
