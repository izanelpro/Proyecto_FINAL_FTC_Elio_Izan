// SignUpApiRest.js

import { apiUrl } from 'config/config.js';

// Example function to handle user sign up
async function signUpUser(userData) {
    
    console.log("Datos del formulario:", userData);

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the sign-up request:', error);
        throw error;
    }
}

export default signUpUser;