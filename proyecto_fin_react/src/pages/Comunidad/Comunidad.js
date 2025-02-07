import React from "react";
import "./Comunidad.css"; // Asegúrate de tener el archivo CSS

function Comunidad() {
  return (
    <div className="container">
      <section id="services" className="services">
        <h2>Comunidad</h2>
        <p>Crea o Únete a una Comunidad y practica Deporte juntos!</p>
      </section>

      {/* Bloque Fila Apartados */}
      <div className="apartados">

        {/* Cada Bloque */}
        <div className="comun-card">
          {/* Imagen + Overlay */}
          <div className="comun-image-container">
            {/* Imagen */}
            <img
              src="/imgs/IMGS_PAG/boxer.jpg"
              alt="Noticia"
              className="comun-image"
            />

            {/* Overlay */}
            <div className="comun-overlay"></div>
          </div>

          {/* Contenido del Bloque*/}
          <div className="comun-content">
            <h2>Crea tu Comunidad</h2>
            {/* Texto de la Comunidad */}
            <p className="comun-text">
              Crea tu propia Comunidad
            </p>
          </div>
        </div>

        {/* Cada Bloque */}
        <div className="comun-card">
          {/* Imagen + Overlay */}
          <div className="comun-image-container">
            {/* Imagen */}
            <img
              src="/imgs/IMGS_PAG/baseball.jpg"
              alt="Noticia"
              className="comun-image"
            />

            {/* Overlay */}
            <div className="comun-overlay"></div>
          </div>

          {/* Contenido del Bloque*/}
          <div className="comun-content">
            <h2>Únete a una Comunidad</h2>
            {/* Texto de la Comunidad */}
            <p className="comun-text">
              Únete a una comunidad existente 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comunidad;
