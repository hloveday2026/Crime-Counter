// === CONFIG ===
const crimesPerYear = 9600000;

// Convert to per second
const crimesPerSecond = crimesPerYear / (365 * 24 * 60 * 60);
const secondsPerCrime = 1 / crimesPerSecond;

// DOM elements
const counterEl = document.getElementById("counter");
const rateEl = document.getElementById("rate");
const resetBtn = document.getElementById("resetBtn");
const messageEl = document.getElementById("message");

// Show rate
rateEl.textContent = secondsPerCrime.toFixed(1);

// === COUNTER ===
let startTime = Date.now();

function updateCounter() {
  const now = Date.now();
  const elapsedSeconds = (now - startTime) / 1000;

  const crimes = elapsedSeconds * crimesPerSecond;
  const count = Math.floor(crimes);

  counterEl.textContent = count;

  updateMessage(count);
  updateBackground(count);

  requestAnimationFrame(updateCounter);
}

// === MESSAGE ESCALATION ===
function updateMessage(count) {
  if (count > 80) {
    messageEl.textContent = "🚨 CRITICAL: Immediate response needed";
  } else if (count > 50) {
    messageEl.textContent = "⚠️ Investigators urgently needed";
  } else if (count > 20) {
    messageEl.textContent = "📈 Incidents rising...";
  } else {
    messageEl.textContent = "🟢 Monitoring incidents...";
  }
}

// === BACKGROUND DRAMA ===
function updateBackground(count) {
  const intensity = Math.min(count * 2, 150);
  document.body.style.background =
    `rgb(${intensity}, 0, 0)`; // gradually turns red
}

// Reset button
resetBtn.addEventListener("click", () => {
  startTime = Date.now();
});

// Start
updateCounter();
``
