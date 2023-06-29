import React, { useEffect, useRef, useState } from "react";
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

  const dialogRef = useRef(null)

  return (
    <>
      <Header shop={shop} dialogRef={dialogRef}/>
      <dialog ref={dialogRef}>
        <New onFormSubmited={onFormSubmit}/>
      </dialog>
    </>
  );
}

export default App;
