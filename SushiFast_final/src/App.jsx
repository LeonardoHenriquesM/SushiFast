import { Routes, Route, Link } from 'react-router-dom'
import Header from './composants/Header'
import Footer from './composants/Footer'
import Accueil from './composants/Accueil'
import Menus from './composants/Menus'
import FiltresMenus from './composants/FiltresMenus'
import DetailsMenu from './composants/Detailsmenu'

export default function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/menus/:id" element={<DetailsMenu />} />
          <Route path="/filtres" element={<FiltresMenus />} />
        </Routes>
    </>
  )
}