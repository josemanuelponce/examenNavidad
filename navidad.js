//Javascript para cuando salga la imagen a los 3 segundos salga el texto y si le das click sale el texto y cambia de imagen para que se escuche una musica.

//------------------------//

//Para activar la musica
var musica = document.getElementById("musica");

//Declarar la variable para un tiempo de 3 segundos
const myTimeout = setTimeout(mostrarSaludo, 3000);
//Función para que salga un texto y aparezca a los 3 segundos
function mostrarSaludo() {
  document.getElementById("felicitar").style.visibility="visible";
}

//Declarar una variable para cuando hagas click en el body aparezca un evento
let body = document.querySelector("body");
body.addEventListener("click", ocultarSaludo);
//Función para mostrar un evento y aparezca el texto cuando se hace click junto a la musica
function ocultarSaludo() {
    document.getElementById("felicitar").style.visibility="visible";
    musica.play();
}

//Declarar la la variable para cuando se hace click cambie de imagen
let bolas = document.querySelector("body");
bolas.addEventListener("click", ocultarImg);
//Función para mostrar la imagen 
function ocultarImg() {
    document.getElementById("bolas").style.visibility="visible";
}



  