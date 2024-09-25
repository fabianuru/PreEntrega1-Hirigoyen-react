import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <nav>
        <h2>E-Commerce</h2>
        <ul>
            <li>Home</li>
            <li>Nosotros</li>
            <li>Productos</li>
            <li>Contacto</li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar