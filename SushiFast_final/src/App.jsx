import { Routes, Route, Link } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Menus from './pages/Menus'
import DetailsMenu from './pages/DetailsMenu'
import FiltresMenus from './pages/FiltresMenus'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> | 
        <Link to="/menus">Menus</Link> | 
        <Link to="/filtres">Filtres</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/menus/:id" element={<DetailsMenu />} />
        <Route path="/filtres" element={<FiltresMenus />} />
      </Routes>
    </div>
  )
}
