import React from "react";



function Weapons(weapons) {
    // console.log(weapons.weapons)
    const weaponArray = weapons.weapons
    const handleCard = weaponArray.map((item) => 
    <div>
        <h1>{item.name}</h1>
        <p>Cost: {item.cost}</p>
    </div>
    ) 
return (
    <>
        <h1>{handleCard}</h1>
    </>
  );
}

export default Weapons;
