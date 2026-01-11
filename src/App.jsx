
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AstroProgram from './pages/AstroProgram';
import FemaleBodyLiteracy from './pages/FemaleBodyLiteracy';
import InterNet from './pages/InterNet';
import Contact from './pages/Contact';
import Weblog from './pages/Weblog';
import Home from './pages/Home';
import BYDH from './pages/Blog_BYDH';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/astroprogram" element={<AstroProgram />} />
      <Route path="/femalebodyliteracy" element={<FemaleBodyLiteracy />} />
      <Route path="/internet" element={<InterNet />} />
      <Route path="/weblog" element={<Weblog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Blog_BYDH" element={<BYDH />} />
      
    </Routes>
  );
}

export default App;
