import React, { useRef } from "react";
import Home from "./Home";
import Weapons from "./Weapons";
// import Armor from "./Armor";
import { Route, Routes, NavLink } from "react-router-dom";

function Header({ shop }) {
  const dialogRef = useRef(null);
  const handleModal = () => {
    dialogRef.current.showModal();
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
        <Route path="weapons" element={<Weapons weapons={shop} />}></Route>
        {/* <Route path="armor" element={<Armor armor={""} />}></Route> */}
      </Routes>
    </>
  );
}

export default Header;
