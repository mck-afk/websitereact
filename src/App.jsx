
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AstroProgram from './pages/AstroProgram';
import FemaleBodyLiteracy from './pages/FemaleBodyLiteracy';
import InterNet from './pages/InterNet';
import Contact from './pages/Contact';
import Weblog from './pages/Weblog';
import Home from './pages/Home';
import BYDH from './pages/Blog_BYDH';
import WWWW from './pages/Blog_WWWW';
import TGAC from './pages/Blog_TGAC';
import SCSJ from './pages/Blog_SCSJ';
import FWFM from './pages/Blog_FWFM';
import AICR from './pages/Blog_AICR';
import WITC from './pages/Blog_WITC';

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
      <Route path="/Blog_WWWW" element={<WWWW />} />
      <Route path="/Blog_TGAC" element={<TGAC />} />
      <Route path="/Blog_SCSJ" element={<SCSJ />} />
      <Route path="/Blog_FWFM" element={<FWFM />} />
      <Route path="/Blog_AICR" element={<AICR />} />
      <Route path="/Blog_WITC" element={<WITC />} />
      
    </Routes>
  );
}

export default App;
