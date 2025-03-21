import React, { useState } from 'react';
import { postUsers } from '../src/services/llamados';
import "../styles/Register.css"

function FormularioRegistro() {
    const [Vnombre, setnombre] = useState('');
    const [Vclave, setVclave] = useState('');

    async function enviarDatos() {
        const usuario = {
            nombre: Vnombre,
            clave: Vclave,
        };
        await postUsers(usuario, 'usuarios');
    }

    return (
        <div className="container">  
        <label htmlFor="username1" className="label1">
            Correo Electrónico
       </label>
       <input
                type="email"
                id="username1"
                name="username1"
                required=""
                onChange={(evento) => setnombre(evento.target.value)}
                value={Vnombre}
                className="input1"
            />

            <label1 htmlFor="password1" className="label1">
                Password
            </label1>
       <input
                type="password"
                id="password1"
                name="password1"
                required=""
                className="input11"
                onChange={(evento) => setVclave(evento.target.value)}
            />

       <button type="submit" className="submit1" onClick={enviarDatos}>
                Regístrate
            </button>

         <footer>
                ¿Ya tienes cuenta? <a href="/login">¡Inicia sesión aquí!</a>
        </footer>
   </div>
    );
}

export default FormularioRegistro;