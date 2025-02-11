import React from 'react';
import './Registrarse2.css';  // Asegúrate de tener el archivo CSS
import { Link } from 'react-router-dom';

function Registrarse() {
    return (
        <div className="container">
            <Link to="/">
            <img src="/imgs/LOGO/CommunityLogo2.png" alt="Community Fit Logo" className='logo_reg' />
            </Link>
            
                <form className='form_registro'>
                    <h2>Registrarse</h2>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" className='nombre' placeholder='Introduzca el nombre de usuario' />

                    <label htmlFor="pswd">Contraseña:</label>
                    <input type="password" id="pswd" className='pswd' placeholder='Introduzca la contraseña' />

                    <label htmlFor="pswd2">Repetir Contraseña:</label>
                    <input type="password" id="pswd2" className='pswd2' placeholder='Repita la contraseña' />

                    <button type="submit">Registrarse</button>
                    <p>¿Ya tienes una cuenta? <Link to="/login" className='enlace'>Iniciar Sesión</Link></p>
                </form>
            </div>
        
    );
}

export default Registrarse;
