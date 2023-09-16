import { useState } from "react";
import Titulo from "./componentes/Titulo.jsx";
import Juego from "./componentes/Juego.jsx";
/* componente  App que representa la aplicación en su conjunto con subcomponentes (Título y Juego) para representar la interfaz de usuario, los marcadores y los resultados.
*/

function App() {
  const [nombre, setNombre] = useState("");
  const [verInput, setVerInput] = useState(true);
  const [verOpciones, setVerOpciones] = useState(false);
  const [resultado, setResultado] = useState("");
  const [juego, setJuego] = useState('');
  const [contadorUsuario, setContadorUsuario] = useState(0);
  const [contadorPC, setContadorPC] = useState(0);
  const [verRecargar, setVerRecargar] = useState(false)
  
  
  //función que toma el valor ingresado en el input
  const handleOnChange = (e) => {
    setNombre(e.target.value);
  };
//función que ingresa el nombre ingresado a la interfaz (...vs computadora y en el marcador). Ademas
//oculta el input y el "botón para ver las opciones"
//visibiliza las opciones Piedra Papel Tijeras
  const handleOnClick = (e) => {
    setNombre(nombre.trim());
    if (nombre.length > 20) {
      window.alert("Muy largo el nombre, vuelve a intentar");
    } else if (nombre === "") {
      window.alert("Ingresa algo, intenta nuevamente");
    } else {
      setVerInput(false);
      setVerOpciones(true);

     
    }
  };
//determina el ganador de cada ronda y
//actualizar los marcadores.

  const enviarJugadaHandler = (juego)=>{
    setJuego(juego)
    
if(juego === ""){//acá traté de anular la primera jugada 
  return null
}
else{
    if (juego.seleccionUsuario === juego.seleccionPC) {
      setResultado("¡Empate! Vuelve a jugar...");
      console.log(juego)
     }
  
       else if (
       
          (juego.seleccionUsuario === "tijeras" && juego.seleccionPC === "tijeras") ||
          (juego.seleccionUsuario === "papel" && juego.seleccionPC === "tijeras") ||
          (juego.seleccionUsuario === "tijeras" && juego.seleccionPC === "papel")
        ) {
          setResultado( "¡Ganaste!");
          
          if(contadorUsuario === 2){
            window.alert("Ganaste al mejor de 5")
            setContadorUsuario(3)
            setContadorPC(contadorPC)
            setVerRecargar(true)
            setVerOpciones(false)
          
          }
          else {
            setContadorUsuario(contadorUsuario + 1)
          }
        }

        else if (((juego.seleccionUsuario === "tijeras" && juego.seleccionPC === "piedra") ||
        (juego.seleccionUsuario === "papel" && juego.seleccionPC === "tijeras") ||
        (juego.seleccionUsuario === "piedra" && juego.seleccionPC === "papel"))) {
        setResultado( "¡Gana la computadora!");
        
        if(contadorPC === 2){
          window.alert("Perdiste al mejor de 5 ¡jajajaja!")
          setContadorPC(3)
          setContadorUsuario(contadorUsuario)
          setVerRecargar(true)
          setVerOpciones(false)
        }
        else{
          setContadorPC(contadorPC + 1)
        }
        }
        else{
          
        }
      }
      }
      //función para reiniciar el juego
      const handleClick = () => {
        window.location.reload(); // Esta línea recarga la página
      };
      
  return (
    <>
      <Titulo />
      <div className="titulo">
        {verInput && 
          <input
            placeholder="cómo desea ser llamado"
            onChange={handleOnChange}
          />
        }
      </div>
      {verRecargar &&  <div className="posicionPartida"> <button class="elemento boquete" id="NuevaPartida" onClick={handleClick}>NUEVA PARTIDA</button></div>}
      <div className="titulo">
        {verInput && 
          <button className="cartel" onClick={handleOnClick}>
            Click para ver las opciones
          </button>
        }
      </div>
      {verOpciones && <div className="titulo" id="name">
        <div id="showGamer">{nombre} Vs Computadora</div>
      </div>}

      <div class="underbox">
        <div>{verOpciones && <p id="gamerName">{nombre}: {juego.seleccionUsuario}</p>}</div>

        <div>{verOpciones && <p id="compuPPT">PC: {juego.seleccionPC} </p>}</div>
        <br />

        <div id="mostrarResultado"></div>

        {verOpciones && <div id="result">{resultado}</div>}
      </div>

      <div class="board">
        
          <div class="pizarra" id="pizarra">
            <div class="tablero" id="marcador">
              Mejor de Cinco Jugadas 
              Marcador:
            </div>
            <div class="tablero" id="scorePC">
              Computadora: {contadorPC}
            </div>
            <div class="tablero" id="scoreUser">
              {nombre}: {contadorUsuario}
            </div>
            <div class="tablero" id="finalResult"></div>
          </div>
        
      </div>
      <br/>
      <br/>
      <br/>
{/*props, paso la info para que se visialicen los elementos html del componente hijo "Juego" */}
      <Juego verOpciones={verOpciones} enviarJugada={enviarJugadaHandler} />
    </>
  );
}

export default App;
