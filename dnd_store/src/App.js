import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import New from "./components/New";

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
      <Header shop={shop}/>
      <dialog>
        <New>
          
        </New>
      </dialog>
    </>
  );
}

export default App;
