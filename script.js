const startBtn = document.getElementById("start-btn");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const loadingScreen = document.getElementById("loading-screen");
const resultScreen = document.getElementById("result-screen");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");
const questionCounter = document.getElementById("question-counter");

const resultTitle = document.getElementById("result-title");
const resultDescription = document.getElementById("result-description");
const resultStats = document.getElementById("result-stats");

const shareBtn = document.getElementById("share-btn");
const challengeBtn = document.getElementById("challenge-btn");
const copyBtn = document.getElementById("copy-btn");
const retryBtn = document.getElementById("retry-btn");

const appUrl = "https://humbertogomez310-beep.github.io/instinto/";

let currentQuestion = 0;
let scores = { A: 0, B: 0, C: 0, D: 0 };
let finalResult = null;

const questions = [
  {
    question: "Estás en una situación inesperada...",
    answers: [
      { text: "Actúo de inmediato", type: "A" },
      { text: "Observo primero", type: "B" },
      { text: "Pregunto a los demás", type: "C" },
      { text: "Sigo mi intuición", type: "D" }
    ]
  },
  {
    question: "Cuando aparece un problema difícil...",
    answers: [
      { text: "Lo enfrento sin pensar mucho", type: "A" },
      { text: "Lo analizo con calma", type: "B" },
      { text: "Busco consejo", type: "C" },
      { text: "Espero sentir la respuesta", type: "D" }
    ]
  },
  {
    question: "Al tomar una decisión importante...",
    answers: [
      { text: "Me lanzo rápido", type: "A" },
      { text: "Primero comparo opciones", type: "B" },
      { text: "Escucho otras opiniones", type: "C" },
      { text: "Confío en lo que percibo", type: "D" }
    ]
  },
  {
    question: "En un grupo normalmente...",
    answers: [
      { text: "Tomo el control", type: "A" },
      { text: "Organizo la estrategia", type: "B" },
      { text: "Conecto con todos", type: "C" },
      { text: "Leo el ambiente", type: "D" }
    ]
  },
  {
    question: "Si algo sale mal...",
    answers: [
      { text: "Reacciono rápido", type: "A" },
      { text: "Busco la causa", type: "B" },
      { text: "Pido ayuda", type: "C" },
      { text: "Confío en que se acomoda", type: "D" }
    ]
  },
  {
    question: "Cuando llegas a un lugar nuevo...",
    answers: [
      { text: "Exploro sin miedo", type: "A" },
      { text: "Observo el terreno", type: "B" },
      { text: "Me acerco a la gente", type: "C" },
      { text: "Siento la energía del lugar", type: "D" }
    ]
  },
  {
    question: "Tu mente normalmente...",
    answers: [
      { text: "Actúa", type: "A" },
      { text: "Analiza", type: "B" },
      { text: "Conecta", type: "C" },
      { text: "Intuye", type: "D" }
    ]
  }
];

const results = {
  A: {
    title: "INSTINTO VALIENTE",
    desc: "Actúas antes de que el miedo aparezca. Tu fuerza es la acción y tu energía empuja todo hacia adelante."
  },
  B: {
    title: "INSTINTO ESTRATEGA",
    desc: "Piensas antes de moverte. Ves patrones, detectas riesgos y eliges con cabeza fría."
  },
  C: {
    title: "INSTINTO SOCIAL",
    desc: "Tu fuerza está en conectar con personas. Lees el ambiente y encuentras apoyo con naturalidad."
  },
  D: {
    title: "INSTINTO INTUITIVO",
    desc: "Sientes cosas que otros no ven. Tu instinto capta señales, emociones y detalles invisibles."
  }
};

startBtn.addEventListener("click", startQuiz);
shareBtn.addEventListener("click", shareWhatsApp);
challengeBtn.addEventListener("click", challengeFriend);
copyBtn.addEventListener("click", copyLink);
retryBtn.addEventListener("click", resetQuiz);

function startQuiz() {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  currentQuestion = 0;
  scores = { A: 0, B: 0, C: 0, D: 0 };
  finalResult = null;
  progressBar.style.width = "0%";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  questionCounter.textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.type = "button";
    btn.textContent = answer.text;
    btn.addEventListener("click", () => selectAnswer(answer.type));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(type) {
  scores[type] += 1;
  currentQuestion += 1;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showLoadingThenResult();
  }
}

function showLoadingThenResult() {
  quizScreen.classList.remove("active");
  loadingScreen.classList.add("active");

  setTimeout(() => {
    loadingScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalResult = getBestResult();
    resultTitle.textContent = finalResult.title;
    resultDescription.textContent = finalResult.desc;
    resultStats.textContent = "Solo el 18% tiene este instinto";
    progressBar.style.width = "100%";
  }, 1200);
}

function getBestResult() {
  const maxScore = Math.max(...Object.values(scores));
  const topTypes = Object.keys(scores).filter(type => scores[type] === maxScore);
  const chosenType = topTypes[Math.floor(Math.random() * topTypes.length)];
  return results[chosenType];
}

function shareWhatsApp() {
  const text = `Mi resultado en INSTINTO es: ${finalResult?.title || "INSTINTO"}.\n${finalResult?.desc || ""}\n\nHaz tu prueba aquí: ${appUrl}`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function challengeFriend() {
  const text = `Te reto a hacer INSTINTO y ver qué tipo te sale.\n\n${appUrl}`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(appUrl);
    const original = copyBtn.textContent;
    copyBtn.textContent = "ENLACE COPIADO";
    setTimeout(() => {
      copyBtn.textContent = original;
    }, 1400);
  } catch (error) {
    alert("No se pudo copiar el enlace. Puedes copiarlo manualmente: " + appUrl);
  }
}

function resetQuiz() {
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
  currentQuestion = 0;
  scores = { A: 0, B: 0, C: 0, D: 0 };
  finalResult = null;
  progressBar.style.width = "0%";
}