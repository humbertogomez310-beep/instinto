/* INSTINTO - script.js
   - 30 preguntas pulidas
   - 7 preguntas aleatorias por partida
   - 4 instintos: rapido / analitico / intuitivo / lider
   - barra de progreso, contador, animaciones
   - sonido en botones (persistente)
   - compartir con fallback
*/

// ----- PREGUNTAS (30) -----
const preguntas = [
  {p:"¿Qué haces cuando te llega una noticia inesperada?", r:[
      {t:"Actúo de inmediato", v:"rapido"},
      {t:"Pienso las opciones", v:"analitico"},
      {t:"Observo antes de decidir", v:"intuitivo"}], f:"Las noticias rápidas miden tu reacción."},

  {p:"Si tienes que elegir entre dos planes a la misma hora, ¿qué haces?", r:[
      {t:"Elijo el que apareció primero", v:"rapido"},
      {t:"Peso pros y contras", v:"analitico"},
      {t:"Sigo lo que siento correcto", v:"intuitivo"}], f:"Elegir rápido o pensar: tu estilo sale a la luz."},

  {p:"En el trabajo, si algo sale mal frente a otros, ¿cómo reaccionas?", r:[
      {t:"Lo arreglo ya", v:"rapido"},
      {t:"Analizo la causa", v:"analitico"},
      {t:"Me tomo un momento y actúo después", v:"intuitivo"}], f:"El manejo del error muestra tu instinto."},

  {p:"Al conocer a alguien nuevo, ¿qué te dice la primera impresión?", r:[
      {t:"Confío en ella", v:"rapido"},
      {t:"La tomo como dato", v:"analitico"},
      {t:"No me guío por eso", v:"intuitivo"}], f:"La primera impresión pesa para muchos instintos."},

  {p:"Cuando te ofrecen una oportunidad que suena bien, ¿qué haces?", r:[
      {t:"La acepto sin pensarlo", v:"rapido"},
      {t:"La evalúo a fondo", v:"analitico"},
      {t:"Siento si es el momento correcto", v:"intuitivo"}], f:"La impulsividad y la pausa hablan de ti."},

  {p:"Si sientes ansiedad por una decisión, ¿cómo procedes?", r:[
      {t:"Actúo para quitarme la ansiedad", v:"rapido"},
      {t:"Recopilo información", v:"analitico"},
      {t:"Me dejo guiar por mi intuición", v:"intuitivo"}], f:"La ansiedad revela tu forma de decidir."},

  {p:"Ante una crítica fuerte, ¿cómo respondes?", r:[
      {t:"Contesto de inmediato", v:"rapido"},
      {t:"Analizo si tiene sentido", v:"analitico"},
      {t:"Me lo guardo y reflexiono", v:"intuitivo"}], f:"La crítica pone a prueba tu control."},

  {p:"Si un amigo te pide un favor que te complica, ¿qué haces?", r:[
      {t:"Lo hago de inmediato", v:"rapido"},
      {t:"Busco la forma más lógica", v:"analitico"},
      {t:"Le pregunto cómo me hace sentir", v:"intuitivo"}], f:"La ayuda revela prioridades y límites."},

  {p:"Cuando surge un imprevisto en la calle, ¿qué haces?", r:[
      {t:"Intervengo ya", v:"rapido"},
      {t:"Pienso la mejor solución", v:"analitico"},
      {t:"Observo y decido después", v:"intuitivo"}], f:"Los imprevistos muestran tu estilo de acción."},

  {p:"Si debes decidir en 2 minutos, ¿cómo eliges?", r:[
      {t:"Me guío por lo primero que pienso", v:"rapido"},
      {t:"Busco la opción más razonable", v:"analitico"},
      {t:"Sigo mi corazonada", v:"intuitivo"}], f:"Bajo tiempo, tu instinto sale a flote."},

  {p:"¿Cómo actúas ante un cambio grande en tu vida?", r:[
      {t:"Me adapto rápido", v:"rapido"},
      {t:"Hago un plan y lo sigo", v:"analitico"},
      {t:"Siento si quiero cambiar", v:"intuitivo"}], f:"El cambio revela flexibilidad o cautela."},

  {p:"Si te ofrecen un trabajo con riesgo, ¿qué consideras primero?", r:[
      {t:"La oportunidad inmediata", v:"rapido"},
      {t:"Los números y condiciones", v:"analitico"},
      {t:"Si me hace sentido profundo", v:"intuitivo"}], f:"El riesgo mide tu relación con lo incierto."},

  {p:"Cuando algo no sale como planeaste, ¿cuál es tu primer paso?", r:[
      {t:"Tomar acción para arreglarlo", v:"rapido"},
      {t:"Analizar qué falló", v:"analitico"},
      {t:"Respirar y sentir antes de actuar", v:"intuitivo"}], f:"Tu primer paso define tu patrón."},

  {p:"¿Cómo eliges a quién confiar un secreto?", r:[
      {t:"Por intuición instantánea", v:"rapido"},
      {t:"Por lo que sabes de esa persona", v:"analitico"},
      {t:"Por el tiempo que la conoces", v:"intuitivo"}], f:"Confiar implica instinto y evidencia."},

  {p:"Si debes negociar y te presionan, ¿qué haces?", r:[
      {t:"Cedo rápido para cerrar", v:"rapido"},
      {t:"Busco argumentos sólidos", v:"analitico"},
      {t:"Escucho y sigo el feeling", v:"intuitivo"}], f:"La presión revela si eres de acción o de análisis."},

  {p:"En una fiesta donde no conoces a nadie, ¿cómo actúas?", r:[
      {t:"Voy a hablar con la gente", v:"rapido"},
      {t:"Observo y elijo con quién hablar", v:"analitico"},
      {t:"Busco a alguien con buena vibra", v:"intuitivo"}], f:"Lo social muestra tu instinto interpersonal."},

  {p:"¿Qué haces cuando recibes varias opciones de compra?", r:[
      {t:"Elijo la más atractiva ahora", v:"rapido"},
      {t:"Comparo características", v:"analitico"},
      {t:"Siento cuál me convence", v:"intuitivo"}], f:"Consumir también es una decisión instintiva."},

  {p:"Si te encuentras con una discusión entre conocidos, ¿qué haces?", r:[
      {t:"Intervengo ya", v:"rapido"},
      {t:"Analizo y propongo solución", v:"analitico"},
      {t:"Escucho y decido después", v:"intuitivo"}], f:"Los conflictos ponen a prueba tu estilo."},

  {p:"Cuando comienzas un proyecto personal, ¿cómo lo planificas?", r:[
      {t:"Empiezo ya y corrijo sobre la marcha", v:"rapido"},
      {t:"Hago un plan detallado", v:"analitico"},
      {t:"Sigo lo que me inspira", v:"intuitivo"}], f:"Iniciar revela si eres impulsivo o reflexivo."},

  {p:"Si notas que alguien te miente, ¿cómo reaccionas?", r:[
      {t:"Lo confrontas de inmediato", v:"rapido"},
      {t:"Busco pruebas primero", v:"analitico"},
      {t:"Observo y actúo después", v:"intuitivo"}], f:"La honestidad desencadena tu respuesta."},

  {p:"Ante una decisión sentimental importante, ¿qué pesa más?", r:[
      {t:"La pasión del momento", v:"rapido"},
      {t:"La lógica a largo plazo", v:"analitico"},
      {t:"La sensación interna", v:"intuitivo"}], f:"El amor también obedece a un tipo de instinto."},

  {p:"Si tu equipo falla un objetivo, ¿qué propones?", r:[
      {t:"Actuar rápido para recuperar", v:"rapido"},
      {t:"Revisar procesos y datos", v:"analitico"},
      {t:"Parar y recalibrar según sensaciones", v:"intuitivo"}], f:"El liderazgo revela tu estilo ante fallos."},

  {p:"Cuando te abren una puerta inesperada, ¿qué haces primero?", r:[
      {t:"Tomarla y aprender", v:"rapido"},
      {t:"Evaluarla con detalles", v:"analitico"},
      {t:"Preguntarme si me resuena", v:"intuitivo"}], f:"Las puertas inesperadas prueban tu apertura."},

  {p:"Si algo te genera miedo pero también curiosidad, ¿cómo respondes?", r:[
      {t:"Me lanzo de todas formas", v:"rapido"},
      {t:"Analizo riesgos y mitigo", v:"analitico"},
      {t:"Sigo mi intuición si me calma", v:"intuitivo"}], f:"El miedo y la curiosidad definen límites."},

  {p:"¿Cómo reaccionas cuando algo no tiene solución inmediata?", r:[
      {t:"Intento alternativas ya", v:"rapido"},
      {t:"Desgloso el problema", v:"analitico"},
      {t:"Acepto y espero el momento adecuado", v:"intuitivo"}], f:"La paciencia o la acción: ¿qué eliges?"},

  {p:"Si debes decidir sobre dinero importante, ¿qué prioridad sigues?", r:[
      {t:"Tomar oportunidad", v:"rapido"},
      {t:"Cálculo y proyección", v:"analitico"},
      {t:"Confío en mi presentimiento", v:"intuitivo"}], f:"El dinero revela prioridades prácticas vs emocionales."},

  {p:"Cuando algo te molesta en una relación, ¿qué haces?", r:[
      {t:"Lo digo en caliente", v:"rapido"},
      {t:"Pienso cómo decirlo", v:"analitico"},
      {t:"Lo siento y hablo cuando estoy listo", v:"intuitivo"}], f:"La comunicación también tiene instinto."},

  {p:"Si un plan falla en el último minuto, ¿qué haces?", r:[
      {t:"Improviso otra cosa", v:"rapido"},
      {t:"Analizo qué salió mal", v:"analitico"},
      {t:"Me tomo un respiro y elijo", v:"intuitivo"}], f:"La resiliencia muestra tu manera de pensar."},

  {p:"¿Qué haces si te ofrecen liderar un proyecto arriesgado?", r:[
      {t:"Acepto y me lanzo", v:"lider"},
      {t:"Preparo estrategia detallada", v:"analitico"},
      {t:"Siento si estoy listo", v:"intuitivo"}], f:"Liderar implica acción, análisis o intuición."}
];

