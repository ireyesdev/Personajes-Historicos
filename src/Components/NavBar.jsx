import React from 'react';
import { Link } from 'react-router-dom';
import logo  from '../asset/logos/Logo-Header.png';
import '../styles/NavBar.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="logoContainer">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="menu">
        <li className="menuItem">
          <Link to="" className="link">Inicio</Link>
        </li>
        <li className="menuItem">
          <Link to="/personajes" className="link">Personajes</Link>
        </li>
        <li className="menuItem">
          <span className="link">Contacto</span>
          <div className="dropdown-content">
            <a href="https://www.linkedin.com/in/ireyesdev/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/ireyesdev" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;




        
