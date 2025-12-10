import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Accueil.css"; 

export default function Accueil() {
  return (
    <motion.div
      className="accueil"
      initial={{ opacity: 0, y: 30 }}       // état initial
      animate={{ opacity: 1, y: 0 }}       // animation entrée
      exit={{ opacity: 0, y: -30 }}        // animation sortie
      transition={{ duration: 0.4 }}       // durée de l'animation
    >
    <div className="accueil">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content text-center">
          <h1 className="display-3 fw-bold text-white">
            SushiFast 🍣
          </h1>

          <p className="lead text-white-50">
            Découvrez des menus frais, variés et préparés avec passion.
          </p>

          <Link to="/menus" className="btn-sushi">
            Explorer les menus
          </Link>
        </div>
      </section>

      {/* ===== SECTION 2 ===== */}
      <section className="container py-5">
        <h2 className="text-center mb-4 fw-bold">Pourquoi choisir SushiFast ?</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow">
              <img src="/img/sushi4.webp" className="card-img-top" alt="Sushi" />
              <div className="card-body">
                <h5 className="card-title">Des ingrédients frais</h5>
                <p className="card-text">
                  Chaque menu est préparé avec des produits ultra frais,
                  sélectionnés avec soin.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow">
              <img src="/img/sushi2.webp" className="card-img-top" alt="Sushi" />
              <div className="card-body">
                <h5 className="card-title">Des recettes authentiques</h5>
                <p className="card-text">
                  Inspirées de la cuisine japonaise traditionnelle et revisitées
                  par nos chefs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow">
              <img src="/img/sushi3.webp" className="card-img-top" alt="Sushi" />
              <div className="card-body">
                <h5 className="card-title">Une préparation minute</h5>
                <p className="card-text">
                  Vos commandes sont assemblées au moment où vous les passez,
                  pour une fraîcheur incomparable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta text-center py-5 text-white">
        <h2 className="fw-bold">Prêt à goûter nos meilleurs menus ?</h2>
        <Link to="/menus" className="btn btn-light btn-lg mt-3">
          Voir les Menus
        </Link>
      </section>

    </div>
    </motion.div>
  );
}
