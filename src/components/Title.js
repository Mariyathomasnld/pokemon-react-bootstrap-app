import React from "react";

function Title(props) {
  return (
    <div>
      <img
        style={{ maxWidth: "400px", alignContent: "center" }}
        alt="title"
        src={props.src}
      />
      <h1>Pokemon Sun and Moon</h1>
    </div>
  );
}

export default Title;
