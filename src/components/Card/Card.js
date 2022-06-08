import React from "react";

const Card = ({character:{ name, image, status, species, origin, episodes}}) => {
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
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
            </div>
          </div>

          <div className="content">
            <ul>
              <li>Status: {status}</li>
              <li>Species: {species}</li>
              <li>Origin: {origin.name}</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
