import React, { useState } from 'react';
//import { useState } from "react"
import "./style.css"

function Juego (props) {
 

 /*  const gamerEleccion = document.getElementById("gamerName")
    const compuPPT = document.getElementById("compuPPT")
    const mostrarR = document.getElementById("mostrarResultado")
    
    const piedraImg = document.getElementById("rock");
    const papelImg = document.getElementById("paper")
    const tijerasImg = document.getElementById("scissors");
    const reload = document.getElementById("NuevaPartida"); 

    function comparar(user, computadora) {
        if (user === computadora) {
          return "¡Empate! Vuelve a jugar...";
        }
        if (
          (user === "piedra" && computadora === "tijeras") ||
          (user === "papel" && computadora === "piedra") ||
          (user === "tijeras" && computadora === "papel")
        ) {
          return "¡Ganaste!";
        }
        return "¡Gana la computadora!";
      }
     let contadorPC = 0;
      let contadorUser = 0;
      const maximoGanados = 3;
      let userElect = "";
      let compuElect = "";
      let gamer = "kkk"
      
      function jugar(eleccion) {
        userElect = eleccion;
        const elecciones = ["piedra", "papel", "tijeras"];
        const botE = Math.floor(Math.random() * 3);
        compuElect = elecciones[botE];
        gamerEleccion.innerHTML = gamer +": " + userElect;
        compuPPT.innerHTML = "Computadora: " + compuElect;
        const result = comparar(userElect, compuElect);
        mostrarR.innerHTML = result;
       
        if (userElect === "piedra") {
      
        } else if (userElect === "papel") {
         
        } else {
         
        }
        if (result === "¡Ganaste!") {
          contadorUser++;
          if (contadorUser === maximoGanados) {
            document.getElementById("scoreUser").innerHTML = gamer + ": " + contadorUser;
           
            document.getElementById("NuevaPartida").style.display = "inline"
          reload.style.alignItems = "center"
             
             piedraImg.style.pointerEvents = "none";
             papelImg.style.pointerEvents = "none";
             tijerasImg.style.pointerEvents = "none";
            
            window.alert("¡Ganaste al mejor de 5!");
           
            
          } else {
            document.getElementById("scoreUser").innerHTML = gamer + ": " + contadorUser;
            console.log(contadorUser);
          }
        } else if (result === "¡Gana la computadora!") {
          contadorPC++;
          if (contadorPC === maximoGanados) {
            
            document.getElementById("scorePC").innerHTML = "Computadora: "+ contadorPC;
            
            reload.style.display = "flex";
            reload.style.alignItems = "center"
          
            piedraImg.style.pointerEvents = "none";
            papelImg.style.pointerEvents = "none";
            tijerasImg.style.pointerEvents = "none";
            document.getElementById("NuevaPartida").style.display = "inline"
            
            window.alert("¡Computadora gana al mejor de 5!");
            
            
          } else {
            document.getElementById("scorePC").innerHTML = "Computadora: "+ contadorPC;
          }
        } else {
          //contadorPC;
         //contadorUser;
        }
      }
 
      piedraImg.addEventListener("click", () => {
        jugar("piedra");
      /*document.getElementById("marcador").style.display = "flex"
      document.getElementById("scorePC").style.display = "flex"
      document.getElementById("scoreUser").style.display = "flex"
      document.getElementById("finalResult").style.display = "flex" 
    gamerEleccion.style.display = "flex"
          compuPPT.style.display = "flex"
          mostrarR.style.display = "flex"
      
    });
    
    
  papelImg.addEventListener("click", () => {
      jugar("papel");
    /* piedraImg.style.visibility = "inline"
     tijerasImg.style.visibility = "inline"
     papelImg.style.visibility = "inline"
      
     document.getElementById("marcador").style.display = "flex"
      document.getElementById("scorePC").style.display = "flex"
      document.getElementById("scoreUser").style.display = "flex"
      document.getElementById("finalResult").style.display = "flex" 
     gamerEleccion.style.display = "flex"
      compuPPT.style.display = "flex"
      mostrarR.style.display = "flex"
    
    });
    /* const [tijerasClick, setTijerasClick] = useState(false);

    const handleOnClick = (e) =>{
        setTijerasClick(true)
    } 

    tijerasImg.addEventListener("click", () => {
      jugar("tijeras");
    /*
      document.getElementById("marcador").style.display = "flex"
      document.getElementById("scorePC").style.display = "flex"
      document.getElementById("scoreUser").style.display = "flex"
      document.getElementById("finalResult").style.display = "flex"
      gamerEleccion.style.display = "flex"
      compuPPT.style.display = "flex"
      mostrarR.style.display = "flex"
    });*/

const [seleccionUsuario, setSeleccionUsuario] = useState ("");

const elecciones = ["piedra", "papel", "tijeras"];
const [seleccionPC, setSeleccionPC] = useState('');
    
    const seleccionarJugadaHandler = (jugadaUsuario) => {
        setSeleccionUsuario(jugadaUsuario)
        generarJugadaPC()
        const jugada = {//objeto
          seleccionUsuario,
          seleccionPC
        }
       if(props.enviarJugada) {
        props.enviarJugada(jugada)
       }
      
    };

const generarJugadaPC = () =>{

        const botE = Math.floor(Math.random() * 3);
        setSeleccionPC(elecciones[botE]); 
}


  
return(<>

{props.verOpciones && <div className="cuadros" id="game" >

  <div  id="rock" className="rock" onClick={seleccionarJugadaHandler("piedra")}></div>
 <div id="paper" className="paper"  onClick={seleccionarJugadaHandler("papel")}> </div>
  <div id="scissors" className="scissors" onClick={seleccionarJugadaHandler("tijeras")}></div>
  </div>}
</>

);
}
export default Juego