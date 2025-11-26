import React from 'react';
import { Link } from 'react-router-dom';
import menusData from '../../public/boxes.json'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Accueil() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Bienvenue sur SushiFast 🍣</h1>
      <p className="text-center mb-5">
        Découvrez nos menus et choisissez votre préféré !
      </p>

      <div className="row">
        {menusData.map((menu) => (
          <div key={menu.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
  src={`/${menu.image}.jpg`}  // <-- ici on ajoute le "/" et ".jpg"
  className="card-img-top"
  alt={menu.nom}
  style={{ height: '200px', objectFit: 'cover' }}
/>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{menu.nom}</h5>
                <p className="card-text">{menu.pieces} pièces</p>
                <p className="card-text fw-bold">{menu.prix} €</p>
                <Link
                  to={`/menu/${menu.id}`}
                  className="btn btn-primary mt-auto"
                >
                  Voir le détail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
