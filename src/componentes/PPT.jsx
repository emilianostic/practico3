
import "./style.css"

import React from 'react';

const PPT = ({ clicked }) => {
  // Haz lo que necesites con el estado `clicked`
  return (

    <>
     {clicked ? (
        <div>
          {/* Contenido que se mostrará cuando se haya clickeado el botón */}
          <div className="cuadros" id="game">
      <div  id="rock" className="rock" ></div>
      <div id="paper" className="paper"></div>
      <div id="scissors" className="scissors"></div>
    </div>
        </div>
      ) : null}
    
    </>
  );
}

export default PPT;
