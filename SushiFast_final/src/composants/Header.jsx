import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar-sushi">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          SushiFast 🍣
        </Link>

        <div className="navbar-links">
          <NavLink to="/" className="nav-item">
            Accueil
          </NavLink>
          <NavLink to="/menus" className="nav-item">
            Menus
          </NavLink>
          <NavLink to="/filtres" className="nav-item">
            Filtres
          </NavLink>
        </div>
      </div>
    </nav>
  );
}