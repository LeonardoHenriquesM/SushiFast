import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import boxes from '../../public/boxes.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../composants/Menus.css';

export default function Menus() {

  const [menus] = useState(boxes);
  const [search, setSearch] = useState("");

  // Filtres avancés
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [pieces, setPieces] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const allIngredients = [...new Set(
    menus.flatMap(menu => menu.saveurs)
  )];

  const toggleIngredient = (ing) => {
    if (selectedIngredients.includes(ing)) {
      setSelectedIngredients(selectedIngredients.filter(i => i !== ing));
    } else {
      setSelectedIngredients([...selectedIngredients, ing]);
    }
  };

  // FILTRAGE GLOBAL
  const filteredMenus = menus.filter(menu => {
    // nom
    if (!menu.nom.toLowerCase().includes(search.toLowerCase())) return false;

    // ingrédients
    if (selectedIngredients.length > 0) {
      const hasAll = selectedIngredients.every(ing => menu.saveurs.includes(ing));
      if (!hasAll) return false;
    }

    // pièces
    if (pieces && Number(menu.pieces) !== Number(pieces)) return false;

    // prix min
    if (minPrice && menu.prix < Number(minPrice)) return false;

    // prix max
    if (maxPrice && menu.prix > Number(maxPrice)) return false;

    return true;
  });

  return (
    <div className="container my-5">

      <h1 className="mb-4 text-center">Tous les menus</h1>
      <p className="text-center mb-4">Découvrez nos menus et choisissez votre préféré !</p>

      {/* Barre de recherche + bouton filtres */}
      <div className="d-flex justify-content-center align-items-center gap-3 mb-5">

        {/* Barre de recherche */}
        <input
          type="text"
          placeholder="Rechercher un menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
          style={{ maxWidth: "350px", borderColor: "#FF7F50" }}
        />

        {/* Bouton FILTRES AVANCÉS (ouvre modal) */}
        <button
          className="btn btn-warning d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#filtersModal"
        >
          <i className="bi bi-filter-left me-2"></i> Filtres
        </button>

      </div>

      {/* --------------------------------------------
          MODAL FILTRES AVANCÉS
      --------------------------------------------- */}
      <div className="modal fade" id="filtersModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Filtres avancés</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">

              {/* INGREDIENTS */}
              <h5>Saveurs</h5>
              <div className="d-flex flex-wrap gap-3 mb-4">
                {allIngredients.map(ing => (
                  <label key={ing} className="border p-2 rounded">
                    <input
                      type="checkbox"
                      className="me-1"
                      checked={selectedIngredients.includes(ing)}
                      onChange={() => toggleIngredient(ing)}
                    />
                    {ing}
                  </label>
                ))}
              </div>

              {/* PIECES */}
              <h5>Nombre de pièces</h5>
              <select
                className="form-select w-auto mb-4"
                value={pieces}
                onChange={(e) => setPieces(e.target.value)}
              >
                <option value="">Toutes</option>
                <option value="10">10 pièces</option>
                <option value="11">11 pièces</option>
                <option value="12">12 pièces</option>
                <option value="13">13 pièces</option>
                <option value="18">18 pièces</option>
                <option value="22">22 pièces</option>
                <option value="24">24 pièces</option>
              </select>

              {/* PRIX — SLIDER */}
              <h5>Prix maximum : <b>{maxPrice || 30} €</b></h5>
              <input
                type="range"
                min="13"
                max="30"
                value={maxPrice || 30}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="form-range"
              />

            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setSelectedIngredients([]);
                  setPieces("");
                  setMinPrice("");
                  setMaxPrice("");
                }}
              >
                Réinitialiser
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* LISTE DES MENUS */}
      <div className="row">
        {filteredMenus.map(menu => (
          <div key={menu.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={`/${menu.image}.jpg`} className="card-img-top" alt={menu.nom} />
              <div className="card-body d-flex flex-column">
                <h5>{menu.nom}</h5>
                <p>Saveurs : {menu.saveurs.join(", ")}</p>
                <p>Pièces : {menu.pieces}</p>
                <p>Prix : {menu.prix} €</p>
                <Link to={`/menus/${menu.id}`} className="btn-menus mt-auto">
                  Voir détails
                </Link>
              </div>
            </div>
          </div>
        ))}

        {filteredMenus.length === 0 && (
          <p className="text-center mt-5">Aucun menu ne correspond aux filtres.</p>
        )}
      </div>


    </div>
  );
}

