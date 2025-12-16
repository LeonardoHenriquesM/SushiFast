import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from "react";
import Header from './composants/Header';
import Footer from './composants/Footer';
import Accueil from './composants/Accueil';
import Menus from './composants/Menus';
import Contact from './composants/Contact';
import DetailsMenu from './composants/DetailsMenu';

export default function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="main-wrapper">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Accueil />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/menus/:id" element={<DetailsMenu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
