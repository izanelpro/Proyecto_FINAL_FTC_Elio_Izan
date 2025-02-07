import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  // Desplegable
  const [dropdown, setDropdown] = useState(false);

  return (
    <header>
      <div className="titulo">
        <Link to="/">
          <img src="/imgs/LOGO/CommunityLogo.png" alt="Community Fit Logo" />
        </Link>
        <h1>Community Fit</h1>
      </div>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/myfit">MyFit</Link>

        {/* Contenedor del menú desplegable */}
        <div
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <Link to="/comunidad">Comunidad</Link>

          {/* Menú desplegable */}
          {dropdown && (
            <div className="dropdown-menu">
              <Link to="/com_vcrear">Crear Comunidad</Link>
              <Link to="/com_unirse">Unirse Comunidad</Link>
            </div>
          )}
        </div>

        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default NavBar;
