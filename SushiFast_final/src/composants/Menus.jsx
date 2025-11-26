import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import boxes from '../../public/boxes.json'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Menus() {

    const [menus, setMenus] = useState([])

    useEffect(() => {
        setMenus(boxes)
    }, [])
  return (
    <div>

      <h1>Tous les menus</h1>
      {<div className="container mt-4">
      <h1 className="mb-4 text-center">Tous les menus</h1>
      <div className="row">
        {menus.map(menu => (
          <div key={menu.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={menu.image} className="card-img-top" alt={menu.nom} />
              <div className="card-body">
                <h5 className="card-title">{menu.nom}</h5>
                <p className="card-text">Pièces : {menu.pieces}</p>
                <p className="card-text">Prix : {menu.prix} €</p>
                <Link to={`/menus/${menu.id}`} className="btn btn-primary">
                  Voir détails
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>}
    </div>
  )
}
