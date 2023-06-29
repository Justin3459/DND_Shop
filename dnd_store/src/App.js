import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/shop")
      .then((r) => r.json())
      .then((data) => {
        setShop(data.map((item) => item));
      });
  }, []);
  return (
    <>
      <Header shop={shop}></Header>
    </>
  );
}

export default App;
