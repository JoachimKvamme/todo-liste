// DOM -- Document Object Model
console.log("Javascript loaded!");

const introSection = document.getElementById("intro-section");
console.dir(introSection);

// Counter-logic

// const counterElement = document.getElementById("counter");
const counterElement = document.querySelector("#counter");
console.dir(counterElement);

const display = counterElement.querySelector("span");
console.dir(display);

const incrementButton = counterElement.querySelector(".increment");
const decrementButton = counterElement.querySelector(".decrement");
const resetButton = counterElement.querySelector(".reset");

function handleIncrement() {
  // Henter nåværende verdi
  const currentValue = Number(display.textContent);
  // Legg til 1
  const newValue = currentValue + 1;
  // Oppdater verdien
  display.textContent = newValue;
}

function handleDecrement() {
  // Henter nåværende verdi
  const currentValue = Number(display.textContent);
  // Legg til 1
  const newValue = currentValue - 1;
  // Oppdater verdien
  display.textContent = newValue;
}

function reset() {
  display.textContent = "0";
}

incrementButton.addEventListener("click", handleIncrement);
decrementButton.addEventListener("click", handleDecrement);
resetButton.addEventListener("click", reset);


