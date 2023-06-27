import React from 'react'

function New() {
  return (
    <form>
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


    </form>
  )
}

export default New