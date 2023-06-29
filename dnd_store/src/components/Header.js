import React from "react";
import Home from "./Home";
import Weapons from "./Weapons";
// import Armor from "./Armor";
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
  return (
    <>
      <header>
        <div>
          <h1> Item Store </h1>
          {/* <input input="search"></input> */}
          <button onClick={handleModal}>Add</button>
        </div>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="weapons">Weapons</NavLink>
          {/* <NavLink to="armor">Armor</NavLink> */}
        </nav>
      </header>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route
          path="weapons"
          element={<Weapons weapons={shop} handleDelete={handleDelete} />}
        ></Route>
        {/* <Route path="armor" element={<Armor armor={""} />}></Route> */}
      </Routes>
    </>
  );
}

export default Header;
