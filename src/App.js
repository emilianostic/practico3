import { useState } from "react";
//import IngresoUsuario from "./componentes/ingresarNombre"
import Titulo from "./componentes/Titulo.jsx";
import Juego from "./componentes/Juego.jsx";

function App() {
  const [nombre, setNombre] = useState("");
  const [verInput, setVerInput] = useState(true);
  const [verOpciones, setVerOpciones] = useState(false);
  const [resultado, setResultado] = useState("")


  const handleOnChange = (e) => {
    setNombre(e.target.value);
  };

  const handleOnClick = (e) => {
    setNombre(nombre.trim());
    if (nombre.length > 20) {
      window.alert("Muy largo el nombre, vuelve a intentar");
    } else if (nombre === "") {
      window.alert("Ingresa algo, intenta nuevamente");
    } else {
      setVerInput(false);
      setVerOpciones(true);

      // handleClick();
    }
  };



  const enviarJugadaHandler = (juego)=>{

        if (juego.seleccionUsuario === juego.seleccionPC) {
          return "¡Empate! Vuelve a jugar...";
        }
        if (
          (juego.seleccionUsuario === "piedra" && juego.seleccionPC === "tijeras") ||
          (juego.seleccionUsuario === "papel" && juego.seleccionPC === "piedra") ||
          (juego.seleccionUsuario === "tijeras" && juego.seleccionPC === "papel")
        ) {
          setResultado( "¡Ganaste!");
          
        }
        setResultado( "¡Gana la computadora!");
        console.log(setResultado)
      }



  return (
    <>
      <Titulo />
      <div className="titulo">
        {verInput && (
          <input
            placeholder="cómo desea ser llamado"
            onChange={handleOnChange}
          />
        )}
      </div>
      <div className="titulo">
        {verInput && (
          <button className="cartel" onClick={handleOnClick}>
            Ingresar{" "}
          </button>
        )}
      </div>
      <div className="titulo" id="name">
        <div id="showGamer">{nombre}</div>
      </div>

      <div class="underbox">
        <div>{verOpciones && <p id="gamerName"></p>}</div>

        <div>{verOpciones && <p id="compuPPT"></p>}</div>
        <br />

        <div id="mostrarResultado"></div>

        {verOpciones && <div id="result"></div>}
      </div>

      <div class="board">
        {verOpciones && (
          <div class="pizarra" id="pizarra">
            <div class="tablero" id="marcador">
              Marcador:
            </div>
            <div class="tablero" id="scorePC">
              Computadora: 0
            </div>
            <div class="tablero" id="scoreUser">
              User: 0
            </div>
            <div class="tablero" id="finalResult"></div>
          </div>
        )}
      </div>

      <Juego verOpciones={verOpciones} enviarJugada={enviarJugadaHandler} />
    </>
  );
}

export default App;
