let preguntas=[

{p:"¿Cómo tomas decisiones importantes?",
r:[
{t:"Actuar rápido ⚡",v:"rapido"},
{t:"Analizar todo 🧠",v:"analitico"},
{t:"Seguir intuición 🌙",v:"intuitivo"}],
f:"Tu primera reacción revela mucho."},

{p:"¿Qué haces ante un problema inesperado?",
r:[
{t:"Resolverlo ya",v:"rapido"},
{t:"Pensar opciones",v:"analitico"},
{t:"Observar primero",v:"intuitivo"}],
f:"Los problemas muestran tu instinto."},

{p:"¿Cómo reaccionas ante una crítica?",
r:[
{t:"Responder rápido",v:"rapido"},
{t:"Escuchar razones",v:"analitico"},
{t:"Reflexionar",v:"intuitivo"}],
f:"La reacción revela carácter."},

{p:"¿Qué haces ante una oportunidad nueva?",
r:[
{t:"Tomarla ya",v:"rapido"},
{t:"Evaluarla",v:"analitico"},
{t:"Sentir si es correcto",v:"intuitivo"}],
f:"Las oportunidades revelan impulso."},

{p:"¿Cómo reaccionas ante presión?",
r:[
{t:"Actuar rápido",v:"rapido"},
{t:"Pensar antes",v:"analitico"},
{t:"Respirar y sentir",v:"intuitivo"}],
f:"La presión revela personalidad."},

{p:"¿Cómo eliges entre varias opciones?",
r:[
{t:"La primera",v:"rapido"},
{t:"La más lógica",v:"analitico"},
{t:"La que siento",v:"intuitivo"}],
f:"Elegir también es instinto."},

{p:"¿Qué haces cuando dudas?",
r:[
{t:"Decidir ya",v:"rapido"},
{t:"Investigar más",v:"analitico"},
{t:"Escuchar intuición",v:"intuitivo"}],
f:"La duda también habla."},

{p:"¿Cómo reaccionas ante cambios?",
r:[
{t:"Adaptarme rápido",v:"rapido"},
{t:"Analizar situación",v:"analitico"},
{t:"Observar primero",v:"intuitivo"}],
f:"Cambiar revela reacción."},

{p:"¿Qué haces ante un reto?",
r:[
{t:"Enfrentarlo",v:"rapido"},
{t:"Estudiarlo",v:"analitico"},
{t:"Esperar momento",v:"intuitivo"}],
f:"Los retos revelan carácter."},

{p:"¿Cómo reaccionas ante lo desconocido?",
r:[
{t:"Explorar",v:"rapido"},
{t:"Analizar",v:"analitico"},
{t:"Observar",v:"intuitivo"}],
f:"Lo desconocido revela curiosidad."}

]

let juego=[]
let index=0

let puntos={
rapido:0,
analitico:0,
intuitivo:0
}

let sonido=localStorage.getItem("sonido")!=="off"

const startBtn=document.getElementById("startBtn")
const soundBtn=document.getElementById("soundBtn")
const pregunta=document.getElementById("pregunta")
const frase=document.getElementById("frase")
const opciones=document.getElementById("opciones")
const progreso=document.getElementById("progreso")

const inicio=document.getElementById("inicio")
const juegoDiv=document.getElementById("juego")
const resultado=document.getElementById("resultado")

const instinto=document.getElementById("instinto")
const porcentaje=document.getElementById("porcentaje")

soundBtn.innerText=sonido?"🔊 Sonido":"🔇 Silencio"

function play(freq){

if(!sonido)return

let ctx=new AudioContext()
let o=ctx.createOscillator()
let g=ctx.createGain()

o.connect(g)
g.connect(ctx.destination)

o.frequency.value=freq
o.start()

g.gain.exponentialRampToValueAtTime(0.00001,ctx.currentTime+0.2)

}

soundBtn.onclick=()=>{

sonido=!sonido

localStorage.setItem("sonido",sonido?"on":"off")

soundBtn.innerText=sonido?"🔊 Sonido":"🔇 Silencio"

}

startBtn.onclick=()=>{

play(700)

inicio.classList.add("hidden")
juegoDiv.classList.remove("hidden")

juego=[...preguntas].sort(()=>0.5-Math.random()).slice(0,7)

index=0

mostrar()

}

function mostrar(){

pregunta.innerText=juego[index].p
frase.innerText=juego[index].f

progreso.innerText="Pregunta "+(index+1)+" / 7"

opciones.innerHTML=""

juego[index].r.forEach(op=>{

let b=document.createElement("button")

b.innerText=op.t

b.onclick=()=>{

play(600)

puntos[op.v]++

index++

if(index<7){
mostrar()
}else{
terminar()
}

}

opciones.appendChild(b)

})

}

function terminar(){

juegoDiv.classList.add("hidden")
resultado.classList.remove("hidden")

let tipo=""

if(puntos.rapido>=puntos.analitico && puntos.rapido>=puntos.intuitivo){
tipo="Instinto Rápido ⚡"
}

else if(puntos.analitico>=puntos.rapido && puntos.analitico>=puntos.intuitivo){
tipo="Instinto Analítico 🧠"
}

else{
tipo="Instinto Intuitivo 🌙"
}

instinto.innerText=tipo

let p=Math.floor(Math.random()*11)+60

porcentaje.innerText=p+"% de las personas piensan como tú."

setTimeout(()=>{

document.getElementById("relleno").style.width=p+"%"

},200)

}

document.getElementById("shareBtn").onclick=()=>{

let text="Mi resultado en INSTINTO 🧠\n\n"+
instinto.innerText+"\n"+
porcentaje.innerText+"\n\n"+
"Tu instinto puede cambiar. Intenta otra vez.\n\nH.B.G."

navigator.share?
navigator.share({text:text,url:location.href}):
alert(text)

}

document.getElementById("restartBtn").onclick=()=>{

location.reload()

}