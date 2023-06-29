import React from 'react'
import Home from "./Home";
import Weapons from "./Weapons";
import Armor from "./Armor";
import New from "./New";
import { Route, Routes, NavLink } from "react-router-dom";

function Header({shop}) {
  return (
    <>
    <header>
      <div>
        <h1> Item Store </h1>
        <input input="search"></input>
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="weapons">Weapons</NavLink>
        <NavLink to="armor">Armor</NavLink>
        <NavLink to="new">new</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="*" element={<Home />}></Route>
      <Route path="weapons" element={<Weapons weapons={shop} />}></Route>
      <Route path="armor" element={<Armor armor={""} />}></Route>
      <Route path="new" element={<New />}></Route>
    </Routes>
  </>
  )
}

export default Header