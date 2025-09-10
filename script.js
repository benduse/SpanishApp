const MAX_QUESTIONS = 15;         // fixed number per session
const BADGE_STORE = "sq_badges";/* localStorage key for earned badges */

document.addEventListener('DOMContentLoaded', () => {
  //  ⬇  give the selector of the sidebar element
  Leaderboard.init('#leaderboard');
});
/* ============== state ============== */
let quizWords = [];
let currentQuestionIndex = 0;
let score = 0;
let startTime;                     // per-question timer start
let times = [];                  // array of time per question
let currentTheme = "";             // noun / verb / noun phrase …
/* attempts per theme are tracked in localStorage → "attempts_<theme>" */

/* ============== QUIZ FLOW ============== */
function startQuiz(theme) {
  currentTheme = theme;

  // 1. Get pool in original order
  const pool = words.filter(w => w.part_of_speech === theme);

  if (pool.length === 0) {
    alert("No words available for this theme.");
    return;
  }

  const seenKey = `seen_${theme}`;
  let seenWords = JSON.parse(localStorage.getItem(seenKey) || "[]");

  // 2. Filter out seen words
  let unseenPool = pool.filter(w => !seenWords.includes(w.word));

  if (unseenPool.length < MAX_QUESTIONS) {
    unseenPool = pool;
    seenWords = []; // reset seen words if not enough unseen
  }

  const shuffled = shuffle(unseenPool);
  quizWords = shuffled.slice(0, MAX_QUESTIONS);

  const newSeen = quizWords.map(w => w.word);
  localStorage.setItem(seenKey, JSON.stringify([...seenWords, ...newSeen]));
  
  // --- reset session state ---
  score = 0;
  times = [];
  currentQuestionIndex = 0;

  // --- UI transitions ---
  document.getElementById("theme-selection").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("results").classList.add("hidden");
  document.getElementById("score").innerText = score;

  updateProgress();
  showQuestion();
}

function showQuestion() {
  const q = quizWords[currentQuestionIndex];
  document.getElementById("question").innerText =
    `What does "${q.word}" mean?`;

  // hide previous example
  document.getElementById("example").classList.add("hidden");

  /* ---------- build shuffled answer buttons ---------- */
  let options = [q.meaning];
  while (options.length < 4) {
    const r = words[Math.floor(Math.random() * words.length)];
    if (!options.includes(r.meaning)) options.push(r.meaning);
  }
  options = shuffle(options);

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt, q);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("next-btn").classList.add("hidden");

  // start timer for this question
  startTime = Date.now();
}

function checkAnswer(selected, q) {
  const correct = q.meaning;
  const buttons = document.querySelectorAll("#options button");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.classList.add("correct");
    } else if (btn.innerText === selected) {
      btn.classList.add("wrong");
    }
  });

  // record time taken
  const elapsed = (Date.now() - startTime) / 1000; // seconds
  times.push(elapsed);

  // update score
  if (selected === correct) {
    score++;
    document.getElementById("score").innerText = score;
  }

  // show example sentences
  document.getElementById("example-es").innerText = q.example_es || "N/A";
  document.getElementById("example-en").innerText = q.example_en || "N/A";
  document.getElementById("example").classList.remove("hidden");

  document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= quizWords.length) {
    endQuiz();
  } else {
    updateProgress();
    showQuestion();
  }
}

function endQuiz() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");
  document.getElementById("final-score").innerText =
    `${score} / ${quizWords.length}`;
  document.getElementById("progress-bar").style.width = "100%";

  // evaluate & display badges
  checkAchievements();
  updateStoredBadges();   // persist in localStorage
}

/* ============== ACHIEVEMENTS ============== */
function makeBadge(id, label) {
  const div = document.createElement("div");
  div.className = "badge";
  div.dataset.id = id;   // handy for storage
  div.innerText = label;
  return div;
}

function checkAchievements() {
  const badgesDiv = document.getElementById("badges");
  badgesDiv.innerHTML = "";

  /* VERB MASTER */
  if (currentTheme === "verb" && score === quizWords.length) {
    badgesDiv.appendChild(makeBadge("verb_master", "🥇 Verb Master"));
  }

  /* FAST THINKER – all answers ≤10 s */
  const fast = times.length && times.every(t => t <= 10);
  if (fast && times.length === quizWords.length) {
    badgesDiv.appendChild(makeBadge("fast_thinker", "⚡ Fast Thinker"));
  }

  /* PERSISTENT LEARNER – 100 % after at least one previous attempt */
  const keyAttempts = "attempts_" + currentTheme;
  const attempts = +(localStorage.getItem(keyAttempts) || 0) + 1;
  localStorage.setItem(keyAttempts, attempts);

  if (score === quizWords.length && attempts > 1) {
    badgesDiv.appendChild(
      makeBadge("persistent_learner", "🔁 Persistent Learner")
    );
  }
}

function updateStoredBadges() {
  const current = Array.from(
    document.querySelectorAll("#badges .badge"),
    b => b.dataset.id
  );
  const stored = JSON.parse(localStorage.getItem(BADGE_STORE) || "[]");
  const merged = Array.from(new Set([...stored, ...current]));
  localStorage.setItem(BADGE_STORE, JSON.stringify(merged));

    const playerName = prompt("Enter your name for the leaderboard:", 
    localStorage.getItem('player_name') || "");
  if (playerName) {
    localStorage.setItem('player_name', playerName);   // remember it
    Leaderboard.addScore({
      name : playerName,
      score: score,
      total: quizWords.length,
      theme: currentTheme,
      combos: combosEarned   // if you track combos; otherwise omit
    });
  }
}

/* ============== HELPERS ============== */
function resetQuiz() {
  document.getElementById("theme-selection").classList.remove("hidden");
  document.getElementById("results").classList.add("hidden");
  document.getElementById("progress-bar").style.width = "0%";
}

function updateProgress() {
  const percent = (currentQuestionIndex / quizWords.length) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
}

function shuffle(arr) {
  return arr.slice().sort(() => Math.random() - 0.5);
}