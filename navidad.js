//Te muestra el texto en 3 segundos
const myTimeout = setTimeout(mostrarSaludo, 3000);

function mostrarSaludo() {
  document.getElementById("felicitar").style.visibility="visible";
}

//Te muestra el texto al hacer click
let body = document.querySelector("body");
body.addEventListener("click", ocultarSaludo);

function ocultarSaludo() {
    document.getElementById("felicitar").style.visibility="visible";
}

//Te cambia de imagen cuando hace click y te muestra el texto
let bolas = document.querySelector("body");
bolas.addEventListener("click", ocultarImg);

function ocultarImg() {
    document.getElementById("bolas").style.visibility="visible";
}



  