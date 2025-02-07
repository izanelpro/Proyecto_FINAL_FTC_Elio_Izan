import React from "react";
import "./Inicio.css";

function Inicio() {
  return (
    <div className="container">

      {/* Bloque Titulo Pagina */}
      <section id="services" className="services">
        <h2>Novedades y Noticias</h2>
        <p>Consulta las novedades y las noticias de la página!</p>
      </section>

      {/* Bloque Total Apartados */}
      <div className="container_ini">

        {/* Bloque Fila Apartados */}
        <div className="apartados">

          {/* Cada Noticia */}
          <div className="news-card">

            {/* Imagen + Overlay */}
            <div className="news-image-container">

              {/* Imagen */}
              <img
                src="/imgs/IMGS_PAG/comida_saludable.jpg"
                alt="Noticia"
                className="news-image"
              />

              {/* Overlay */}
              <div className="news-overlay"></div>
            </div>

            {/* Contenido del Bloque*/}
            <div className="news-content">

                {/* Header noticia */}
              <div className="news-header">

                {/* Imagen */}
                <img
                  src="/imgs/IMGS_PAG/dietita.png"
                  alt="Logo"
                  className="news-logo"
                />

                {/* Tipo Noticia */}
                <span className="news-source">Comida Saludable</span> ·{" "}

                {/* Publicación */}
                <span className="news-time">20h</span>
              </div>

              {/* Texto de la noticia */}
              <p className="news-text">
                Descubre alimentos saludables para una rica merienda llena de
                proteínas
              </p>

              {/* Iconos de interacción */}
              <div className="news-actions">
                <button className="news-like">👍 11</button>
                <button className="news-comment">💬</button>
              </div>
            </div>
          </div>



          {/* Cada Noticia */}
          <div className="news-card">
            
            {/* Imagen + Overlay */}
            <div className="news-image-container">

              {/* Imagen */}
              <img
                src="/imgs/IMGS_PAG/mujer_ejer.jpg"
                alt="Noticia"
                className="news-image"
              />

              {/* Overlay */}
              <div className="news-overlay"></div>
            </div>

            {/* Contenido del Bloque */}
            <div className="news-content">

                {/* Header noticia */}
              <div className="news-header">

                {/* Imagen */}
                <img
                  src="/imgs/IMGS_PAG/salud.png"
                  alt="Logo"
                  className="news-logo"
                />

                {/* Tipo Noticia */}
                <span className="news-source">Salud</span> ·{" "}

                {/* Publicación */}
                <span className="news-time">2h</span>
              </div>

              {/* Texto de la noticia */}
              <p className="news-text">
                Prepara estos ejercicios para lucir un buen abdomen sin salir de
                casa
              </p>

              {/* Iconos de interacción */}
              <div className="news-actions">
                <button className="news-like">👍 7</button>
                <button className="news-comment">💬</button>
              </div>
            </div>
          </div>

          {/* Cada Noticia */}
          <div className="news-card">
            
            {/* Imagen + Overlay */}
            <div className="news-image-container">

              {/* Imagen */}
              <img
                src="/imgs/IMGS_PAG/jiujitsu.jpg"
                alt="Noticia"
                className="news-image"
              />

              {/* Overlay */}
              <div className="news-overlay"></div>
            </div>

            {/* Contenido del Bloque */}
            <div className="news-content">

                {/* Header noticia */}
              <div className="news-header">

                {/* Imagen */}
                <img
                  src="/imgs/IMGS_PAG/deporte.png"
                  alt="Logo"
                  className="news-logo"
                />

                {/* Tipo Noticia */}
                <span className="news-source">Deportes</span> ·{" "}

                {/* Publicación */}
                <span className="news-time">2 días</span>
              </div>

              {/* Texto de la noticia */}
              <p className="news-text">
                Las mejores llaves de Jiujitsu para prepararse a un combate
              </p>

              {/* Iconos de interacción */}
              <div className="news-actions">
                <button className="news-like">👍 1</button>
                <button className="news-comment">💬</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Inicio;
