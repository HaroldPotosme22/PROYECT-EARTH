import React, { useState } from 'react'
import { postUsers } from '../src/services/llamados'
import "../styles/Register.css"
function FormularioRegistro() {
 const [Vnombre,setnombre]=useState("")
 const [Vclave,setVclave] = useState("")

 async function enviarDatos() {
    
    const usuario = {
        nombre:Vnombre,
        clave:Vclave
    }
    await postUsers(usuario,"usuarios")
}
    return (
        <>
 
    <label htmlFor="username" className="label">
      Correo Electronico
    </label>
    <input
      type="email"
      id="username"
      name="username"
      required=""
      className="input"
      onChange={(evento)=>setnombre(evento.target.value)}  value={Vnombre} 
    />
   
      Password
    <input
      type="password"
      id="password"
      name="password"
      required=""
      className="input"
      onChange={(evento)=>setVclave(evento.target.value)}
    />
    <button type="submit" className="submit" onClick={enviarDatos}>
      Registrate
    </button>
  
</>

     
        )
    
}


export default FormularioRegistro