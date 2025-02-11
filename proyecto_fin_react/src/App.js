import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Inicio from './pages/Inicio/Inicio';
import MyFit from './pages/MyFit/MyFit';
import Comunidad from './pages/Comunidad/Comunidad';
import Contacto from './pages/Contacto/Contacto';
import Registrarse from "./pages/Log/Logup/Registrarse";
import Login from "./pages/Log/Log In/Login";

function Layout() {
  const location = useLocation();
  const hideNavAndFooterRoutes = ['/registrarse']  ; 

  return (
    <>
      {!hideNavAndFooterRoutes.includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path="/" element={<Inicio />} /> 
        <Route path="/myfit" element={<MyFit />} /> 
        <Route path="/comunidad" element={<Comunidad />} /> 
        <Route path="/contacto" element={<Contacto />} /> 
        <Route path="/registrarse" element={<Registrarse />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
      {!hideNavAndFooterRoutes.includes(location.pathname) && <Footer />}
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
