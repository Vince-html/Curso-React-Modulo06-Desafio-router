import React from 'react'
import '../styles/Header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li>
        <NavLink className="nav" to ="/">Produtos </NavLink>
        </li>
        <li>
          <NavLink className="nav"  to ="/contato">Contato </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
