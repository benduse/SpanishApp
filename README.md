# Spanish Quiz App — README

Welcome to **Spanish Quiz App**, a browser-based vocabulary trainer built with **HTML, CSS and vanilla JavaScript**.  
It ships with a ready-made data set (30+ business-related Spanish words) and a playful, pastel UI that tracks scores, achievements and combo bonuses across sessions.

---

## 1. What’s inside?

```
/project-root
│
├── index.html            # main quiz interface
├── achievements.html     # permanent badge cabinet
├── styles.css            # light joyful theme (pastel palette)
├── data.js               # Spanish word list
├── script.js             # full quiz & game logic
│
└── assets/
     ├── logo.svg
     └── favicon.svg
```

_Open `index.html` in any modern browser to start playing._  
All progress is stored with `localStorage`, so there is **no back-end required**.

---

## 2. Current Features

1. **Theme selection** – choose Nouns, Verbs, or Noun Phrases.
2. **15 questions per session** – first 15 words of the selected theme (chronological).
3. **Multiple-choice quiz** – 4 English meanings per word (options shuffled).
4. **Examples shown after answering** – immediate context in Spanish & English.
5. **Progress bar** – visual indicator of how far you are in the quiz.
6. **Score streaks / combo bonus**  
   • Every time you get 🔥 **3 correct answers in a row** you earn **+5 extra points**.
7. **Timed answers recorded** – used for the “Fast Thinker” badge.
8. **Achievements / Badges** (persist across sessions)  
   • 🥇 Verb Master — 100 % on a verb quiz.  
   • ⚡ Fast Thinker — every answer ≤ 10 s.  
   • 🔁 Persistent Learner — reach 100 % on a theme after at least one previous attempt.
9. **Combo counter** — total number of combos ever earned is shown on the Achievements page.
10. **Permanent Achievements page** — browse all badges & combos anytime.
11. **Joyful pastel UI** – soft yellow background, coral & sky-blue accents, gentle feedback colors.
12. **Responsive** – works on mobile and desktop (no external frameworks).

---

## 3. Quick Start

1. **Clone or download** the repo.
2. No build step is required — simply **double-click `index.html`** or host the folder on any static server.
3. For a clean test run, clear browser storage (`localStorage`) for the origin.

---

## 4. Customising

### 4.1 Adding / Editing Vocabulary

Edit `data.js` — each entry needs:

```js
{
  word: "paquete",
  phonetics: "paˈkete",
  part_of_speech: "noun",
  meaning: "package, parcel",
  example_es: "El paquete llegó dañado.",
  example_en: "The package arrived damaged."
}
```

• `part_of_speech` must match one of the buttons (noun / verb / noun phrase)  
• Keep the array in the order you want it asked; the first 15 are used.

### 4.2 Colours & Branding

`styles.css` contains a single palette block at the top.  
Swap any of those hex values to alter the theme.  
You can replace `logo.svg` + `favicon.svg` with your own artwork (or convert to PNG/ICO if older browsers are targeted).

### 4.3 Word Count per Quiz

Change the constant at the top of `script.js`:

```js
const MAX_QUESTIONS = 15; // anything you like
```

### 4.4 Resetting Progress

Open DevTools → Application → Local Storage → clear keys starting with:

```
sq_badges
combo_total
attempts_<theme>
```

---

## 5. Recommended Future Enhancements

Below is a curated backlog of ideas if you wish to keep extending the app.

| Category | Idea                                                                 | Benefit                               |
| -------- | -------------------------------------------------------------------- | ------------------------------------- |
| Learning | **Spaced-repetition algorithm (SM-2)**                               | Long-term retention                   |
|          | **Typing mode / flash-card flip mode**                               | Active recall, not just recognition   |
|          | **Pronunciation audio** (Web Speech API or MP3 assets)               | Improves listening and speaking       |
| Gameplay | **Difficulty levels** (2-option easy, 4-option normal, type-in hard) | Accessibility & challenge scaling     |
|          | **Per-question timer with countdown bar**                            | Adds urgency and excitement           |
|          | **Lives / hearts system**                                            | Extra tension; motivates accuracy     |
| Progress | **Daily streak calendar**                                            | Habit-forming consistency             |
|          | **Detailed stats page** (accuracy %, avg. time, best streak)         | Self-assessment                       |
| Social   | **Local high-score leaderboard**                                     | Friendly competition on shared device |
| Theme    | **Dark vs. Light toggle**                                            | User preference / night reading       |
| UX       | **Keyboard shortcuts (1-4, Enter, Esc)**                             | Faster workflow                       |
| Mobile   | **Installable PWA (manifest.json + service-worker)**                 | Offline use; feels native             |

---

## 6. Contributing

Pull requests are welcome!  
If you add a new feature, follow these steps:

1. Fork → create feature branch → commit with conventional message.
2. Keep the code **framework-free** (unless migrating entire stack).
3. Update `README.md` and, if needed, sample screenshots / GIFs.

---

## 7. License

MIT — free to use, study, modify and distribute.  
See `LICENSE` file for details.

---

Happy learning — ¡Mucho éxito con tu español!
