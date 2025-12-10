import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-sushi py-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">

        {/* Logo / Nom */}
        <div className="footer-logo mb-3 mb-md-0">
          <Link to="/" className="text-white fw-bold fs-4 text-decoration-none">
            SushiFast 🍣
          </Link>
        </div>

        {/* Liens rapides */}
        <div className="footer-links mb-3 mb-md-0">
          <Link to="/" className="footer-link">Accueil</Link>
          <Link to="/menus" className="footer-link">Menus</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </div>

      {/* Bas de page / copyright */}
      <div className="text-center text-white mt-4">
        &copy; {new Date().getFullYear()} SushiFast. Tous droits réservés.
      </div>
    </footer>
  );
}
