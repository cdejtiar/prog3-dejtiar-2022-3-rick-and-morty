import React from "react";
import styles from "./PopUp.module.css";

const PopUp = ({ display, handleShowPopUp }) => {
  return (
    <div
      className={`${styles["pop_up_wrapper"]} ${
        display ? styles["display"] : ""
      }`}
    >
      <h2 className={styles["titulo"]}>Episodios en los que aparece</h2>
      <button className={`button is-rounded ${styles["btn3"]}`} onClick={() => handleShowPopUp(false)}>Cerrar</button>
    </div>
  );
};

export default PopUp;
