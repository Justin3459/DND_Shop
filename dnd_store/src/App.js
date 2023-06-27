import React, { useEffect } from "react";
import {useState} from "react"
import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Weapons from "./components/Weapons";
import Armor from "./components/Armor";

function App() {
  const [shop, setShop] = useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:3000/shop")
    .then((r)=>r.json())
    .then((data) =>{setShop(data.map((item)=>item))})
  },[])
  
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="weapons">Weapons</NavLink>
        <NavLink to="armor">Armor</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="weapons" element={<Weapons weapons={shop}/>}></Route>
        <Route path="armor" element={<Armor armor={""}/>}></Route>
      </Routes>
    </>
  );
}

export default App;

