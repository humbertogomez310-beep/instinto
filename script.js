document.addEventListener("DOMContentLoaded", function(){

alert("INSTINTO funcionando");

// Preguntas
let preguntas = [
  {p:"Cuando algo inesperado ocurre...", f:"Tu reacción dice mucho de ti.", r:[
    {t:"Actúo rápido ⚡",v:"rapido"},
    {t:"Pienso primero 🧠",v:"analitico"},
    {t:"Sigo mi intuición 🌙",v:"intuicion"}
  ]},
  {p:"Cuando debes tomar una decisión importante...", f:"No siempre hay tiempo para pensar.", r:[
    {t:"Decido rápido ⚡",v:"rapido"},
    {t:"Analizo opciones 🧠",v:"analitico"},
    {t:"Confío en lo que siento 🌙",v:"intuicion"}
  ]},
  {p:"Cuando conoces a alguien nuevo...", f:"Tu mente analiza señales.", r:[
    {t:"Hablar de inmediato 😄",v:"rapido"},
    {t:"Observar primero 👀",v:"analitico"},
    {t:"Sentir su energía ✨",v:"intuicion"}
  ]},
  {p:"Si surge un problema inesperado...", f:"Cada mente reacciona diferente.", r:[
    {t:"Improviso solución ⚡",v:"rapido"},
    {t:"Analizo el problema 🧠",v:"analitico"},
    {t:"Confío en mi percepción 🌙",v:"intuicion"}
  ]},
  {p:"Cuando alguien te pide consejo...", f:"Tu mente busca una respuesta.", r:[
    {t:"Respondo rápido ⚡",v:"rapido"},
    {t:"Analizo la situación 🧠",v:"analitico"},
    {t:"Intento sentir su problema ❤️",v:"intuicion"}
  ]},
  {p:"Cuando eliges entre varias opciones...", f:"Tu instinto se activa.", r:[
    {t:"Elijo rápido ⚡",v:"rapido"},
    {t:"Comparo ventajas 🧠",v:"analitico"},
    {t:"Sigo mi intuición 🌙",v:"intuicion"}
  ]},
  {p:"Cuando algo parece sospechoso...", f:"Tu mente intenta entender.", r:[
    {t:"Reacciono rápido ⚡",v:"rapido"},
    {t:"Busco pruebas 🧠",v:"analitico"},
    {t:"Confío en mi sensación 🌙",v:"intuicion"}
  ]}
];

let indice = 0;
let puntos = {rapido:0,analitico:0,intuicion:0};
let sonidoActivo = true;

// Función sonidos
document.getElementById("soundToggle").onclick = function(){
  sonidoActivo = !sonidoActivo;
  this.innerText = sonidoActivo ? "🔊" : "🔇";
};

// Iniciar juego
function iniciarJuego(){
  document.getElementById("inicio").classList.add("oculto");
  document.getElementById("juego").classList.remove("oculto");
  mostrarPregunta();
}

// Mostrar pregunta
function mostrarPregunta(){
  let q = preguntas[indice];
  let questionCard = document.getElementById("questionCard");
  questionCard.classList.remove("fade");
  void questionCard.offsetWidth;
  questionCard.classList.add("fade");

  document.getElementById("pregunta").innerText = q.p;
  document.getElementById("frase").innerText = q.f;

  let cont = document.getElementById("respuestas");
  cont.innerHTML = "";

  q.r.forEach(r=>{
    let btn = document.createElement("button");
    btn.innerText = r.t;
    btn.onclick = ()=>{
      if(sonidoActivo) console.log("🎵 Click sound"); // Aquí podrías añadir audio real
      puntos[r.v]++;
      siguiente();
    };
    cont.appendChild(btn);
  });

  document.getElementById("progreso").innerText = "Pregunta "+(indice+1)+" de 7";
  document.getElementById("progressBar").style.width = ((indice)/preguntas.length*100)+"%";
}

// Siguiente pregunta
function siguiente(){
  indice++;
  if(indice < preguntas.length) mostrarPregunta();
  else mostrarResultado();
}

// Mostrar resultado
function mostrarResultado(){
  document.getElementById("juego").classList.add("oculto");
  document.getElementById("resultado").classList.remove("oculto");

  let tipo = "rapido";
  if(puntos.analitico>puntos[tipo]) tipo="analitico";
  if(puntos.intuicion>puntos[tipo]) tipo="intuicion";

  let titulo="", descripcion="";
  if(tipo=="rapido"){titulo="⚡ Instinto Rápido"; descripcion="Reaccionas antes que la mayoría.";}
  if(tipo=="analitico"){titulo="🧠 Instinto Analítico"; descripcion="Prefieres pensar antes de actuar.";}
  if(tipo=="intuicion"){titulo="🌙 Instinto Intuitivo"; descripcion="Confías mucho en lo que sientes.";}

  document.getElementById("tipoInstinto").innerText = titulo;
  document.getElementById("descripcion").innerText = descripcion;

  let porcentaje = Math.floor(Math.random()*20)+60;
  document.getElementById("porcentaje").style.width = porcentaje+"%";
  document.getElementById("textoPorcentaje").innerText = porcentaje+"% de las personas piensan como tú.";

  // Ranking simulado
  document.getElementById("ranking").innerText = "50% de usuarios coincidieron con tu resultado.";
}

// Compartir
function compartir(){
  let resultado = document.getElementById("tipoInstinto").innerText;
  let texto = "🧠 Descubrí mi tipo de mente:\n\n"+resultado+"\n\nDescúbrelo aquí:\nhttps://humbertogomez310-beep.github.io/instinto/";

  if(navigator.share){navigator.share({title:"INSTINTO",text:texto});}
  else{alert(texto);}
}

// Reiniciar
function reiniciar(){location.reload();}

// BOTONES
document.getElementById("startBtn").onclick = iniciarJuego;
document.getElementById("shareBtn").onclick = compartir;
document.getElementById("restartBtn").onclick = reiniciar;
document.getElementById("challengeBtn").onclick = function(){
  let resultado = document.getElementById("tipoInstinto").innerText;
  let texto = "🔥 Te reto a descubrir tu INSTINTO\n\nYo obtuve:\n"+resultado+"\n\n¿Puedes superarlo?\nhttps://humbertogomez310-beep.github.io/instinto/";
  if(navigator.share){navigator.share({title:"INSTINTO",text:texto});}
  else{alert(texto);}
};