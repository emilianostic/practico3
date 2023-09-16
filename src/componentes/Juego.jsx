import React, { useState } from "react";
import "./style.css";
//componente para representar las opciones de "piedra", "papel" y "tijera"

//eventos de click (onClick) para capturar la opción seleccionada por el jugador, genera aleatoriamente la opción del oponente (PC).

function Juego(props) {
  const [seleccionUsuario, setSeleccionUsuario] = useState("");

  const elecciones = ["piedra", "papel", "tijeras"];
  const [seleccionPC, setSeleccionPC] = useState("");

  const generarJugadaPC = () => {
    const botE = Math.floor(Math.random() * 3);
    setSeleccionPC(elecciones[botE]);
  };

  const seleccionarJugadaHandler = (juego) => {
    setSeleccionUsuario(juego);
    generarJugadaPC();
    const jugada = {
      //objeto
      seleccionUsuario,
      seleccionPC,
    };
//(props) para pasar las opciones elegidas de ambos.
//al componente App (padre)
    props.enviarJugada(jugada);
  };

  return (
    <>
      {props.verOpciones && (
        <div className="cuadros" id="game">
          <div
            id="rock"
            className="rock"
            onClick={() => seleccionarJugadaHandler("piedra")}
          ></div>
          <div
            id="paper"
            className="paper"
            onClick={() => seleccionarJugadaHandler("papel")}
          >
            
          </div>
          <div
            id="scissors"
            className="scissors"
            onClick={() => seleccionarJugadaHandler("tijeras")}
          ></div>
        </div>
      )}
    </>
  );
}
export default Juego;