// ----- ESTADO -----
let juego = [];
let idx = 0;
let puntos = { rapido:0, analitico:0, intuitivo:0, lider:0 };

// ----- DOM -----
const startBtn = document.getElementById("startBtn");
const soundBtn = document.getElementById("soundBtn");
const preguntaEl = document.getElementById("pregunta");
const fraseEl = document.getElementById("frase");
const opcionesEl = document.getElementById("opciones");
const contadorEl = document.getElementById("contador");
const progresoBar = document.getElementById("progresoBar");

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("game");
const resultScreen = document.getElementById("result");

const instintoEl = document.getElementById("instinto");
const porcentajeEl = document.getElementById("porcentaje");
const rellenoEl = document.getElementById("relleno");
const descripcionEl = document.getElementById("descripcion");

const shareBtn = document.getElementById("shareBtn");
const restartBtn = document.getElementById("restartBtn");

// ----- SONIDO (persistente) -----
let sonido = localStorage.getItem("instinto_sonido") !== "off";
soundBtn.innerText = sonido ? "🔊 Sonido" : "🔇 Silencio";

const clickAudio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3");
clickAudio.preload = "auto";

// función de tono (suave) para microfeedback
function playTone(freq=440, dur=120){
  if(!sonido) return;
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = freq;
    o.type = "sine";
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.01);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur/1000);
    setTimeout(()=>{ o.stop(); ctx.close(); }, dur+20);
  }catch(e){}
}

