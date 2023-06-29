import React from 'react'

function New() {

    // const onSubmit = (id)=> fetch(`https://localhost:3000/${id}`, {Method:POST}).then(r=>r.json()).then()
  return (
   
    <form> 
        e.preventDefault()
        <p>Name:
        <input></input>
        </p>
        <p>Cost:
        <input></input>
        </p><p>Damage:
        <input></input>
        </p><p>Weight:
        <input></input>
        </p><p>Properties:
        <input></input>
        </p>
        <div>Type:
            <ul>
                <input type="radio" value="simple" name="type"/>Simple Weapon
            </ul>
            <ul>
                <input type="radio" value="martial" name="type"/>Martial Weapon
            </ul>
        </div>
        {/* <button onClick= {()=>handleSubmit(task.id)}>Submit</button> */}
    </form>
  )
}

export default New