import React from "react";
import styles from "./Card.module.css";

const Card = ({ character }) => {
  const { name, image, status, species, origin, location } = character;
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Placeholder" />
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
              <li>
                <i className={`fa-solid fa-circle`}></i>Status: {status}
              </li>
              <li>
              <i className="fa-solid fa-user"></i>Species: {species}
              </li>
              <li>
                <i className="fa-solid fa-globe"></i>Origin: {origin.name}
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>Location: {location.name}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
