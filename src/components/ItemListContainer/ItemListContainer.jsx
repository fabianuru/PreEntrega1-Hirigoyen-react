import React from 'react'
import "./itemlistcontainer.scss"

const ItemListContainer = ({greeting}) => {
  return (
    <div className="itemlistcontainer" >
        <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer