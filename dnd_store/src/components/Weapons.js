import React from "react";
import Card from "./Card";


function Weapons({weapons, handleDelete}) {
    // const handleDelete = (id) => console.log(id)
return (
    <>
        <Card items={weapons[0]} handleDelete={handleDelete}/>
    </>
  );
}

export default Weapons;
