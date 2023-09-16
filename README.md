# Juego Piedra Papel Tijeras (PPT) en una "pared" con React

Clásico juego PPT adaptado a HTML, CSS y funcionalidades con Javascript reestructurado en componentes de React

## Comenzando 

Los archivos de este proyecto se pueden descargar de  https://github.com/emilianostic/practico3


Se crean tres componentes App, Título y Juego. En los comentarios en el código se puede ver las expliaciones siguiendo las consignas del práctico 3.

### Reglas y como Jugar 🔧

Una vez que ingresamos al sitio de  tendremos que colocar un nombre al jugador y luego hacer click para ver las opciones para poder jugar versus una eleción aleatoria que nos da la computadora. Las reglas son las siguientes:
La tijera gana al papel porque le puede cortar.
La piedra gana a las tijeras porque las rompe.
El papel gana a la piedra porque la envuelve.
A "Piedra, papel o tijeras" se juega de dos en dos.
Si los dos jugadores sacan la misma figura hay empate, tablas, no gana nadie. 
Aquí se hará un click sobre "opciones" cada vez que queramos elegir PPT, al mismo tiempo que el usuario hace click sobre la imagen elegida, se genera automaticamente una elección aletoria que se compara con la del usuario. Se va mostrando el resultado de cada partida y se suman las partidas ganadas por cada uno hasta el mejor de 5, es decir, cuando uno gana tres veces se observa una alerta. Luego se puede reiniciar el juego con un botón "Nueva Partida" con otro nombre si lo desea. 


## Ejecutando pruebas ⚙️
El nombre del jugador no debe tener más de 20 carateres y pueden ser de cualquier tipo.

 Escribir un nombre en el input. Dar click para ver las opcionee, clickear en la imagen del adoquin, la elección aleatoria sale papel por lo que se puede leer que Gana la Computadora. Se sigue así suscesivamente hasta que haya un ganador de 3 partidas.


Mejoras: eliminar la comparación de la primera opción que siempre compara dos cadenas vacías ("" === "", ver en consola...), diferencia mayúsculas y minúsculas al ingesar el nombre (o buscar otra "font").
Movimientos de los elemetos html, lograr posicionarlos mejor (pizzarrón, etc).  Darle estilo al input.


## Construido con 🛠️

* [Google Fonts](https://fonts.googleapis.com ) - Tipografías 


## Autores ✒️

* **Emiliano Velázquez** 

---
⌨️ con ❤️ por [@emilianostic](https://github.com/emilianostic/sobre-mi/) 😊
