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
    <div className='todo-login2'>
    
    
    <form className="form2">
    <span className="input-span2">
      <label htmlFor="email2" className="label2">
        correo electronico Admin
      </label>
      <input className='email2' name="email" id="email" onChange={(evento)=>setNombre(evento.target.value)}/>
    </span>
    <span className="input-span2">
      <label htmlFor="password2" className="password2">
        Password Admin
      </label>
      <input className='pass2' type="password" name="password" id="password" onChange={(evento)=>setClave(evento.target.value)} />
    </span>
    <span className="span2">
    </span>
  </form>
  <button onClick={validarUsuario}>Iniciar Sesión</button>
    </div>
  )
}

export default FormularioLogin