import React from "react";



function Weapons(weapons) {
    // console.log(weapons.weapons)
    const weaponArray = weapons.weapons
    const handleCard = weaponArray.map((item) => 
    <div key={item.id} className="card">
        <h1 className="cardName">{item.name}</h1>
        <p>Cost: {item.cost}</p>
        <p>Damage: {item.damage}</p>
        <p>weight: {item.weight}</p>
        <p>properties: {item.properties}</p>
        <p>type: {item.type}</p>
    </div>
    ) 
return (
    <>
        <h1>{handleCard}</h1>
    </>
  );
}

export default Weapons;
