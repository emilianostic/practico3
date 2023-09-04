
import React, { useState, useEffect } from 'react';


export function IngresarNombre() {
  
    const [escribir, setEscribir] = useState("")

 const [ingresar, setIngresar] = useState("");
console.log(ingresar)

const handleOnChange = (e)=>{
    setEscribir(e.target.value)
}

const handleOnClick = (e) => {
    setIngresar(escribir)
}
/*useEffect (()=>{
    setIngresar()
}, [])*/
 return(
    <div>
        <input onChange={handleOnChange}/>
        <button onClick={handleOnClick}>Ingresar Nombre de Usuario</button>
   <h3>{ingresar}</h3>
    </div>
 )

}
      