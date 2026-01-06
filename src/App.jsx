
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import AstroProgram from './pages/AstroProgram';
import FemaleBodyLiteracy from './pages/FemaleBodyLiteracy';
import Home from './pages/Home';

function App() {
    return (
        <Router>
          <Routes>
            <Route path="/astroprogram" element={<AstroProgram />} />
            <Route path="/femalebodyliteracy" element={<FemaleBodyLiteracy />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
    );
}

export default App;
