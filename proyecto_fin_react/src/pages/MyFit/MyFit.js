import React from 'react';
import './MyFit.css';  // Asegúrate de tener el archivo CSS

function MyFit() {
    return (
        <div className="container">
          
      {/* Header con video de fondo y triángulo inclinado */}
      <header className="header">
        <div className="video-container">
          <video autoPlay muted loop playsInline id="background-video">
            <source src="/imgs/video4.mp4" type="video/mp4"/>
            Tu navegador no soporta videos en HTML5.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="header-content">
        <h2>MyFit</h2>
        <p>Consulta tu IMC y descubre información saludable</p>
        </div>
        <div className="triangle"></div>
      </header>
        

            {/* Cada Bloque */}
        <div className="myFit-card">
          {/* Imagen + Overlay */}
          <div className="myFit-image-container">
            {/* Imagen */}
            <img
              src="/imgs/IMGS_PAG/formulario.jpg"
              alt="Noticia"
              className="myFit-image"
            />

            {/* Overlay */}
            <div className="myFit-overlay"></div>
          </div>

          {/* Contenido del Bloque*/}
          <div className="myFit-content">
            <h2>Formulario de Seguimiento</h2>
            {/* Texto de la Comunidad */}
            <p className="myFit-text">
              Rellena con tus datos el formulario para hacer un 
              seguimiento con myFit
            </p>
          </div>
        </div>
            
        </div>
    );
}

export default MyFit;
