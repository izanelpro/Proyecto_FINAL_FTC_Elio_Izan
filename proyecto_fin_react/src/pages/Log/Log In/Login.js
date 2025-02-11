import React from 'react';
import './Login2.css';  // Asegúrate de tener el archivo CSS
import { Link } from 'react-router-dom';

function Registrarse() {
    return (
        <div className="container">
            <Link to="/">
            <img src="/imgs/LOGO/CommunityLogo2.png" alt="Community Fit Logo" className='logo_reg' />
            </Link>
            
                <form className='form_registro'>
                    <h2>Iniciar Sesión</h2>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" className='nombre' placeholder='Introduzca el nombre de usuario' />

                    <label htmlFor="pswd">Contraseña:</label>
                    <input type="password" id="pswd" className='pswd' placeholder='Introduzca la contraseña' />

                    <button type="submit">Iniciar Sesion</button>
                    <p>¿No tienes cuenta? <Link to="/registrarse" className='enlace'>Crea tu cuenta</Link></p>
                </form>
            </div>
        
    );
}

export default Registrarse;
