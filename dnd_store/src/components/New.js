import React from "react";

function New() {
  // const onSubmit = (id)=> fetch(`https://localhost:3000/${id}`, {Method:POST}).then(r=>r.json()).then()
  
  return (
    <form>
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
        <select>
          <option>Simple Weapon</option>
          <option>Martial Weapon</option>
          <option>Light Armor</option>
          <option>Medium Armor</option>
          <option>Heavy Armor</option>
        </select>
      </label>
      <button>Submit</button>
      {/* <button onClick= {()=>handleSubmit(task.id)}>Submit</button> */}
    </form>
  );
}

export default New;
