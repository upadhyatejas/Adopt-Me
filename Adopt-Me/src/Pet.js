import React from "react";

export default function Pet({ name, animal, breed, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h3>{breed}</h3>
      <h4>{age} </h4>
    </div>
  );
}
