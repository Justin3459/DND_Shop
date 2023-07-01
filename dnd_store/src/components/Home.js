import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
// import Armor from "./Armor";
import Weapons from './Weapons';

function Home() {
  return (
    <>
    <div className="navContainer">
      <nav>
        <h1 id='weaponLink' >
            <NavLink to="weapons">Weapons</NavLink>
        </h1>
      </nav>
    </div>
      <Routes>
        <Route path="weapons" element={<Weapons/>}/>
      </Routes>
    </>
  )
}

export default Home