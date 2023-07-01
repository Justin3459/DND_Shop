import React from "react";
import Home from "./Home";
import Weapons from "./Weapons";
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
      <header className="Header">
        <div className="Title">
          <h1 > Item Store </h1>
          <button onClick={handleModal} className="modal">Add</button>
        </div>

        <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="weapons">Weapons</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route
          path="weapons"
          element={<Weapons weapons={shop} handleDelete={handleDelete} />}
        ></Route>
      </Routes>
    </>
  );
}

export default Header;
