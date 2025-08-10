const loopItems = ["strategy", "growth", "impact"];
let currentIndex = 0;
const loopElement = document.querySelector(".loop");

function updateLoop() {
  loopElement.textContent = loopItems[currentIndex];
  currentIndex = (currentIndex + 1) % loopItems.length;
}

setInterval(updateLoop, 1800);
updateLoop();
