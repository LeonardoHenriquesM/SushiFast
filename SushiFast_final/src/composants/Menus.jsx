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
  const [maxPrice, setMaxPrice] = useState("");

  // Panier
  const [cart, setCart] = useState([]);

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Tous les ingrédients disponibles
  const allIngredients = [...new Set(menus.flatMap(menu => menu.saveurs))];

  const toggleIngredient = (ing) => {
    if (selectedIngredients.includes(ing)) {
      setSelectedIngredients(selectedIngredients.filter(i => i !== ing));
    } else {
      setSelectedIngredients([...selectedIngredients, ing]);
    }
  };

  // Bouton scroll top
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ajouter au panier avec animation
  const addToCart = (menu, e) => {
    // Animation image vers le panier
    const img = e.currentTarget.closest(".card").querySelector("img");
    const imgClone = img.cloneNode(true);
    const rect = img.getBoundingClientRect();

    imgClone.style.position = "fixed";
    imgClone.style.left = rect.left + "px";
    imgClone.style.top = rect.top + "px";
    imgClone.style.width = rect.width + "px";
    imgClone.style.transition = "all 0.8s ease-in-out";
    imgClone.style.zIndex = 1000;
    imgClone.style.borderRadius = "10px";

    document.body.appendChild(imgClone);

    const cartBtn = document.querySelector("button[data-bs-target='#cartModal']");
    const cartRect = cartBtn.getBoundingClientRect();

    setTimeout(() => {
      imgClone.style.left = cartRect.left + "px";
      imgClone.style.top = cartRect.top + "px";
      imgClone.style.width = "0px";
      imgClone.style.opacity = 0;
    }, 50);

    setTimeout(() => {
      document.body.removeChild(imgClone);
    }, 850);

    setCart(prev => [...prev, menu]);
  };

  // FILTRAGE GLOBAL
  const filteredMenus = menus.filter(menu => {
    if (!menu.nom.toLowerCase().includes(search.toLowerCase())) return false;
    if (selectedIngredients.length > 0) {
      const hasAll = selectedIngredients.every(ing => menu.saveurs.includes(ing));
      if (!hasAll) return false;
    }
    if (pieces && Number(menu.pieces) !== Number(pieces)) return false;
    if (maxPrice && menu.prix > Number(maxPrice)) return false;
    return true;
  });

  // Total du panier
  const total = cart.reduce((sum, item) => sum + item.prix, 0);

  return (
    <div className="container my-5">

      <h1 className="mb-4 text-center">Tous les menus</h1>
      <p className="text-center mb-4">Découvrez nos menus et choisissez votre préféré !</p>

      {/* Barre de recherche + boutons filtres et panier */}
      <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
        <input
          type="text"
          placeholder="Rechercher un menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
          style={{ maxWidth: "350px", borderColor: "#FF7F50" }}
        />

        <button
          className="btn btn-warning d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#filtersModal"
        >
          <i className="bi bi-filter-left me-2"></i> Filtres
        </button>

        <button
          className="btn btn-warning ms-3"
          data-bs-toggle="modal"
          data-bs-target="#cartModal"
        >
          Panier ({cart.length})
        </button>
      </div>

      {/* MODAL FILTRES AVANCÉS */}
      <div className="modal fade" id="filtersModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Filtres avancés</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">

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
                <div className="d-flex gap-2 mt-auto">
                  <Link to={`/menus/${menu.id}`} className="btn-menus flex-1">
                    Voir détails
                  </Link>
                  <button
                    className="btn-menus flex-1"
                    onClick={(e) => addToCart(menu, e)}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredMenus.length === 0 && (
          <p className="text-center mt-5">Aucun menu ne correspond aux filtres.</p>
        )}
      </div>

      {/* BOUTON SCROLL TOP */}
      {showScroll && (
        <button
          className={`scroll-top-btn ${showScroll ? "show" : ""}`}
          onClick={scrollTop}
          title="Remonter en haut"
        >
          ↑
        </button>
      )}

      {/* MODAL PANIER */}
      <div className="modal fade" id="cartModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Votre Panier</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {cart.length === 0 ? (
                <p>Votre panier est vide.</p>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center mb-3">
                      <span>{item.nom}</span>
                      <div className="d-flex align-items-center gap-3">
                        <span>{item.prix} €</span>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => removeFromCart(index)}
                        >
                          ❌
                        </button>
                      </div>
                    </div>
                  ))}
                  <hr />
                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total :</span>
                    <span>{total} €</span>
                  </div>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-success"
                disabled={cart.length === 0}
                onClick={() => { alert("Achat effectué !"); setCart([]); }}
                data-bs-dismiss="modal"
              >
                Acheter
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
