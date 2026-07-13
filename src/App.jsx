
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AstroProgram from './pages/AstroProgram';
import FemaleBodyLiteracy from './pages/FemaleBodyLiteracy';
import InterNet from './pages/InterNet';
import TechNewsSynth from './pages/TechNewsSynth';
import CrochetComputer from './pages/CrochetComputer';
import Weblog from './pages/Weblog';
import Home from './pages/Home';
import BYDH from './pages/Blog_BYDH';
import WWWW from './pages/Blog_WWWW';
import TGAC from './pages/Blog_TGAC';
import SCSJ from './pages/Blog_SCSJ';
import FWFM from './pages/Blog_FWFM';
import AICR from './pages/Blog_AICR';
import WITC from './pages/Blog_WITC';
import Blog_26PS from './pages/Blog_26PS';
import TRMR from './pages/Blog_TRMR';
import SPMA from './pages/Blog_SPMA';
import COOR from './pages/Blog_COOR';
import AbodeHome from './pages/AbodeHome';
import AbodeRoom from './pages/AbodeRoom';
//import ATBC from './pages/Blog_ATBC';
//import ALCT from './pages/Blog_ALCT';
import HIWW from './pages/Blog_HIWW';
import RBSS from './pages/Blog_RBSS';
//import ESTATE from './pages/Blog_Estate';
// import CheckoutProducts from './pages/CheckoutProducts';
// import CheckoutSuccess from './pages/CheckoutSuccess';
// import CheckoutCancel from './pages/CheckoutCancel';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/astroprogram" element={<AstroProgram />} />
      <Route path="/femalebodyliteracy" element={<FemaleBodyLiteracy />} />
      <Route path="/internet" element={<InterNet />} />
      <Route path="/weblog" element={<Weblog />} />
      <Route path="/TechNewsSynth" element={<TechNewsSynth />} />
      <Route path="/CrochetComputer" element={<CrochetComputer />} />
      <Route path="/Blog_BYDH" element={<BYDH />} />
      <Route path="/Blog_WWWW" element={<WWWW />} />
      <Route path="/Blog_TGAC" element={<TGAC />} />
      <Route path="/Blog_SCSJ" element={<SCSJ />} />
      <Route path="/Blog_FWFM" element={<FWFM />} />
      <Route path="/Blog_AICR" element={<AICR />} />
      <Route path="/Blog_WITC" element={<WITC />} />
      <Route path="/Blog_26PS" element={<Blog_26PS />} />
      <Route path="/Blog_TRMR" element={<TRMR />} />
      <Route path="/Blog_SPMA" element={<SPMA />} />
      <Route path="/Blog_COOR" element={<COOR />} />
      <Route path="/Blog_RBSS" element={<RBSS />} />
      <Route path="/Blog_HIWW" element={<HIWW />} />

      <Route path="/abode" element={<AbodeHome />} />
      <Route path="/abode/:roomId" element={<AbodeRoom />} />
      
      <Route path="/Blog_RBSS" element={<RBSS />} />
      
      
    </Routes>
  );
}

export default App;
