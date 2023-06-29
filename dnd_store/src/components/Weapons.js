import React from "react";
import Card from "./Card";


function Weapons({weapons, handleDelete}) {
    // const handleDelete = (id) => console.log(id)
return (
    <>
        <Card items={weapons} handleDelete={handleDelete}/>
    </>
  );
}

export default Weapons;
