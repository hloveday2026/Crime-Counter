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

// === BREAKDOWN CONFIG ===
const breakdown = {
  violence: 0.35,
  theft: 0.30,
  vehicle: 0.15,
  burglary: 0.10,
  publicOrder: 0.10
};

// === COUNTER ===
let startTime = Date.now();

function updateCounter() {
  const now = Date.now();
  const elapsedSeconds = (now - startTime) / 1000;

  const crimes = elapsedSeconds * crimesPerSecond;
