import React from "react";
import Card from "./Card";


function Weapons({weapons, handleDelete}) {
return (
    <>
        <Card items={weapons[0]} handleDelete={handleDelete}/>
    </>
  );
}

export default Weapons;
