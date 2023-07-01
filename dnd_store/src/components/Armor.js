import React from 'react'

function Armor({armor}) {
  console.log(armor)
  return (
      <div className="cardContainer">
        <Card items={weapons} handleDelete={handleDelete}/>
      </div>  )
}

export default Armor
