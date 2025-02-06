import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Inicio from './pages/Inicio/Inicio';
import MyFit from './pages/MyFit/MyFit';
import Comunidad from './pages/Comunidad/Comunidad';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} /> 
        <Route path="/myfit" element={<MyFit />} /> 
        <Route path="/comunidad" element={<Comunidad />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