soundBtn.addEventListener("click", ()=>{
  sonido = !sonido;
  localStorage.setItem("instinto_sonido", sonido ? "on":"off");
  soundBtn.innerText = sonido ? "🔊 Sonido" : "🔇 Silencio";
  playTone(300, 100);
});

// ----- INICIAR JUEGO -----
startBtn.addEventListener("click", ()=>{
  playTone(520,120);
  // reset estado
  puntos = { rapido:0, analitico:0, intuitivo:0, lider:0 };
  juego = preguntas.slice().sort(()=>0.5 - Math.random()).slice(0,7);
  idx = 0;
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  renderPregunta();
});

// ----- RENDER PREGUNTA -----
function renderPregunta(){
  const item = juego[idx];
  preguntaEl.innerText = item.p;
  fraseEl.innerText = item.f || "";
  contadorEl.innerText = `Pregunta ${idx+1} de 7`;
  progresoBar.style.width = `${Math.round((idx/7)*100)}%`;
  opcionesEl.innerHTML = "";

  item.r.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "opcionBtn";
    btn.innerText = opt.t;
    btn.addEventListener("click", ()=>{
      if(sonido) {
        clickAudio.currentTime = 0;
        clickAudio.play().catch(()=>playTone(600,80));
      }
      // sumar punto
      if(opt.v && puntos.hasOwnProperty(opt.v)) puntos[opt.v] = (puntos[opt.v] || 0) + 1;
      // siguiente
      idx++;
      // animación pequeña de cambio: fade
      gameScreen.classList.remove("fade");
      void gameScreen.offsetWidth;
      gameScreen.classList.add("fade");
      if(idx < 7) renderPregunta(); else mostrarResultado();
    });
    opcionesEl.appendChild(btn);
  });
}

