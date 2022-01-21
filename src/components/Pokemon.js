import React from "react";

function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">Pokemon name: {props.name}</h5>
        <img style={{ width: "200px" }} src={props.src} alt="pokemon cards" />
        <p>Weight: {props.weight} kg</p>
        <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
        <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>
        <p>: {props.abilities.length} abilities </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability, index) => {
          return (
            <li key={index} className="list-group-item">
              {ability}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pokemon;
