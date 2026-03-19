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

  const QUESTION_BANK = [
    {
      id: 1,
      prompt: "Si escuchas un ruido en la noche...",
      art: ["NOCTURNO", "#15253c", "#0a0d14", "🌙"],
      options: [
        { text: "Investigar", key: "valiente" },
        { text: "Ignorarlo", key: "sereno" },
        { text: "Observar primero", key: "observador" }
      ]
    },
    {
      id: 2,
      prompt: "Alguien te reta de sorpresa...",
      art: ["RETO", "#34181d", "#120a0b", "⚔️"],
      options: [
        { text: "Aceptar el reto", key: "valiente" },
        { text: "Pensarlo antes", key: "estrategico" },
        { text: "Soltar una risa", key: "social" }
      ]
    },
    {
      id: 3,
      prompt: "En un grupo tú normalmente eres...",
      art: ["GRUPO", "#17333a", "#081114", "👥"],
      options: [
        { text: "El que dirige", key: "dominante" },
        { text: "El que observa", key: "observador" },
        { text: "El que anima", key: "social" }
      ]
    },
    {
      id: 4,
      prompt: "Si ves algo peligroso...",
      art: ["PELIGRO", "#3c2415", "#120907", "⚠️"],
      options: [
        { text: "Enfrentarlo", key: "valiente" },
        { text: "Proteger a otros", key: "protector" },
        { text: "Analizarlo", key: "estrategico" }
      ]
    },
    {
      id: 5,
      prompt: "Cuando tomas una decisión rápida...",
      art: ["DECISIÓN", "#32273c", "#100f1a", "⚡"],
      options: [
        { text: "Actuar ya", key: "impulsivo" },
        { text: "Ordenar ideas", key: "estrategico" },
        { text: "Seguir la emoción", key: "intenso" }
      ]
    },
    {
      id: 6,
      prompt: "Si cambian los planes de última hora...",
      art: ["CAMBIO", "#203440", "#0b1116", "🌊"],
      options: [
        { text: "Te adaptas fácil", key: "libre" },
        { text: "Te molesta un poco", key: "sereno" },
        { text: "Improvisas sin miedo", key: "impulsivo" }
      ]
    },
    {
      id: 7,
      prompt: "Cuando algo te emociona mucho...",
      art: ["ENERGÍA", "#3a1a12", "#160908", "🔥"],
      options: [
        { text: "Lo haces de inmediato", key: "impulsivo" },
        { text: "Lo disfrutas con fuerza", key: "intenso" },
        { text: "Lo compartes con otros", key: "social" }
      ]
    },
    {
      id: 8,
      prompt: "Una meta difícil aparece frente a ti...",
      art: ["META", "#142138", "#090e18", "🎯"],
      options: [
        { text: "La atacas de frente", key: "valiente" },
        { text: "La conviertes en pasos", key: "estrategico" },
        { text: "Esperas el momento", key: "sereno" }
      ]
    },
    {
      id: 9,
      prompt: "Si alguien necesita ayuda urgente...",
      art: ["AYUDA", "#163019", "#09110a", "🛡️"],
      options: [
        { text: "Te mueves rápido", key: "protector" },
        { text: "Organizas la solución", key: "estrategico" },
        { text: "Llamas a más personas", key: "social" }
      ]
    },
    {
      id: 10,
      prompt: "Cuando tienes que hablar en público...",
      art: ["PÚBLICO", "#2d2035", "#0f0b14", "🎤"],
      options: [
        { text: "Tomar el control", key: "dominante" },
        { text: "Prepararte bien", key: "estrategico" },
        { text: "Soltarte con energía", key: "social" }
      ]
    },
    {
      id: 11,
      prompt: "Al conocer a alguien nuevo...",
      art: ["NUEVO", "#19303a", "#0b1216", "✨"],
      options: [
        { text: "Hablas de inmediato", key: "social" },
        { text: "Observas primero", key: "observador" },
        { text: "Te sueltas poco a poco", key: "sereno" }
      ]
    },
    {
      id: 12,
      prompt: "Si te provocan una discusión...",
      art: ["DISCUSIÓN", "#341718", "#100708", "👊"],
      options: [
        { text: "Respondes fuerte", key: "valiente" },
        { text: "Te mantienes firme", key: "dominante" },
        { text: "Te apartas", key: "sereno" }
      ]
    },
    {
      id: 13,
      prompt: "Si algo sale mal de improviso...",
      art: ["ERROR", "#3a2815", "#120c08", "🌀"],
      options: [
        { text: "Reaccionas rápido", key: "impulsivo" },
        { text: "Corriges con calma", key: "estrategico" },
        { text: "Pides ayuda", key: "protector" }
      ]
    },
    {
      id: 14,
      prompt: "Tu forma de avanzar normalmente es...",
      art: ["AVANCE", "#162b2e", "#071013", "🚀"],
      options: [
        { text: "A tu ritmo", key: "libre" },
        { text: "Con orden", key: "estrategico" },
        { text: "Marcando el paso", key: "dominante" }
      ]
    },
    {
      id: 15,
      prompt: "Cuando algo te gusta demasiado...",
      art: ["GUSTO", "#392114", "#130907", "❤️"],
      options: [
        { text: "Lo vives fuerte", key: "intenso" },
        { text: "Te emocionas y actúas", key: "impulsivo" },
        { text: "Lo compartes", key: "social" }
      ]
    },
    {
      id: 16,
      prompt: "Si tienes que elegir sin pensar mucho...",
      art: ["RÁPIDO", "#312b3a", "#11111a", "⚡"],
      options: [
        { text: "Confías en tu impulso", key: "impulsivo" },
        { text: "Buscas la opción segura", key: "sereno" },
        { text: "Sigues tu intuición", key: "observador" }
      ]
    },
    {
      id: 17,
      prompt: "Una persona está triste a tu lado...",
      art: ["TRISTEZA", "#1d2433", "#080b12", "🤍"],
      options: [
        { text: "La apoyas", key: "protector" },
        { text: "La escuchas", key: "sereno" },
        { text: "La animas", key: "social" }
      ]
    },
    {
      id: 18,
      prompt: "Si aparece un reto físico...",
      art: ["FÍSICO", "#2d1810", "#100806", "💥"],
      options: [
        { text: "Lo enfrentas", key: "valiente" },
        { text: "Lo haces con fuerza", key: "intenso" },
        { text: "Lo administras con técnica", key: "estrategico" }
      ]
    }
  ];

  const state = {
    soundOn: true,
    paused: false,
    gameActive: false,
    audioCtx: null,
    ambientNodes: null,
    deck: [],
    index: 0,
    scores: resetScores(),
    lastFirstQuestionId: null,
    lastResultKey: null,
    currentResult: null,
    currentPercent: 76
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
    percentBar: document.getElementById("percentBar"),
    percentNumber: document.getElementById("percentNumber"),
    resultDescription: document.getElementById("resultDescription")
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

  function showScreen(screen) {
    [el.startScreen, el.questionScreen, el.explodeScreen, el.resultScreen].forEach((node) => {
      node.classList.remove("active");
    });
    screen.classList.add("active");
  }

  function shuffle(array) {
    const clone = [...array];
    for (let i = clone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
  }

  function makeSvgDataUri(title, c1, c2, icon) {
    const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${c1}"/>
            <stop offset="100%" stop-color="${c2}"/>
          </linearGradient>
          <radialGradient id="r" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.18"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#g)"/>
        <rect width="1200" height="800" fill="url(#r)"/>
        <circle cx="980" cy="180" r="170" fill="#ffffff" fill-opacity="0.06"/>
        <circle cx="230" cy="620" r="220" fill="#ffffff" fill-opacity="0.05"/>
        <rect x="90" y="90" width="1020" height="620" rx="28" fill="#000000" fill-opacity="0.18" stroke="#ffffff" stroke-opacity="0.12"/>
        <text x="600" y="335" text-anchor="middle" font-size="160" font-family="Arial, Helvetica, sans-serif" font-weight="900" fill="#ffffff" fill-opacity="0.95">${icon}</text>
        <text x="600" y="505" text-anchor="middle" font-size="86" font-family="Georgia, serif" font-weight="700" fill="#fff">${safeTitle}</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function buildImages() {
    QUESTION_BANK.forEach((q, index) => {
      const [title, c1, c2, icon] = q.art;
      q.image = makeSvgDataUri(title, c1, c2, icon);
      q.order = index + 1;
    });
  }

  function ensureAudio() {
    if (!state.soundOn) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (!state.audioCtx) {
      state.audioCtx = new AudioContextClass();
    }
    if (state.audioCtx.state === "suspended") {
      state.audioCtx.resume();
    }
  }

  function stopAmbient() {
    if (!state.ambientNodes) return;
    try {
      state.ambientNodes.osc1.stop();
      state.ambientNodes.osc2.stop();
    } catch (e) {}
    state.ambientNodes = null;
  }

  function startAmbient() {
    if (!state.soundOn) return;
    ensureAudio();
    if (!state.audioCtx || state.ambientNodes) return;

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

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = "sine";
    lfo.frequency.value = 0.15;
    lfoGain.gain.value = 10;

    lfo.connect(lfoGain);
    lfoGain.connect(osc1.frequency);

    osc1.connect(gain);
    osc2.connect(gain);

    osc1.start();
    osc2.start();
    lfo.start();

    state.ambientNodes = { osc1, osc2, lfo, gain };
  }

  function beep(freq, duration = 0.07, type = "sine", volume = 0.03) {
    if (!state.soundOn) return;
    ensureAudio();
    if (!state.audioCtx) return;

    const ctx = state.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  }

  function playClick() {
    beep(620, 0.05, "sine", 0.03);
    setTimeout(() => beep(840, 0.05, "sine", 0.025), 60);
  }

  function playBoom() {
    beep(120, 0.12, "sawtooth", 0.04);
    setTimeout(() => beep(90, 0.15, "square", 0.03), 100);
    setTimeout(() => beep(60, 0.2, "triangle", 0.02), 210);
  }

  function playWin() {
    beep(440, 0.09, "triangle", 0.035);
    setTimeout(() => beep(554, 0.09, "triangle", 0.035), 110);
    setTimeout(() => beep(659, 0.12, "triangle", 0.04), 220);
  }

  function toggleSound() {
    state.soundOn = !state.soundOn;
    el.soundBtn.textContent = state.soundOn ? "🔊" : "🔇";
    if (state.soundOn) {
      ensureAudio();
      startAmbient();
    } else {
      stopAmbient();
    }
  }

  function togglePause() {
    if (!state.gameActive || el.questionScreen.classList.contains("active") === false) return;

    state.paused = !state.paused;
    el.pauseBtn.textContent = state.paused ? "▶" : "❚❚";
    el.pauseOverlay.classList.toggle("hidden", !state.paused);

    const buttons = el.answers.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.disabled = state.paused;
    });

    if (state.paused) {
      stopAmbient();
    } else {
      startAmbient();
    }
  }

  function selectQuestions() {
    const shuffled = shuffle(QUESTION_BANK);
    if (shuffled.length > 1 && shuffled[0].id === state.lastFirstQuestionId) {
      [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
    }
    state.lastFirstQuestionId = shuffled[0].id;
    state.deck = shuffled.slice(0, TOTAL_QUESTIONS);
  }

  function startGame() {
    state.gameActive = true;
    state.paused = false;
    el.pauseBtn.textContent = "❚❚";
    el.pauseOverlay.classList.add("hidden");

    state.index = 0;
    state.scores = resetScores();
    state.currentResult = null;
    state.currentPercent = 0;

    selectQuestions();
    ensureAudio();
    startAmbient();
    playClick();

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

    q.options.forEach((opt) => {
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
    const noRepeat = tied.filter((key) => key !== state.lastResultKey);
    const pool = noRepeat.length ? noRepeat : tied;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function showResult() {
    const winnerKey = getWinner();
    state.lastResultKey = winnerKey;
    const result = INSTINCTS[winnerKey];
    state.currentResult = result;

    const percent = Math.floor(Math.random() * 21) + 70;
    state.currentPercent = percent;

    el.resultEmoji.textContent = result.emoji;
    el.resultName.textContent = result.label;
    el.percentText.textContent = `${percent}% de las personas piensan como tú`;
    el.percentNumber.textContent = `${percent}%`;
    el.resultDescription.innerHTML = `Tu instinto puede cambiar.<br />Intenta otra vez.`;
    el.percentBar.style.width = "0%";

    showScreen(el.resultScreen);
    playWin();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.percentBar.style.width = `${percent}%`;
      });
    });

    state.gameActive = false;
    state.paused = false;
    el.pauseOverlay.classList.add("hidden");
    el.pauseBtn.textContent = "❚❚";
    stopAmbient();
  }

  async function shareResult() {
    const result = state.currentResult || INSTINCTS[state.lastResultKey] || INSTINCTS.valiente;
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
      } else {
        alert("Tu dispositivo no permite compartir automáticamente.");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function challengeFriend() {
    const result = state.currentResult || INSTINCTS[state.lastResultKey] || INSTINCTS.valiente;
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
      } else {
        alert("Tu dispositivo no permite compartir automáticamente.");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function explode() {
    playBoom();
    setTimeout(() => {
      showResult();
    }, 350);
  }

  function restartGame() {
    startGame();
  }

  // Eventos
  el.soundBtn.addEventListener("click", toggleSound);
  el.pauseBtn.addEventListener("click", togglePause);
  el.startBtn.addEventListener("click", startGame);
  el.explodeBtn.addEventListener("click", explode);
  el.restartBtn.addEventListener("click", restartGame);
  el.shareBtn.addEventListener("click", shareResult);
  el.challengeBtn.addEventListener("click", challengeFriend);
  el.resumeBtn.addEventListener("click", togglePause);

  // Inicialización
  buildImages();
  showScreen(el.startScreen);
  el.percentBar.style.width = "0%";
  el.questionImage.src = QUESTION_BANK[0].image;
});