import React from "react";
import Card from "./Card/Card";


function Weapons({weapons, handleDelete}) {
return (
    <div className="cardContainer">
        <Card items={weapons} handleDelete={handleDelete}/>
    </div>
  );
}

export default Weapons;
