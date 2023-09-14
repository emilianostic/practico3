import React, { useState } from 'react';
import "./style.css"
//se pasa handleClick como prop
export const IngresoUsuario = function IngresarNombre({ handleClick }) {
  
    const [escribir, setEscribir] = useState("")
    const [ingresar, setIngresar] = useState("");
    const [verInput, setVerInput] = useState (true)
    const [verCuadros, setVerCuadros] = useState (false)

    const handleOnChange = (e) => {
        setEscribir(e.target.value)   
    }

    const handleOnClickA = (e) => {
        if(escribir.length > 20){
            window.alert("Muy largo el nombre, vuelve a intentar")
        }
        else if(escribir === "" || escribir === " "){
            window.alert("Ingresa un nombre mas largo bebé")
        }
        else{
            
            setIngresar(escribir.trim())
            setVerInput(false)
            setVerCuadros(true)
            handleClick(); 
        }
    }

    return (
        <>
            <div className='titulo'> 
                {verInput && <input placeholder='cómo desea ser percibido' onChange={handleOnChange}/>}
            </div>
            <div className='titulo'>
                {verInput &&<button className='cartel' onClick={handleOnClickA}>Ingresar </button>}
            </div>
            <div className="titulo" id="name"> 
                <div id="showGamer">{ingresar}</div>
            </div>


        {verCuadros && <>
  <div className="underbox">
    <div>
      <p id="gamerName" />
    </div>

    <div>
      <p id="compuPPT" />
    </div>
    <br />
    <div id="mostrarResultado" />
    <div id="result" />
  </div>
 
  <div className="board">
    <div className="pizarra" id="pizarra">
      <div className="tablero" id="marcador">
        Marcador:
      </div>
      <div className="tablero" id="scorePC">
        Computadora: 0
      </div>
      <div className="tablero" id="scoreUser">
        User: 0
      </div>
      <div className="tablero" id="finalResult" />
    </div>
  </div>
</>}



        </>
    )
}

export default IngresoUsuario;
