import React from 'react';
import './Inicio.css'; 

function Inicio() {
  return (
    <div className="container">
            <section id="services" className="services">
                <h2>Nuestros Servicios</h2>
                <p>Ofrecemos entrenamientos personalizados, clases grupales y asesoría nutricional.</p>
            </section>
            <div className="apartados">
                <div className="apartado_inicio">
                    <h2>Aprende sobre nutrición</h2>
                    <img src="/imgs/IMGS_PAG/comida_saludable.jpg" alt="Comida Saludable" />
                    <p>Come saludable con esta dieta rica en carbohidratos para mantenerte en forma</p>
                    <button className="boton_ini" type="button">Ver más</button>
                </div>
                <div className="apartado_inicio">
                    <h2>Ejercicios para perder grasa</h2>
                    <img src="/imgs/IMGS_PAG/mujer_ejer.jpg" alt="Ejercicios"/>                    
                    <p>Practica estos ejercicios para perder grasa en semanas</p>
                    <button className="boton_ini" type="button">Ver más</button>
                </div>
                <div className="apartado_inicio">
                    <h2>Aprende a hacer una llave</h2>
                    <img src="/imgs/IMGS_PAG/jiujitsu.jpg" alt="Community Fit Logo" />
                    <p>Infórmate de cómo hacer una llave correcta en cualquier arte marcial</p>
                    <button className="boton_ini" type="button">Ver más</button>
                </div>
            </div>
        </div>
  );
}

export default Inicio;
