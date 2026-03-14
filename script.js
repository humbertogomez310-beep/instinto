const preguntas = [
{p:"¿Cómo tomas decisiones importantes?", o:["Rápidamente","Pensándolo mucho","Siguiendo tu intuición"]},
{p:"¿Qué haces ante un problema inesperado?", o:["Actuar rápido","Analizar primero","Esperar un poco"]},
{p:"¿Cómo reaccionas ante un cambio?", o:["Me adapto rápido","Lo pienso bien","Lo siento primero"]},
{p:"¿Confías en tu primera impresión?", o:["Siempre","A veces","Rara vez"]},
{p:"¿Cómo eliges entre varias opciones?", o:["La más rápida","La más lógica","La que siento correcta"]},
{p:"¿Qué haces si alguien te contradice?", o:["Defiendo mi idea","Escucho primero","Reflexiono"]},
{p:"¿Cómo enfrentas una oportunidad nueva?", o:["La tomo","La analizo","La siento"]},
{p:"¿Cómo reaccionas ante presión?", o:["Actúo rápido","Pienso más","Me dejo guiar"]},
{p:"¿Qué haces cuando dudas?", o:["Decido ya","Investigo","Escucho mi intuición"]},
{p:"¿Cómo tomas riesgos?", o:["Sin miedo","Con cálculo","Solo si lo siento bien"]},
{p:"¿Qué haces ante un reto?", o:["Lo enfrento","Lo estudio","Lo observo"]},
{p:"¿Cómo eliges a quién confiar?", o:["Por intuición","Por hechos","Por tiempo"]},
{p:"¿Qué haces con una idea nueva?", o:["La intento","La analizo","La imagino"]},
{p:"¿Cómo manejas el estrés?", o:["Actuando","Pensando","Respirando"]},
{p:"¿Qué haces cuando te equivocas?", o:["Intento de nuevo","Reflexiono","Aprendo del momento"]},
];

let preguntasJuego = [];
let indice = 0;

const inicio = document.getElementById("inicio");
const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");

const preguntaEl = document.getElementById("pregunta");
const opcionesEl = document.getElementById("opciones");
const progresoEl = document.getElementById("progreso");

const tipoInstinto = document.getElementById("tipoInstinto");
const porcentajeEl = document.getElementById("porcentaje");

document.getElementById("startBtn").onclick = iniciarJuego;
document.getElementById("restartBtn").onclick = iniciarJuego;
document.getElementById("shareBtn").onclick = compartir;

function iniciarJuego(){

inicio.classList.add("hidden");
resultado.classList.add("hidden");
quiz.classList.remove("hidden");

preguntasJuego = preguntas.sort(()=>0.5-Math.random()).slice(0,7);

indice=0;

mostrarPregunta();
}

function mostrarPregunta(){

const q = preguntasJuego[indice];

progresoEl.innerText = "Pregunta "+(indice+1)+" / 7";

preguntaEl.innerText = q.p;

opcionesEl.innerHTML="";

q.o.forEach(op=>{
const btn=document.createElement("button");
btn.innerText=op;

btn.onclick=()=>{
indice++;

if(indice<7){
mostrarPregunta();
}else{
mostrarResultado();
}
};

opcionesEl.appendChild(btn);
});

}

function mostrarResultado(){

quiz.classList.add("hidden");
resultado.classList.remove("hidden");

const instintos=[
"Instinto Analítico 🧠",
"Instinto Intuitivo ⚡",
"Instinto Audaz 🔥",
"Instinto Sereno 🌊"
];

const elegido = instintos[Math.floor(Math.random()*instintos.length)];

tipoInstinto.innerText=elegido;

const porcentaje = Math.floor(Math.random()*11)+60;

porcentajeEl.innerText="El "+porcentaje+"% de las personas piensan como tú.";
}

function compartir(){

const texto =
"Descubrí mi instinto en INSTINTO 🧠\n\n"+
tipoInstinto.innerText+"\n"+
porcentajeEl.innerText+"\n\n"+
"Tu instinto puede cambiar. Intenta otra vez.\n\nH.B.G.";

navigator.share({text:texto});

}