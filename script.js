// Banco de preguntas
const preguntas = [
  "¿Prefieres la playa o la montaña?",
  "¿Café o té?",
  "¿Perro o gato?",
  "¿Madrugar o trasnochar?",
  "¿Leer o ver series?",
  "¿Chocolate o vainilla?",
  "¿Viajar o quedarte en casa?",
  "¿Música o silencio?",
  "¿Frío o calor?",
  "¿Ciudad o campo?"
];

// Variables
let preguntasUsadas = [];
let cantidadPorPartida = 4;

const preguntaDiv = document.getElementById("pregunta");
const opcionesDiv = document.getElementById("opciones");
const resultadoDiv = document.getElementById("resultado");
const botonJugar = document.getElementById("botonJugar");

function iniciarJuego() {
  preguntasUsadas = [];
  resultadoDiv.innerHTML = "";
  mostrarPregunta();
}

function mostrarPregunta() {
  // Elegir preguntas aleatorias sin repetir
  let preguntasAleatorias = [];
  while(preguntasAleatorias.length < cantidadPorPartida){
    let indice = Math.floor(Math.random() * preguntas.length);
    let pregunta = preguntas[indice];
    if(!preguntasAleatorias.includes(pregunta)){
      preguntasAleatorias.push(pregunta);
    }
  }
  preguntasUsadas = preguntasAleatorias;
  mostrarSiguientePregunta(0);
}

function mostrarSiguientePregunta(indice) {
  if(indice >= preguntasUsadas.length){
    mostrarResultado();
    return;
  }

  preguntaDiv.innerText = preguntasUsadas[indice];
  opcionesDiv.innerHTML = "";

  ["Sí","No"].forEach(opcion => {
    const boton = document.createElement("button");
    boton.innerText = opcion;
    boton.onclick = () => mostrarSiguientePregunta(indice + 1);
    opcionesDiv.appendChild(boton);
  });
}

function mostrarResultado() {
  preguntaDiv.innerText = "";
  opcionesDiv.innerHTML = "";
  resultadoDiv.innerHTML = "✨ Tu instinto dice algo especial. Tu instinto puede cambiar. Intenta otra vez. H.B.G. ✨";
}

botonJugar.addEventListener("click", iniciarJuego);
