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

  const dialogRef = useRef(null);
  const onCardAdd = (cardAdd) => setShop([...shop, cardAdd])
  return (
    <>
      <Header shop={shop} dialogRef={dialogRef} />
      <dialog ref={dialogRef}>
        <New
          onFormSubmited={(newShopData) => {
            dialogRef.current.close()
            onCardAdd(newShopData);
          }}
          onCardAdd={onCardAdd}
        />
      </dialog>
    </>
  );
}

export default App;
