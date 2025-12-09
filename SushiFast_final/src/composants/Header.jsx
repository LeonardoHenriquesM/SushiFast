import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container-fluid">
        
        {/* LOGO */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          🍣 SushiFast
        </Link>

        {/* BURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS + SEARCH */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/menus">Menus</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/filtres">Filtres</Link>
            </li>
          </ul>

          {/* SEARCH BAR */}
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Rechercher..."
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>

      </div>
    </nav>
  );
}
