import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import boxes from '../../public/boxes.json'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../composants/Menus.css'


export default function Menus() {


  const [menus, setMenus] = useState([]);
  const [search, setSearch] = useState(""); // 🔹 état pour la recherche

  useEffect(() => {
    setMenus(boxes);
  }, []);

  //  Filtrer les menus selon la recherche de saveurs
  const filteredMenus = menus.filter(menu =>
    menu.saveurs.some(s => s.toLowerCase().includes(search.toLowerCase()))
  );



  return (
    <div>

      {<div className="container my-5">
        <h1 className="mb-4 text-center">Tous les menus</h1>
        <p className="text-center mb-5">
          Découvrez nos menus et choisissez votre préféré !
        </p>

        <div className="mb-5 text-center">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Rechercher une saveur..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control mx-auto"
              style={{ maxWidth: "400px", borderColor: "#FF7F50", borderWidth: "2px" }}
            />
          </form>
        </div>

        <div className="row menu-row">
          {filteredMenus.map(menu => (
            <div key={menu.id} className="col-md-4 mb-4">
              <div className="card h-100">
  <img src={`/${menu.image}.jpg`} className="card-img-top" alt={menu.nom} />
  <div className="card-body d-flex flex-column">
    <h5 className="card-title">{menu.nom}</h5>
    <p className="card-text">Saveurs : {menu.saveurs.join(", ")}</p>
    <p className="card-text">Pièces : {menu.pieces}</p>
    <p className="card-text">Prix : {menu.prix} €</p>
    <Link to={`/menus/${menu.id}`} className="btn-menus mt-auto">
      Voir détails
    </Link>
  </div>
</div>

            </div>
          ))}

          {filteredMenus.length === 0 && (
            <p className="text-center mt-4">Aucun menu ne correspond à cette saveur.</p>
          )}

        </div>
      </div>}
    </div>
  )
}
