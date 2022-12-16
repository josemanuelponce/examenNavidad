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

// Funcion para crear una lluvia
const crearLluvia = () => {
  // elemento i se almacena en la variable lluvia
  let lluvia = document.createElement("i");
  // x representa la posicion en que se va a poner cada lluvia de nieve que se va a multipiplar por un numero random del ancho
  let x = innerWidth * Math.random();
  //para que los lluvias sean diferentes
  let size = Math.random() * 2;
  //
  lluvia.style.left = x + '%';
  //aqui se llama al style para que los lluvias sean un random de ancho y de largo
  lluvia.style.width = size + '%'
  lluvia.style.height = size + '%'
  //el lluvia de nieve se esta insertando dentro del texto
  fondo.appendChild(lluvia);
};

  