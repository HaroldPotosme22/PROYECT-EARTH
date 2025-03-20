import React, { useState } from 'react'
import "../styles/Login.css"
import { getUsers } from '../src/services/llamados'
import { useNavigate } from 'react-router-dom'

function FormularioLogin() {
  const [nombre,setNombre] = useState("")
  const [clave,setClave] = useState("")
  const navigate = useNavigate()
  
  async function validarUsuario() {
    
      const usuarios = await getUsers("usuarios")
      const usuarioValido = usuarios.find(usuario=>usuario.nombre === nombre && usuario.clave === clave)
      console.log(usuarioValido)
      if (usuarioValido) {
        navigate("/home")
      }
  }


  return (
    <div className='todo-login'>
    
    
    <form className="form">
    <span className="input-span">
      <label htmlFor="email" className="label">
        correo electronico
      </label>
      <input className='email' name="email" id="email" onChange={(evento)=>setNombre(evento.target.value)}/>
    </span>
    <span className="input-span">
      <label htmlFor="password" className="password">
        Password
      </label>
      <input className='pass' type="password" name="password" id="password" onChange={(evento)=>setClave(evento.target.value)} />
    </span>
    <span className="span">
    </span>
    <span className="span1">
      no tienes cuenta ? <a href="Register">!Ingresa aqui!</a>
    </span>
  </form>
  <button onClick={validarUsuario}>Iniciar Sesión</button>
    </div>
  )
}

export default FormularioLogin