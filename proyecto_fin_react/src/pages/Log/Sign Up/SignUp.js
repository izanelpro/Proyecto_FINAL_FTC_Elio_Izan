import { useState } from "react";
import { Link } from "react-router-dom";
import signUpUser from './SignUpApiRest';

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        password2: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        console.log("Datos del formulario:", formData);

        // Aquí puedes agregar lógica para enviar los datos a un backend
        if (formData.password !== formData.password2) {
            alert("Las contraseñas no coinciden");
            return;
        }

        setFormData({
            name: formData.name,
            password: formData.password
        })
        
        signUpUser(formData);

        // Enviar los datos a una API o manejarlos según necesites
    };

    return (
        <div className="container">
            <Link to="/">
                <img src="/imgs/LOGO/CommunityLogo2.png" alt="Community Fit Logo" className='logo_reg' />
            </Link>
            
            <form className='form_registro' onSubmit={handleSubmit}>
                <h2>Registrarse</h2>
                
                <label htmlFor="name">Nombre:</label>
                <input 
                    type="text" 
                    id="name" 
                    className='name' 
                    placeholder='Introduzca el nombre de usuario' 
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    id="password" 
                    className='password' 
                    placeholder='Introduzca la contraseña' 
                    value={formData.password}
                    onChange={handleChange}
                />

                <label htmlFor="password2">Repetir Contraseña:</label>
                <input 
                    type="password" 
                    id="password2" 
                    className='password2' 
                    placeholder='Repita la contraseña' 
                    value={formData.password2}
                    onChange={handleChange}
                />

                <button type="submit">Registrarse</button>
                <p>¿Ya tienes una cuenta? <Link to="/login" className='enlace'>Iniciar Sesión</Link></p>
            </form>
        </div>
    );
}

export default SignUp;
