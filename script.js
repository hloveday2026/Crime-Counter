alert("JS is working");

const crimesPerYear = 9600000;
const crimesPerSecond = crimesPerYear / (365 * 24 * 60 * 60);

const counterEl = document.getElementById("counter");
const messageEl = document.getElementById("message");

const breakdown = {
  violence: 0.35,
  theft: 0.30,
  vehicle: 0.15,
  burglary: 0.10,
  publicOrder: 0.10
};

let startTime = Date.now();

function updateCounter() {
  const elapsed = (Date.now() - startTime) / 1000;
  const count = Math.floor(elapsed * crimesPerSecond);

  counterEl.textContent = count;

  document.getElementById("violence").textContent = Math.floor(count * breakdown.violence);
  document.getElementById("theft").textContent = Math.floor(count * breakdown.theft);
  document.getElementById("vehicle").textContent = Math.floor(count * breakdown.vehicle);
  document.getElementById("burglary").textContent = Math.floor(count * breakdown.burglary);
  document.getElementById("publicOrder").textContent = Math.floor(count * breakdown.publicOrder);

  updateMessage(count);

  requestAnimationFrame(updateCounter);
}

function updateMessage(count) {
  if (count > 80) {
    messageEl.textContent = "🚨 CRITICAL";
  } else if (count > 50) {
    messageEl.textContent = "⚠️ Investigators needed";
  } else if (count > 20) {
    messageEl.textContent = "📈 Rising incidents";
  } else {
    messageEl.textContent = "🟢 Monitoring...";
  }
}

updateCounter();
