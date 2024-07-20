import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Galeria from './Galeria';
import Contacto from './Contacto';

const MainContent = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </main>
  );
};

export default MainContent;
