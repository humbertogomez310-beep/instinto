let preguntas=[

{
p:"Cuando enfrentas algo nuevo normalmente...",
r:[
{t:"Actúo y veo qué pasa ⚡",v:"rapido"},
{t:"Prefiero analizar primero 🧠",v:"analitico"},
{t:"Me dejo guiar por intuición 🌙",v:"intuicion"}
]
},

{
p:"Si debes tomar una decisión importante...",
r:[
{t:"Decido rápido ⚡",v:"rapido"},
{t:"Comparo todas las opciones 🧠",v:"analitico"},
{t:"Siento cuál es la correcta 🌙",v:"intuicion"}
]
},

{
p:"Cuando surge un problema inesperado...",
r:[
{t:"Busco solución inmediata ⚡",v:"rapido"},
{t:"Analizo qué lo causó 🧠",v:"analitico"},
{t:"Confío en mi percepción 🌙",v:"intuicion"}
]
},

{
p:"Cuando conoces a alguien nuevo...",
r:[
{t:"Hablo de inmediato ⚡",v:"rapido"},
{t:"Observó primero 🧠",v:"analitico"},
{t:"Percibo su energía 🌙",v:"intuicion"}
]
},

{
p:"Cuando debes elegir entre opciones...",
r:[
{t:"Elijo rápido ⚡",v:"rapido"},
{t:"Comparo ventajas 🧠",v:"analitico"},
{t:"Confío en intuición 🌙",v:"intuicion"}
]
},

{
p:"Cuando algo sale mal...",
r:[
{t:"Improviso solución ⚡",v:"rapido"},
{t:"Analizo qué falló 🧠",v:"analitico"},
{t:"Reflexiono antes 🌙",v:"intuicion"}
]
},

{
p:"Cuando alguien te pide consejo...",
r:[
{t:"Respondo rápido ⚡",v:"rapido"},
{t:"Analizo situación 🧠",v:"analitico"},
{t:"Intento entender emociones 🌙",v:"intuicion"}
]
}

]

let indice=0

let puntos={
rapido:0,
analitico:0,
intuicion:0
}

function iniciarJuego(){

document.getElementById("inicio").classList.add("oculto")
document.getElementById("juego").classList.remove("oculto")

mostrarPregunta()

}

function mostrarPregunta(){

let q=preguntas[indice]

document.getElementById("pregunta").innerText=q.p

let cont=document.getElementById("respuestas")

cont.innerHTML=""

q.r.forEach(r=>{

let btn=document.createElement("button")

btn.innerText=r.t

btn.onclick=()=>{

puntos[r.v]++

siguiente()

}

cont.appendChild(btn)

})

document.getElementById("progreso").innerText="Pregunta "+(indice+1)+" de "+preguntas.length

}

function siguiente(){

indice++

if(indice<preguntas.length){

mostrarPregunta()

}else{

analizar()

}

}

function analizar(){

document.getElementById("juego").classList.add("oculto")

setTimeout(mostrarResultado,1200)

}

function mostrarResultado(){

document.getElementById("resultado").classList.remove("oculto")

let tipo="rapido"

if(puntos.analitico>puntos[tipo])tipo="analitico"
if(puntos.intuicion>puntos[tipo])tipo="intuicion"

let titulo=""
let descripcion=""

if(tipo=="rapido"){
titulo="⚡ Instinto Rápido"
descripcion="Reaccionas con rapidez y tomas decisiones sin dudar."
}

if(tipo=="analitico"){
titulo="🧠 Instinto Analítico"
descripcion="Prefieres analizar antes de actuar y entender cada detalle."
}

if(tipo=="intuicion"){
titulo="🌙 Instinto Intuitivo"
descripcion="Confías en tu percepción emocional para decidir."
}

document.getElementById("tipoInstinto").innerText=titulo

document.getElementById("descripcion").innerText=descripcion

let porcentaje=Math.floor(Math.random()*10)+60

document.getElementById("porcentaje").style.width=porcentaje+"%"

document.getElementById("textoPorcentaje").innerText=
porcentaje+"% de las personas piensan como tú."

let secundarios=["⚡ Instinto Rápido","🧠 Instinto Analítico","🌙 Instinto Intuitivo"]

let extra=secundarios[Math.floor(Math.random()*secundarios.length)]

document.getElementById("instintoExtra").innerText=
"⚠ También muestras señales de: "+extra

}

function compartir(){

let resultado=document.getElementById("tipoInstinto").innerText

let texto=
"🧠 Hice este test de instinto y este fue mi resultado:\n\n"+
resultado+
"\n\n¿Tu mente funciona igual?\n"+
"https://humbertogomez310-beep.github.io/instinto/"

if(navigator.share){

navigator.share({
title:"INSTINTO",
text:texto
})

}else{

alert(texto)

}

}

function reiniciar(){

location.reload()

}


let contador=localStorage.getItem("instinto_contador")

if(!contador){contador=1200}

contador++

localStorage.setItem("instinto_contador",contador)

document.getElementById("contador").innerText=
"👥 "+contador+" personas ya probaron INSTINTO"