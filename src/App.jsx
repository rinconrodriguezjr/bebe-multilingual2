import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DVDPage from './pages/DVDPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />
        {/* Ruta dinámica para cada DVD */}
        <Route path="/dvd/:dvdId" element={<DVDPage />} />
      </Routes>
    </Router>
  );
}

export default App;
