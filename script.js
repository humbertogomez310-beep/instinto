document.addEventListener("DOMContentLoaded", () => {
  const TOTAL_QUESTIONS = 7;

  const INSTINCTS = {
    valiente: {
      label: "VALIENTE",
      emoji: "🔥",
      description: "Te lanzas de frente. Tu energía va directo al reto."
    },
    sereno: {
      label: "SERENO",
      emoji: "🌙",
      description: "Piensas con calma. Tu fuerza está en mantener la mente fría."
    },
    impulsivo: {
      label: "IMPULSIVO",
      emoji: "⚡",
      description: "Actúas rápido y con intensidad. Tu instinto no espera demasiado."
    },
    estrategico: {
      label: "ESTRATÉGICO",
      emoji: "🎯",
      description: "Observas, calculas y eliges con precisión."
    },
    observador: {
      label: "OBSERVADOR",
      emoji: "👁️",
      description: "Miras todo antes de moverte. Ves lo que otros no ven."
    },
    protector: {
      label: "PROTECTOR",
      emoji: "🛡️",
      description: "Tu impulso es cuidar y sostener a los demás."
    },
    libre: {
      label: "LIBRE",
      emoji: "🌊",
      description: "Te gusta fluir. Odias sentirte atrapado."
    },
    dominante: {
      label: "DOMINANTE",
      emoji: "👑",
      description: "Tomas el mando naturalmente. Tu presencia se nota."
    },
    social: {
      label: "SOCIAL",
      emoji: "✨",
      description: "Tu energía crece con la gente. Conectas y enciendes el ambiente."
    },
    intenso: {
      label: "INTENSO",
      emoji: "🦂",
      description: "Sientes fuerte y reaccionas con pasión. Todo en ti tiene fuerza."
    }
  };

  const BANK = [
    {
      prompt: "Si escuchas un ruido en la noche...",
      image: makeImage("NOCTURNO", "#122033", "#05080f", "🌙"),
      options: [
        { text: "Investigar", key: "valiente" },
        { text: "Ignorarlo", key: "sereno" },
        { text: "Observar primero", key: "observador" }
      ]
    },
    {
      prompt: "Alguien te reta de sorpresa...",
      image: makeImage("RETO", "#33161c", "#090406", "⚔️"),
      options: [
        { text: "Aceptar el reto", key: "valiente" },
        { text: "Pensarlo antes", key: "estrategico" },
        { text: "Soltar una risa", key: "social" }
      ]
    },
    {
      prompt: "En un grupo tú normalmente eres...",
      image: makeImage("GRUPO", "#17343b", "#070d11", "👥"),
      options: [
        { text: "El que dirige", key: "dominante" },
        { text: "El que observa", key: "observador" },
        { text: "El que anima", key: "social" }
      ]
    },
    {
      prompt: "Si ves algo peligroso...",
      image: makeImage("PELIGRO", "#3a2414", "#090503", "⚠️"),
      options: [
        { text: "Enfrentarlo", key: "valiente" },
        { text: "Proteger a otros", key: "protector" },
        { text: "Analizarlo", key: "estrategico" }
      ]
    },
    {
      prompt: "Cuando tomas una decisión rápida...",
      image: makeImage("DECISIÓN", "#31273b", "#0d0b16", "⚡"),
      options: [
        { text: "Actuar ya", key: "impulsivo" },
        { text: "Ordenar ideas", key: "estrategico" },
        { text: "Seguir la emoción", key: "intenso" }
      ]
    },
    {
      prompt: "Si cambian los planes de última hora...",
      image: makeImage("CAMBIO", "#1f3440", "#070c10", "🌊"),
      options: [
        { text: "Te adaptas fácil", key: "libre" },
        { text: "Te molesta un poco", key: "sereno" },
        { text: "Improvisas sin miedo", key: "impulsivo" }
      ]
    },
    {
      prompt: "Cuando algo te emociona mucho...",
      image: makeImage("ENERGÍA", "#381b11", "#100704", "🔥"),
      options: [
        { text: "Lo haces de inmediato", key: "impulsivo" },
        { text: "Lo disfrutas con fuerza", key: "intenso" },
        { text: "Lo compartes con otros", key: "social" }
      ]
    },
    {
      prompt: "Una meta difícil aparece frente a ti...",
      image: makeImage("META", "#142138", "#060a11", "🎯"),
      options: [
        { text: "La atacas de frente", key: "valiente" },
        { text: "La conviertes en pasos", key: "estrategico" },
        { text: "Esperas el momento", key: "sereno" }
      ]
    },
    {
      prompt: "Si alguien necesita ayuda urgente...",
      image: makeImage("AYUDA", "#163019", "#050a06", "🛡️"),
      options: [
        { text: "Te mueves rápido", key: "protector" },
        { text: "Organizas la solución", key: "estrategico" },
        { text: "Llamas a más personas", key: "social" }
      ]
    },
    {
      prompt: "Cuando tienes que hablar en público...",
      image: makeImage("PÚBLICO", "#2d2035", "#0f0b14", "🎤"),
      options: [
        { text: "Tomar el control", key: "dominante" },
        { text: "Prepararte bien", key: "estrategico" },
        { text: "Soltarte con energía", key: "social" }
      ]
    },
    {
      prompt: "Al conocer a alguien nuevo...",
      image: makeImage("NUEVO", "#19303a", "#071016", "✨"),
      options: [
        { text: "Hablas de inmediato", key: "social" },
        { text: "Observas primero", key: "observador" },
        { text: "Te sueltas poco a poco", key: "sereno" }
      ]
    },
    {
      prompt: "Si te provocan una discusión...",
      image: makeImage("DISCUSIÓN", "#341718", "#090304", "👊"),
      options: [
        { text: "Respondes fuerte", key: "valiente" },
        { text: "Te mantienes firme", key: "dominante" },
        { text: "Te apartas", key: "sereno" }
      ]
    },
    {
      prompt: "Si algo sale mal de improviso...",
      image: makeImage("ERROR", "#3a2815", "#100a06", "🌀"),
      options: [
        { text: "Reaccionas rápido", key: "impulsivo" },
        { text: "Corriges con calma", key: "estrategico" },
        { text: "Pides ayuda", key: "protector" }
      ]
    },
    {
      prompt: "Tu forma de avanzar normalmente es...",
      image: makeImage("AVANCE", "#162b2e", "#050b0d", "🚀"),
      options: [
        { text: "A tu ritmo", key: "libre" },
        { text: "Con orden", key: "estrategico" },
        { text: "Marcando el paso", key: "dominante" }
      ]
    },
    {
      prompt: "Cuando algo te gusta demasiado...",
      image: makeImage("GUSTO", "#392114", "#110704", "❤️"),
      options: [
        { text: "Lo vives fuerte", key: "intenso" },
        { text: "Te emocionas y actúas", key: "impulsivo" },
        { text: "Lo compartes", key: "social" }
      ]
    }
  ];

  const state = {
    soundOn: true,
    paused: false,
    gameActive: false,
    audioCtx: null,
    ambient: null,
    deck: [],
    index: 0,
    scores: resetScores(),
    lastFirstQuestionId: null,
    lastResultKey: null,
    currentResult: INSTINCTS.valiente
  };

  const el = {
    soundBtn: document.getElementById("soundBtn"),
    pauseBtn: document.getElementById("pauseBtn"),
    startBtn: document.getElementById("startBtn"),
    restartBtn: document.getElementById("restartBtn"),
    shareBtn: document.getElementById("shareBtn"),
    challengeBtn: document.getElementById("challengeBtn"),
    resumeBtn: document.getElementById("resumeBtn"),
    explodeBtn: document.getElementById("explodeBtn"),
    startScreen: document.getElementById("startScreen"),
    questionScreen: document.getElementById("questionScreen"),
    explodeScreen: document.getElementById("explodeScreen"),
    resultScreen: document.getElementById("resultScreen"),
    pauseOverlay: document.getElementById("pauseOverlay"),
    questionProgress: document.getElementById("questionProgress"),
    questionText: document.getElementById("questionText"),
    questionImage: document.getElementById("questionImage"),
    answers: document.getElementById("answers"),
    resultEmoji: document.getElementById("resultEmoji"),
    resultName: document.getElementById("resultName"),
    percentText: document.getElementById("percentText"),
    percentNumber: document.getElementById("percentNumber"),
    percentBar: document.getElementById("percentBar")
  };

  function resetScores() {
    return {
      valiente: 0,
      sereno: 0,
      impulsivo: 0,
      estrategico: 0,
      observador: 0,
      protector: 0,
      libre: 0,
      dominante: 0,
      social: 0,
      intenso: 0
    };
  }

  function makeImage(title, c1, c2, icon) {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${c1}"/>
            <stop offset="100%" stop-color="${c2}"/>
          </linearGradient>
          <radialGradient id="r" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.16"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#g)"/>
        <rect width="1200" height="800" fill="url(#r)"/>
        <circle cx="980" cy="180" r="170" fill="#ffffff" fill-opacity="0.06"/>
        <circle cx="230" cy="620" r="220" fill="#ffffff" fill-opacity="0.05"/>
        <text x="600" y="335" text-anchor="middle" font-size="160" font-family="Arial, Helvetica, sans-serif" font-weight="900" fill="#ffffff" fill-opacity="0.95">${icon}</text>
        <text x="600" y="500" text-anchor="middle" font-size="84" font-family="Georgia, serif" font-weight="700" fill="#fff">${title}</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function showScreen(screen) {
    [el.startScreen, el.questionScreen, el.explodeScreen, el.resultScreen].forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
  }

  function ensureAudio() {
    if (!state.soundOn) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!state.audioCtx) state.audioCtx = new AudioContextClass();
    if (state.audioCtx.state === "suspended") state.audioCtx.resume();
  }

  function beep(freq, duration = 0.06, type = "sine", volume = 0.03) {
    if (!state.soundOn) return;
    ensureAudio();
    if (!state.audioCtx) return;

    const osc = state.audioCtx.createOscillator();
    const gain = state.audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;
    osc.connect(gain);
    gain.connect(state.audioCtx.destination);
    osc.start();
    osc.stop(state.audioCtx.currentTime + duration);
  }

  function playClick() {
    beep(620, 0.05, "sine", 0.03);
    setTimeout(() => beep(840, 0.05, "sine", 0.02), 60);
  }

  function playBoom() {
    beep(120, 0.12, "sawtooth", 0.04);
    setTimeout(() => beep(90, 0.15, "square", 0.03), 100);
    setTimeout(() => beep(60, 0.2, "triangle", 0.02), 220);
  }

  function playWin() {
    beep(440, 0.09, "triangle", 0.035);
    setTimeout(() => beep(554, 0.09, "triangle", 0.035), 110);
    setTimeout(() => beep(659, 0.12, "triangle", 0.04), 220);
  }

  function startAmbient() {
    if (!state.soundOn) return;
    ensureAudio();
    if (!state.audioCtx || state.ambient) return;

    const ctx = state.audioCtx;
    const gain = ctx.createGain();
    gain.gain.value = 0.012;
    gain.connect(ctx.destination);

    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.value = 132;

    const osc2 = ctx.createOscillator();
    osc2.type = "triangle";
    osc2.frequency.value = 198;

    osc1.connect(gain);
    osc2.connect(gain);
    osc1.start();
    osc2.start();

    state.ambient = { osc1, osc2, gain };
  }

  function stopAmbient() {
    if (!state.ambient) return;
    try { state.ambient.osc1.stop(); } catch {}
    try { state.ambient.osc2.stop(); } catch {}
    state.ambient = null;
  }

  function toggleSound() {
    state.soundOn = !state.soundOn;
    el.soundBtn.textContent = state.soundOn ? "🔊" : "🔇";
    if (state.soundOn) startAmbient();
    else stopAmbient();
  }

  function togglePause() {
    if (!state.gameActive || !el.questionScreen.classList.contains("active")) return;

    state.paused = !state.paused;
    el.pauseBtn.textContent = state.paused ? "▶" : "❚❚";
    el.pauseOverlay.classList.toggle("hidden", !state.paused);
    el.answers.querySelectorAll("button").forEach(btn => btn.disabled = state.paused);

    if (state.paused) stopAmbient();
    else startAmbient();
  }

  function pickQuestions() {
    const shuffled = shuffle(BANK);
    if (shuffled.length > 1 && shuffled[0].id === state.lastFirstQuestionId) {
      [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
    }
    state.lastFirstQuestionId = shuffled[0].id;
    state.deck = shuffled.slice(0, TOTAL_QUESTIONS);
  }

  function startGame() {
    state.gameActive = true;
    state.paused = false;
    state.index = 0;
    state.scores = resetScores();
    state.currentResult = INSTINCTS.valiente;

    el.pauseBtn.textContent = "❚❚";
    el.pauseOverlay.classList.add("hidden");

    pickQuestions();
    playClick();
    startAmbient();
    showScreen(el.questionScreen);
    renderQuestion();
  }

  function renderQuestion() {
    if (state.index >= TOTAL_QUESTIONS) {
      showExplodeScreen();
      return;
    }

    const q = state.deck[state.index];
    el.questionProgress.textContent = `Pregunta ${state.index + 1} de ${TOTAL_QUESTIONS}`;
    el.questionText.textContent = q.prompt;
    el.questionImage.src = q.image;
    el.questionImage.alt = q.prompt;
    el.answers.innerHTML = "";

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer-btn";
      btn.textContent = opt.text;
      btn.addEventListener("click", () => {
        if (state.paused) return;
        playClick();
        state.scores[opt.key] += 1;
        state.index += 1;
        renderQuestion();
      });
      el.answers.appendChild(btn);
    });
  }

  function showExplodeScreen() {
    showScreen(el.explodeScreen);
    playClick();
  }

  function getWinner() {
    const entries = Object.entries(state.scores);
    const max = Math.max(...entries.map(([, score]) => score));
    const tied = entries.filter(([, score]) => score === max).map(([key]) => key);
    if (tied.length === 1) return tied[0];
    const noRepeat = tied.filter(key => key !== state.lastResultKey);
    const pool = noRepeat.length ? noRepeat : tied;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function showResult() {
    const winnerKey = getWinner();
    state.lastResultKey = winnerKey;
    const result = INSTINCTS[winnerKey];
    state.currentResult = result;

    const percent = Math.floor(Math.random() * 21) + 70;
    el.resultEmoji.textContent = result.emoji;
    el.resultName.textContent = result.label;
    el.percentText.textContent = `${percent}% de las personas piensan como tú`;
    el.percentNumber.textContent = `${percent}%`;
    el.percentBar.style.width = "0%";

    showScreen(el.resultScreen);
    playWin();
    stopAmbient();
    state.gameActive = false;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.percentBar.style.width = `${percent}%`;
      });
    });
  }

  function explode() {
    playBoom();
    setTimeout(showResult, 300);
  }

  async function shareResult() {
    const result = state.currentResult || INSTINCTS.valiente;
    const text = `${result.emoji} ${result.label}

Tu instinto puede cambiar.
Intenta otra vez.
H.B.G.`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "INSTINTO",
          text,
          url: window.location.href
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
        alert("Resultado copiado al portapapeles.");
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function challengeFriend() {
    const result = state.currentResult || INSTINCTS.valiente;
    const text = `Desafío INSTINTO: ${result.label} ${result.emoji}

¿Puedes superarlo?
Responde 7 preguntas y descubre tu instinto.

H.B.G.`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Desafiar a un amigo",
          text,
          url: window.location.href
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
        alert("Desafío copiado al portapapeles.");
      }
    } catch (e) {
      console.log(e);
    }
  }

  function restartGame() {
    startGame();
  }

  el.soundBtn.addEventListener("click", toggleSound);
  el.pauseBtn.addEventListener("click", togglePause);
  el.startBtn.addEventListener("click", startGame);
  el.resumeBtn.addEventListener("click", togglePause);
  el.explodeBtn.addEventListener("click", explode);
  el.restartBtn.addEventListener("click", restartGame);
  el.shareBtn.addEventListener("click", shareResult);
  el.challengeBtn.addEventListener("click", challengeFriend);

  showScreen(el.startScreen);
  el.questionImage.src = BANK[0].image;
  el.percentBar.style.width = "0%";
});