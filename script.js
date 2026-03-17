// VARIABLES
const preguntas = [
  {p:"Cuando algo inesperado ocurre...", f:"Tu reacción dice mucho de ti.", r:[
    {t:"Actúo rápido ⚡",v:"rapido"}, {t:"Pienso primero 🧠",v:"analitico"}, {t:"Sigo mi intuición 🌙",v:"intuicion"}
  ]},
  {p:"Cuando debes tomar una decisión importante...", f:"No siempre hay tiempo para pensar.", r:[
    {t:"Decido rápido ⚡",v:"rapido"}, {t:"Analizo opciones 🧠",v:"analitico"}, {t:"Confío en lo que siento 🌙",v:"intuicion"}
  ]},
  {p:"Cuando conoces a alguien nuevo...", f:"Tu mente analiza señales.", r:[
    {t:"Hablar de inmediato 😄",v:"rapido"}, {t:"Observar primero 👀",v:"analitico"}, {t:"Sentir su energía ✨",v:"intuicion"}
  ]},
  {p:"Si surge un problema inesperado...", f:"Cada mente reacciona diferente.", r:[
    {t:"Improviso solución ⚡",v:"rapido"}, {t:"Analizo el problema 🧠",v:"analitico"}, {t:"Confío en mi percepción 🌙",v:"intuicion"}
  ]},
  {p:"Cuando alguien te pide consejo...", f:"Tu mente busca una respuesta.", r:[
    {t:"Respondo rápido ⚡",v:"rapido"}, {t:"Analizo la situación 🧠",v:"analitico"}, {t:"Intento sentir su problema ❤️",v:"intuicion"}
  ]},
  {p:"Cuando eliges entre varias opciones...", f:"Tu instinto se activa.", r:[
    {t:"Elijo rápido ⚡",v:"rapido"}, {t:"Comparo ventajas 🧠",v:"analitico"}, {t:"Sigo mi intuición 🌙",v:"intuicion"}
  ]},
  {p:"Cuando algo parece sospechoso...", f:"Tu mente intenta entender.", r:[
    {t:"Reacciono rápido ⚡",v:"rapido"}, {t:"Busco pruebas 🧠",v:"analitico"}, {t:"Confío en mi sensación 🌙",v:"intuicion"}
  ]}
];

let indice = 0;
let puntos = {rapido:0, analitico:0, intuicion:0};
let sonido = true;

// SONIDO
const clickSound = new Audio("https://www.soundjay.com/button/sounds/button-16.mp3");

// ELEMENTOS
const inicio = document.getElementById("inicio");
const juego = document.getElementById("juego");
const resultado = document.getElementById("resultado");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const shareBtn = document.getElementById("shareBtn");
const challengeBtn = document.getElementById("challengeBtn");
const soundToggle = document.getElementById("soundToggle");

// FUNCIONES
function playClick(){ if(sonido) clickSound.play(); }

function iniciarJuego(){
  playClick();
  inicio.classList.add("oculto");
  juego.classList.remove("oculto");
  indice=0; puntos={rapido:0,analitico:0,intuicion:0};
  mostrarPregunta();
}

function mostrarPregunta(){
  const q = preguntas[indice];
  document.getElementById("pregunta").innerText = q.p;
  document.getElementById("frase").innerText = q.f;
  const cont = document.getElementById("respuestas");
  cont.innerHTML="";
  q.r.forEach(r=>{
    const btn = document.createElement("button");
    btn.innerText = r.t;
    btn.onclick = ()=>{
      puntos[r.v]++;
      playClick();
      siguiente();
    }
    cont.appendChild(btn);
  });
  document.getElementById("progreso").innerText = `Pregunta ${indice+1} de 7`;
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = `${(indice/7)*100}%`;
}

function siguiente(){
  indice++;
  if(indice<preguntas.length){
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado(){
  juego.classList.add("oculto");
  resultado.classList.remove("oculto");

  let tipo="rapido";
  if(puntos.analitico>puntos[tipo]) tipo="analitico";
  if(puntos.intuicion>puntos[tipo]) tipo="intuicion";

  let titulo="", descripcion="";
  if(tipo=="rapido"){titulo="⚡ Instinto Rápido"; descripcion="Reaccionas antes que la mayoría."}
  if(tipo=="analitico"){titulo="🧠 Instinto Analítico"; descripcion="Prefieres pensar antes de actuar."}
  if(tipo=="intuicion"){titulo="🌙 Instinto Intuitivo"; descripcion="Confías mucho en lo que sientes."}

  document.getElementById("tipoInstinto").innerText=titulo;
  document.getElementById("descripcion").innerText=descripcion;

  const porcentaje = Math.floor(Math.random()*20)+60;
  document.getElementById("porcentaje").style.width=`${porcentaje}%`;
  document.getElementById("textoPorcentaje").innerText=`${porcentaje}% de las personas piensan como tú.`;
}

// COMPARTIR
function compartir(){
  const resultadoText=document.getElementById("tipoInstinto").innerText;
  const texto=`🧠 Descubrí mi tipo de mente:\n\n${resultadoText}\n\nDescúbrelo aquí:\nhttps://humbertogomez310-beep.github.io/instinto/`;
  if(navigator.share){ navigator.share({title:"INSTINTO", text:texto}); }
  else{ alert(texto); }
}

// DESAFÍO
function desafiar(){
  const resultadoText=document.getElementById("tipoInstinto").innerText;
  const texto=`🔥 Te reto a descubrir tu INSTINTO\n\nYo obtuve:\n${resultadoText}\n\n¿Puedes superarlo?\nhttps://humbertogomez310-beep.github.io/instinto/`;
  if(navigator.share){ navigator.share({title:"INSTINTO", text:texto}); }
  else{ alert(texto); }
}

// BOTONES
startBtn.onclick=iniciarJuego;
restartBtn.onclick=iniciarJuego;
shareBtn.onclick=compartir;
challengeBtn.onclick=desafiar;

soundToggle.onclick=()=>{ sonido=!sonido; soundToggle.innerText = sonido ? "🔊" : "🔇"; }