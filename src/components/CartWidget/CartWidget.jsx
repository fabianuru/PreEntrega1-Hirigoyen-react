import React from 'react'
import { BsCart } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="cartwidget" >
      <BsCart size={30}/>  
        <span>0</span>
    </div>
  )
}

export default CartWidget