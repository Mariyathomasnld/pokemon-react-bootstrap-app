import React from "react";

function Pokemon(props) {
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <img style={{width:"200px"}} src={props.src} alt="pokemon cards" />
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>
      <p>Abilities: {props.abilities}</p>
    </div>
  );
}

export default Pokemon;
