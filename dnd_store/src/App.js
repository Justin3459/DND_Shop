import React, { useEffect } from "react";
import {useState} from "react"
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Weapons from "./components/Weapons";
import Armor from "./components/Armor";
import New from "./components/New";
function App() {
  const [shop, setShop] = useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:3000/shop")
    .then((r)=>r.json())
    .then((data) =>{setShop(data.map((item)=>item))})
  },[])
  return (
    <>
      <header>
        <h1> Item Store </h1>

      </header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="weapons">Weapons</NavLink>
        <NavLink to="armor">Armor</NavLink>
        <NavLink to="new">new</NavLink>
      </nav>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="weapons" element={<Weapons weapons={shop}/>}></Route>
        <Route path="armor" element={<Armor armor={""}/>}></Route>
        <Route path="new" element={<New />}></Route>
      </Routes>
    </>
  );
}

export default App;

