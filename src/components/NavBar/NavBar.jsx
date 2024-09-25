import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./navbar.scss"

const NavBar = () => {
  return (
    <nav className="navbar">
        <h2 className ="brand">JUICELAB</h2>
        <ul className="links">
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