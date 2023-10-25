// src/components/NavBar.js
import React from "react";
import CartWidget from "./CartWidget";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-with-padding">
      <span className="navbar-brand">GAMU</span>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Bebidas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Comida
            </a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
