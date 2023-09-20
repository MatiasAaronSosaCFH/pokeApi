import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.nombre} />
      <div className="card-content">
        <h2>{props.nombre}</h2>
        <p>{props.species}</p>
        <p>{props.tipo}</p>
      </div>
    </div>
  );
}

export default Card;
