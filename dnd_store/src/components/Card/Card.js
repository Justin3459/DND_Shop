import React from "react";
import "./Card.css"

function Card({items, handleDelete}) {
  const itemArray = items;
  const handleCard = itemArray.map((item) => (
    <section key={item.id} className="card">
      <h1 className="cardName">{item.name}</h1>
      <img src={item.image} alt={item.name}></img>
      <p>Cost: {item.cost}</p>
      <p>Damage: {item.damage}</p>
      <p>weight: {item.weight}</p>
      <p>properties: {item.properties}</p>
      <p>type: {item.type}</p>
      <button onClick={()=>handleDelete(item.id)} value={item.id}>Delete</button>
    </section>
  ));

  return (
    <>
      {handleCard}
    </>
  );
}

export default Card;
