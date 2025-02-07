import React from 'react';
import './MyFit.css';  // Asegúrate de tener el archivo CSS

function MyFit() {
    return (
        <div className="container">
            <section id="services" className="services">
                <h2>MyFit</h2>
                <p>Consulta tu IMC y descubre información saludable</p>
            </section>

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
