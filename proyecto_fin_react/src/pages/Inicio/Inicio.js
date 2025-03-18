import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Inicio.css";

function Inicio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container">
      {/* Video de fondo */}
      <div className="video-container">
        <video autoPlay muted loop playsInline id="background-video">
          <source src="/imgs/video4.mp4" type="video/mp4"/>
          Tu navegador no soporta videos en HTML5.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Encabezado */}
      <div className="header-content">
        <div className="text-section">
          <h1>Novedades y Noticias</h1>
          <p>Consulta las novedades y noticias de la página!</p>
        </div>

        {/* Carrusel en lugar de la imagen fija */}
        <div className="carousel-section">
          <Slider {...settings}>
            <div>
              <img src="/imgs/IMGS_PAG/boxer.jpg" alt="Slide 1" className="carousel-image"/>
            </div>
            <div>
              <img src="/imgs/IMGS_PAG/comida_saludable.jpg" alt="Slide 2" className="carousel-image"/>
            </div>
            <div>
              <img src="/imgs/IMGS_PAG/mujer_ejer.jpg" alt="Slide 3" className="carousel-image"/>
            </div>
            <div>
              <img src="/imgs/IMGS_PAG/jiujitsu.jpg" alt="Slide 4" className="carousel-image"/>
            </div>
          </Slider>
        </div>
      </div>

      {/* 🔺 Triángulo decorativo */}
      <div className="triangle"></div>

      {/* Contenedor de noticias */}
      <div className="container_ini">
        <div className="apartados">
          {/* NOTICIA 1 */}
          <div className="news-card">
            <div className="news-image-container">
              <img src="/imgs/IMGS_PAG/comida_saludable.jpg" alt="Noticia" className="news-image" />
              <div className="news-overlay"></div>
            </div>
            <div className="news-content">
              <div className="news-header">
                <img src="/imgs/IMGS_PAG/dietita.png" alt="Logo" className="news-logo" />
                <span className="news-source">Comida Saludable</span> · <span className="news-time">20h</span>
              </div>
              <p className="news-text">Descubre alimentos saludables para una rica merienda llena de proteínas.</p>
              <div className="news-actions">
                <button className="news-like">👍 11</button>
                <button className="news-comment">💬</button>
              </div>
            </div>
          </div>

          {/* NOTICIA 2 */}
          <div className="news-card">
            <div className="news-image-container">
              <img src="/imgs/IMGS_PAG/mujer_ejer.jpg" alt="Noticia" className="news-image" />
              <div className="news-overlay"></div>
            </div>
            <div className="news-content">
              <div className="news-header">
                <img src="/imgs/IMGS_PAG/salud.png" alt="Logo" className="news-logo" />
                <span className="news-source">Salud</span> · <span className="news-time">2h</span>
              </div>
              <p className="news-text">Prepara estos ejercicios para lucir un buen abdomen sin salir de casa.</p>
              <div className="news-actions">
                <button className="news-like">👍 7</button>
                <button className="news-comment">💬</button>
              </div>
            </div>
          </div>

          {/* NOTICIA 3 */}
          <div className="news-card">
            <div className="news-image-container">
              <img src="/imgs/IMGS_PAG/jiujitsu.jpg" alt="Noticia" className="news-image" />
              <div className="news-overlay"></div>
            </div>
            <div className="news-content">
              <div className="news-header">
                <img src="/imgs/IMGS_PAG/deporte.png" alt="Logo" className="news-logo" />
                <span className="news-source">Deportes</span> · <span className="news-time">2 días</span>
              </div>
              <p className="news-text">Las mejores llaves de Jiujitsu para prepararse a un combate.</p>
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
