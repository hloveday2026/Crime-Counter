// === CONFIG ===

// ONS estimate: ~9.6 million crimes/year
const crimesPerYear = 9600000;

// Convert to per second
const crimesPerSecond = crimesPerYear / (365 * 24 * 60 * 60);
const secondsPerCrime = 1 / crimesPerSecond;

// DOM elements
const counterEl = document.getElementById("counter");
const rateEl = document.getElementById("rate");
const resetBtn = document.getElementById("resetBtn");

// Display rate
rateEl.textContent = secondsPerCrime.toFixed(1);

// === COUNTER LOGIC ===
let counter = 0;
let startTime = Date.now();

function updateCounter() {
  const now = Date.now();
  const elapsedSeconds = (now - startTime) / 1000;

  // Calculate crimes since start
  const crimes = elapsedSeconds * crimesPerSecond;

  counterEl.textContent = Math.floor(crimes);

  requestAnimationFrame(updateCounter);
}

// Reset button
resetBtn.addEventListener("click", () => {
  startTime = Date.now();
  counter = 0;
});

// Start animation
updateCounter();


// === OPTIONAL: POLICE.UK API INTEGRATION ===
// This fetches latest monthly crime data for realism

async function fetchPoliceData() {
  try {
    // Example: London coordinates
    const url = "https://data.police.uk/api/crimes-street/all-crime?lat=51.5074&lng=-0.1278";

    const response = await fetch(url);
    const data = await response.json();

    console.log("Latest local crimes:", data.length);
    
    // You could display this somewhere in UI:
    // document.getElementById("localData").textContent = data.length;

  } catch (error) {
    console.error("Police API failed:", error);
  }
}

// Call once (optional)
fetchPoliceData();