// ----- MOSTRAR RESULTADO -----
function mostrarResultado(){
  gameScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  // decidir tipo por mayor puntaje (prioridad: lider > rapido > analitico > intuitivo para empates razonables)
  const orderPriority = ["lider","rapido","analitico","intuitivo"];
  let winner = orderPriority[0];
  for(const k of Object.keys(puntos)){
    if(puntos[k] > (puntos[winner]||0)) winner = k;
  }
  // si hay empates, elegir por prioridad definida
  const maxScore = Math.max(...Object.values(puntos));
  const ties = Object.keys(puntos).filter(k => puntos[k] === maxScore);
  if(ties.length > 1){
    for(const pref of orderPriority){
      if(ties.includes(pref)){ winner = pref; break; }
    }
  }

  let tipoTxt = "";
  let descTxt = "";
  if(winner === "rapido"){ tipoTxt = "Instinto Rápido ⚡"; descTxt = "Actúas con impulso y energía. Prefieres la acción sobre la duda."; }
  else if(winner === "analitico"){ tipoTxt = "Instinto Analítico 🧠"; descTxt = "Piensas, comparas y eliges con datos. La lógica guía tus decisiones."; }
  else if(winner === "intuitivo"){ tipoTxt = "Instinto Intuitivo 🌙"; descTxt = "Confías en sensaciones y corazonadas. Tu intuición te orienta."; }
  else { tipoTxt = "Instinto Líder 🔥"; descTxt = "Tiendes a tomar control y guiar a otros; la iniciativa te define."; }

  instintoEl.innerText = tipoTxt;
  descripcionEl.innerText = descTxt;

  // porcentaje 60-70
  const p = Math.floor(Math.random()*11)+60; // 60..70
  porcentajeEl.innerText = `El ${p}% de las personas piensan como tú.`;
  // animar barra
  rellenoEl.style.width = "0%";
  setTimeout(()=> rellenoEl.style.width = p + "%", 140);

  // contador animado opcional (muestra el incremento en texto)
  animateCounter(porcentajeEl, p, 900);

  playTone(320,180);
}

// contador animado
function animateCounter(el, target, duration){
  const baseText = `El %d% de las personas piensan como tú.`;
  let current = 60;
  const step = Math.max(1, Math.floor((target - 60) / (duration / 30)));
  el.innerText = `El ${current}% de las personas piensan como tú.`;
  const timer = setInterval(()=>{
    current = Math.min(target, current + step);
    el.innerText = `El ${current}% de las personas piensan como tú.`;
    if(current >= target) clearInterval(timer);
  }, 30);
}

// ----- COMPARTIR -----
shareBtn.addEventListener("click", async ()=>{
  const title = instintoEl.innerText || "Mi resultado en INSTINTO 🧠";
  const text = `${title}\n${porcentajeEl.innerText}\n\nTu instinto puede cambiar. Intenta otra vez.\n\nH.B.G.\n${location.href}`;
  if(navigator.share){
    try{ await navigator.share({text, url: location.href}); return; } catch(e){}
  }
  if(navigator.clipboard){
    try{ await navigator.clipboard.writeText(text); alert("Resultado copiado al portapapeles."); return; } catch(e){}
  }
  alert(text);
});

// ----- REINICIAR -----
restartBtn.addEventListener("click", ()=>{
  // reset visual
  rellenoEl.style.width = "0%";
  // volver a inicio
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  playTone(520,100);
});