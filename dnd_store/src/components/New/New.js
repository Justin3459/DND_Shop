import React from "react";
import "./New.css";

function New({onFormSubmited}) {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new 
        FormData(e.target))
    fetch("http://localhost:3000/shop", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(r=>r.json())
    .then(responseForm => onFormSubmited(responseForm))
  };
  return (
    <div className="formContainer">
    <form onSubmit={onSubmit} className="newItemForm">
      <label>
        Name:
        <input name="name"></input>
      </label>
      <label>
        Cost:
        <input name="cost"></input>
      </label>
      <label>
        Damage:
        <input name="damage"></input>
      </label>
      <label>
        Weight:
        <input name="weight"></input>
      </label>
      <label>
        Properties:
        <textarea name="properties"></textarea>
      </label>
      <label>
        Type:
        <select name="type">
          <option>Simple Weapon</option>
          <option>Martial Weapon</option>
        </select>
      </label>
      <label>
        Image:
        <input name="image"></input>
      </label>
      <button>Submit</button>
    </form>
    </div>
  );
}

export default New;
