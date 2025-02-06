import React from "react";
import './NavBar.css'; 
import { Link } from 'react-router-dom';

function NavBar() {
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
        <Link to="/comunidad">Comunidad</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
    );
}

export default NavBar;
