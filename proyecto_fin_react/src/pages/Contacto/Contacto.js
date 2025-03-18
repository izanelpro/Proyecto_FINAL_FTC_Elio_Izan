import React from 'react';
import './Contacto.css';  // Asegúrate de tener el archivo CSS

function Contacto() {
    return (
        <div className="container">
            <header className="header">
        <div className="video-container">
          <video autoPlay muted loop playsInline id="background-video">
            <source src="/imgs/video4.mp4" type="video/mp4"/>
            Tu navegador no soporta videos en HTML5.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="header-content">
        <h2>Contacto</h2>
                <p>Envíanos un mensaje y te responderemos lo antes posible!</p>
        </div>
        <div className="triangle"></div>
      </header>
          
        </div>
    );
}

export default Contacto;
