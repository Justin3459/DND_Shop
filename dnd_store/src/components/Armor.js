import React from "react";
import Card from "./Card";

function Armor({ armor, handleDelete }) {
  console.log(armor);
  return (
    <>
      <Card items={armor[0]} handleDelete={handleDelete} />
    </>
  );
}

export default Armor;
