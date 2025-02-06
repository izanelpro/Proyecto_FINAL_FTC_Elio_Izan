import React from 'react';
import './Comunidad.css';  // Asegúrate de tener el archivo CSS

function Comunidad() {
    return (
        <div className="container">
            <section id="services" className="services">
                <h2>Comunidad</h2>
                <p>Crea o Únete a una Comunidad y practica Deporte juntos!</p>
            </section>

            <div className="apartados">
                <div className="apartado">
                    <h2>Crea tu propia Comunidad!</h2>
                    <img 
                        src="/Proyecto-FTC_Elio_Izan/proyectoftc/src/main/resources/static/imgs/IMGS_PAG/boxer-1984344_1280.jpg" 
                        alt="Imagen Boxeo" 
                    />
                </div>

                <div className="apartado">
                    <h2>Únete a una Comunidad existente!</h2>
                    <img 
                        src="/Proyecto-FTC_Elio_Izan/proyectoftc/src/main/resources/static/imgs/IMGS_PAG/baseball-1495939_1280.jpg" 
                        alt="Imagen Baseball Equipo" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Comunidad;
