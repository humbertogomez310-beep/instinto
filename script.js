const questions = [
{
question:"Si escuchas un ruido en la noche...",
image:"https://picsum.photos/300?1",
answers:[
{text:"Ignorarlo",instinct:"Sereno"},
{text:"Investigar",instinct:"Valiente"},
{text:"Taparte con la cobija",instinct:"Observador"}
]
},
{
question:"Alguien te reta...",
image:"https://picsum.photos/300?2",
answers:[
{text:"Aceptas",instinct:"Valiente"},
{text:"Piensas primero",instinct:"Estratégico"},
{text:"Lo ignoras",instinct:"Sereno"}
]
},
{
question:"En un grupo tú eres...",
image:"https://picsum.photos/300?3",
answers:[
{text:"El líder",instinct:"Dominante"},
{text:"El que observa",instinct:"Observador"},
{text:"El que anima",instinct:"Social"}
]
},
{
question:"Si ves un peligro...",
image:"https://picsum.photos/300?4",
answers:[
{text:"Enfrentas",instinct:"Valiente"},
{text:"Proteges a otros",instinct:"Protector"},
{text:"Analizas",instinct:"Estratégico"}
]
},
{
question:"Cuando decides algo...",
image:"https://picsum.photos/300?5",
answers:[
{text:"Actúas rápido",instinct:"Impulsivo"},
{text:"Lo piensas",instinct:"Estratégico"},
{text:"Sigues tu emoción",instinct:"Intenso"}
]
},
{
question:"En una aventura...",
image:"https://picsum.photos/300?6",
answers:[
{text:"Exploras",instinct:"Libre"},
{text:"Planeas",instinct:"Estratégico"},
{text:"Motivas al grupo",instinct:"Social"}
]
},
{
question:"Tu reacción natural es...",
image:"https://picsum.photos/300?7",
answers:[
{text:"Actuar",instinct:"Valiente"},
{text:"Pensar",instinct:"Estratégico"},
{text:"Sentir",instinct:"Intenso"}
]
}
];

let currentQuestion=0;
let scores={};

const startBtn=document.getElementById("startBtn");
const game=document.getElementById("game");
const explodeScreen=document.getElementById("explodeScreen");
const resultScreen=document.getElementById("resultScreen");

startBtn.onclick=startGame;

function startGame(){

startBtn.style.display="none";

game.classList.remove("hidden");

showQuestion();

}

function showQuestion(){

let q=questions[currentQuestion];

document.getElementById("questionNumber").innerText=
"Pregunta "+(currentQuestion+1)+" de 7";

document.getElementById("questionText").innerText=q.question;

document.getElementById("questionImage").src=q.image;

let answersDiv=document.getElementById("answers");
answersDiv.innerHTML="";

q.answers.forEach(a=>{

let btn=document.createElement("button");

btn.innerText=a.text;

btn.onclick=()=>selectAnswer(a.instinct);

answersDiv.appendChild(btn);

});

}

function selectAnswer(instinct){

scores[instinct]=(scores[instinct]||0)+1;

currentQuestion++;

if(currentQuestion>=7){

game.classList.add("hidden");

explodeScreen.classList.remove("hidden");

}else{

showQuestion();

}

}

document.getElementById("explodeBtn").onclick=function(){

explodeScreen.classList.add("hidden");

showResult();

}

function showResult(){

resultScreen.classList.remove("hidden");

let winner=Object.keys(scores).reduce((a,b)=>
scores[a]>scores[b]?a:b
);

document.getElementById("instinctResult").innerText=winner;

let percent=Math.floor(Math.random()*20)+70;

document.getElementById("percentText").innerText=
percent+"% de las personas piensan como tú";

setTimeout(()=>{
document.getElementById("percentBar").style.width=percent+"%";
},200);

}

function restartGame(){

location.reload();

}

function shareResult(){

alert("Comparte tu instinto con tus amigos");

}

function challengeFriend(){

alert("Desafía a un amigo a descubrir su instinto");

}