import React from "react";
import Home from "./Home";
import Weapons from "./Weapons";
import Armor from "./Armor";
import { Route, Routes, NavLink } from "react-router-dom";

function Header({ shop, dialogRef, setShopItems }) {
  const handleModal = () => {
    dialogRef.current.showModal();
  };
  const handleDelete = (id) => {
    const filterShopItems = shop.filter((shopItems) => shopItems.id !== id);
    fetch(`http://localhost:3000/shop/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(setShopItems(filterShopItems));
  };
  const mapArmor = shop.map((data)=>data.armor.map((items)=>items))
  const mapWeapons = shop.map((data)=> data.weapons.map((items)=> items))
  return (
    <>
      <header className="Header">
        <div className="Title">
          <h1 > Item Store </h1>
          {/* <input input="search"></input> */}
          <button onClick={handleModal} className="modal">Add</button>
        </div>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="weapons">Weapons</NavLink>
          <NavLink to="armor">Armor</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route
          path="weapons"
          element={<Weapons weapons={mapWeapons} handleDelete={handleDelete} />}
        ></Route>
        <Route path="armor" element={<Armor armor={mapArmor} handleDelete={handleDelete} />}></Route>
      </Routes>
    </>
  );
}

export default Header;
