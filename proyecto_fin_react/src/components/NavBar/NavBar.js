import React, { useState } from "react";
import "./NavBar2.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="navbar">
      {/* Contenedor del Logo + Título */}
      <div className="navbar-left">
        <Link to="/">
          <img src="/imgs/LOGO/logo_new.png" alt="Community Fit Logo" className="logo" />
        </Link>
        <h1 className="site-title">Community Fitness</h1>
      </div>

      {/* Contenedor del Menú */}
      <nav className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/myFit">MyFit</Link>

        {/* Menú Desplegable */}
        <div
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <Link to="/comunidad">Comunidad</Link>
          {dropdown && (
            <div className="dropdown-menu">
              <Link to="/com_vcrear">Crear Comunidad</Link>
              <Link to="/com_unirse">Unirse Comunidad</Link>
            </div>
          )}
        </div>
        <Link to="/contacto">Contacto</Link>
      </nav>

      {/* Botón de Iniciar Sesión */}
      <Link to="/registrarse" className="login-button">Iniciar Sesión</Link>
    </header>
  );
}

export default NavBar;