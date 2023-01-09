import React from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'

function Header() {
  const activeClass = (({ isActive }) => isActive ? 'current' : undefined)

  return (
    <ul>
      <NavLink className={activeClass} to="/" end>Register</NavLink>
      <NavLink className={activeClass} to="upload">Upload</NavLink>
      <NavLink className={activeClass} to="view">View</NavLink>
    </ul>
  );
}

export default Header;
