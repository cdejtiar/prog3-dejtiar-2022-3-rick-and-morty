import React from "react";
import styles from "./PopUp.module.css";

const PopUp = ({ display, handleShowPopUp, character }) => {
  return (
    <div
      className={`${styles["pop_up_wrapper"]} ${
        display ? styles["display"] : ""
      }`}
    >
      <h2 className={styles["titulo"]}>Episodios en los que aparece</h2>
      <h3>{character.name}</h3>
      <button className={`button is-rounded ${styles["btn3"]}`} onClick={() => handleShowPopUp()}>Cerrar</button>
    </div>
  );
};

export default PopUp;
