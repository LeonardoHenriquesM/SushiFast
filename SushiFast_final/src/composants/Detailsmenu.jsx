import { useParams } from 'react-router-dom';
import boxes from '../../public/boxes.json';
import React, { useState } from 'react';
import '../composants/DetailsMenu.css';

export default function DetailsMenu() {
  const { id } = useParams();
  const [zoom, setZoom] = useState(false); 

  const menu = boxes.find(m => String(m.id) === id);

  if (!menu) {
    return <p className="text-center mt-5">Menu non trouvé.</p>;
  }

  return (
    <div className="main-content">
      <div className="container my-5">
        <button className="btn-retour mb-4" onClick={() => window.history.back()}>
          ← Retour
        </button>

        <div className="row align-items-center detail-row">
          {/* Détails à gauche */}
          <div className="col-lg-6 mb-4 detail-left">
            <h1 className="mb-3">{menu.nom}</h1>
            <p><strong>Saveurs :</strong> {menu.saveurs.join(", ")}</p>
            <p><strong>Nombre de pièces :</strong> {menu.pieces}</p>
            <p><strong>Prix :</strong> {menu.prix} €</p>
            <p>
              Chaque menu est préparé avec des ingrédients frais et de qualité, 
              soigneusement sélectionnés pour vous offrir une expérience unique.
            </p>
          </div>

          {/* Image à droite */}
          <div className="col-lg-6 text-center detail-right">
            <img 
              src={`/${menu.image}.jpg`} 
              alt={menu.nom} 
              className="img-fluid rounded shadow detail-img"
              style={{ maxHeight: "500px", cursor: "pointer" }}
              onClick={() => setZoom(true)}
            />
          </div>
        </div>

        {/* Lightbox simple */}
        {zoom && (
          <div className="lightbox" onClick={() => setZoom(false)}>
            <img src={`/${menu.image}.jpg`} alt={menu.nom} className="lightbox-img" />
          </div>
        )}
      </div>
    </div>
  );
}
