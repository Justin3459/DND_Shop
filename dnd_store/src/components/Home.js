import React from 'react'

import { NavLink, Route, Routes } from 'react-router-dom'
import Armor from "./Armor";
import Weapons from './Weapons';

function Home() {
  return (
    <>
    <div className="NavCard">
      <nav>
        <h1 id='weaponLink' >
            <NavLink to="weapons">Weapons</NavLink>
        </h1>
        <h1 id='armorLink'>
            <NavLink to="armor">Armor</NavLink>
        </h1>
      </nav>
    </div>
      <Routes>
        <Route path="weapons" element={<Weapons weapons={""}/>}></Route>
        <Route path="armor" element={<Armor armor={""}/>}></Route>
      </Routes>
    </>
  )
}

export default Home