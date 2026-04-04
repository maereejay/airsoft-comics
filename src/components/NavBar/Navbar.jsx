import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
  return (
  <nav className="navbarContainer">

      <div className='logo'>
        <img src="/logo/Airsoft text transparet.png" alt="" />
      </div>
      <div className='navbarWrapper'>
      <ul className="navbar">

        <li>
          <NavLink to="/" end className={({isActive}) => isActive ? "activeNav" : ""}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/portfolio" className={({isActive}) => isActive ? "activeNav" : ""}>
            Portfolio
          </NavLink>
        </li>

        <li>
          <NavLink to="/pricing" className={({isActive}) => isActive ? "activeNav" : ""}>
            Pricing
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({isActive}) => isActive ? "activeNav" : ""}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/blog" className={({isActive}) => isActive ? "activeNav" : ""}>
            Blog
          </NavLink>
        </li>

      </ul>
     </div>
     

    </nav>

  );
}
