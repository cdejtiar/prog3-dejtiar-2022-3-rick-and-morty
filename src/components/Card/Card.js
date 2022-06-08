import React from "react";
import styles from './Card.module.css';

const Card = ({character:{ name, image, status, species, origin, episodes}, handleShowPopUp }) => {
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={image}
              alt="Placeholder"
            />
          </figure>
        </div>
        <div className={`card-content ${styles["card-bc"]}`}>
          <div className="media">
            <div className="media-content">
              <p className={`title is-4 ${styles["titulo"]}`}>{name}</p>
            </div>
          </div>

          <div className={`content ${styles["contenido"]}`}>
            <ul className={styles["ul"]}>
              <li>Status: {status}</li>
              <li>Species: {species}</li>
              <li>Origin: {origin.name}</li>
              </ul>
          </div>

          <button className={`button is-rounded ${styles["btn2"]}`} onClick={() => handleShowPopUp(true)}>Episodes</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
