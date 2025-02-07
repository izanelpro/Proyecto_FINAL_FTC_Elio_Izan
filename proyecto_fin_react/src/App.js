import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Inicio from './pages/Inicio/Inicio';
import MyFit from './pages/MyFit/MyFit';
import Comunidad from './pages/Comunidad/Comunidad';
import Contacto from './pages/Contacto/Contacto';
import Registrarse from './pages/Log/Logup/Registrarse';

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Ocultar NavBar en /registrarse */}
      {location.pathname !== "/registrarse" && <NavBar />}

      <Routes>
        <Route path="/" element={<Inicio />} /> 
        <Route path="/myfit" element={<MyFit />} /> 
        <Route path="/comunidad" element={<Comunidad />} /> 
        <Route path="/contacto" element={<Contacto />} /> 
        <Route path="/registrarse" element={<Registrarse />} /> 
      </Routes>

      {/* Ocultar Footer en /registrarse si es necesario */}
      {location.pathname !== "/registrarse" && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
