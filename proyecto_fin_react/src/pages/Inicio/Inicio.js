import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Inicio.css";

function Inicio() {
  const [noticias, setNoticias] = useState([]);
  const [tipoNoticias, setTipoNoticias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/noticias")
      .then(response => response.json())
      .then(data => setNoticias(data));
    fetch("http://localhost:3001/tipoNoticias")
      .then(response => response.json())
      .then(data => setTipoNoticias(data));

  }, []);


    


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  function filtrarNoticias(tipo) {
    if (tipo === "Todas") {
      fetch("http://localhost:3001/noticias")
        .then(response => response.json())
        .then(data => setNoticias(data));
    } else {
      fetch(`http://localhost:3001/noticias?tipo=${tipo}`)
        .then(response => response.json())
        .then(data => setNoticias(data));
    }
  }

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
      <div className="cuadrado"></div>
      
      <div className="busca-apartados-container">
        {/* Select para filtrar noticias */}
        <div className="busca">
          <select className="select" name="tipoNoticia" id="tipoNoticia" onChange={(e) => filtrarNoticias(e.target.value)}>
            <option value="Todas">Todas</option>
            {tipoNoticias.map((tipoNoticia, index) => (
              <option key={index} value={tipoNoticia.tipo}>{tipoNoticia.tipo}</option>
            ))}
          </select>
        </div>

        {/* Contenedor de noticias */}
        <div className="container_ini">
          <div className="apartados">
            {noticias.map(noticia => (
              <div className="news-card" key={noticia.id}>
                <div className="news-image-container">
                  <img src={noticia.imagen} alt={noticia.titulo} className="news-image" />
                  <div className="news-overlay"></div>
                </div>
                <div className="news-content">
                  <div className="news-header">
                    <img src={noticia.logo} alt="Logo" className="news-logo" />
                    <span className="news-source">{noticia.tipo}</span> · <span className="news-time">{noticia.fecha}</span>
                  </div>
                  <p className="news-text">{noticia.titulo}</p>
                  <div className="news-actions">
                    <button className="news-like">👍 {noticia.likes}</button>
                    <button className="news-comment">💬 {noticia.comentarios}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
