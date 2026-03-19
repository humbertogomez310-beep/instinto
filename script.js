JavaScript
const preguntas = [

{
texto:"Si escuchas un ruido en la noche...",
opciones:["Ignorarlo","Investigar","Taparte con la cobija"]
},

{
texto:"Si alguien te provoca...",
opciones:["Responder","Ignorar","Planear algo"]
},

{
texto:"Si ves una oportunidad...",
opciones:["Tomarla rápido","Analizarla","Esperar"]
},

{
texto:"Si estás en peligro...",
opciones:["Pelear","Escapar","Pensar"]
},

{
texto:"Si descubres un secreto...",
opciones:["Guardarlo","Contarlo","Usarlo"]
}

];

let preguntaActual = 0;

function iniciarJuego(){

document.getElementById("inicio").classList.add("oculto");
document.getElementById("preguntaPantalla").classList.remove("oculto");

mostrarPregunta();

}

function mostrarPregunta(){

let p = preguntas[preguntaActual];

document.getElementById("contador").innerText =
"Pregunta "+(preguntaActual+1)+" de "+preguntas.length;

document.getElementById("pregunta").innerText = p.texto;

let opcionesHTML="";

p.opciones.forEach(op=>{

opcionesHTML += `<button onclick="siguiente()">${op}</button>`

})

document.getElementById("opciones").innerHTML = opcionesHTML;

}

function siguiente(){

preguntaActual++;

if(preguntaActual >= preguntas.length){

mostrarResultado();

}else{

mostrarPregunta();

}

}

function mostrarResultado(){

document.getElementById("preguntaPantalla").classList.add("oculto");
document.getElementById("resultadoPantalla").classList.remove("oculto");

let instintos=["Valiente","Estratégico","Prudente","Explorador"];

let instinto = instintos[Math.floor(Math.random()*instintos.length)];

let porcentaje = Math.floor(Math.random()*30)+70;

document.getElementById("instintoFinal").innerText = instinto;

document.getElementById("porcentaje").innerText =
porcentaje+"% de las personas piensan como tú";

document.getElementById("barraInterior").style.width = porcentaje+"%";

}

function reiniciar(){

location.reload();

}

function compartir(){

alert("Comparte tu resultado con tus amigos");

}

function desafiar(){

alert("Desafía a un amigo a descubrir su instinto");

}