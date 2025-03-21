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
    <div className='todo-login0'>
    
    
    <form0 className="form0">
    <span0 className="input-span0">
      <label0 htmlFor="email0" className="label0">
        correo electronico
      </label0>
      <input className='email0' name="email" id="email" onChange={(evento)=>setNombre(evento.target.value)}/>
    </span0>
    <span className="input-span0">
      <label0 htmlFor="password0" className="password0">
        Password
      </label0>
      <input className='pass0' type="password" name="password" id="password" onChange={(evento)=>setClave(evento.target.value)} />
    </span>
    <span0 className="span0">
    </span0>
    <span className="span0">
      no tienes cuenta ? <a href="Register">!Ingresa aqui!</a>
    </span>
  </form0>
  <button onClick={validarUsuario}>Iniciar Sesión</button>
    </div>
  )
}

export default FormularioLogin