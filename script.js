// const questionMark = document.getElementById("questionMark");
// const generateButton = document.getElementById("generateButton");

// function generateRandomNumber() {
//   // Generate a random number between 1 and 100 (or customize the range)
//   const randomNumber = Math.floor(Math.random() * 50) + 1;
//   return randomNumber;
// }

// function displayNumber(number) {
//   questionMark.textContent = number;
// }

// // Generate and display a random number initially
// let currentNumber = generateRandomNumber();
// displayNumber(currentNumber);

// generateButton.addEventListener("click", () => {
//   currentNumber = generateRandomNumber();
//   displayNumber(currentNumber);
// });

const questionMark = document.getElementById("questionMark");
const generateButton = document.getElementById("generateButton");
const message = document.getElementById("message");

function generateRandomNumber() {
  // Generate a random number between 1 and 100 (or customize the range)
  const randomNumber = Math.floor(Math.random() * 80) + 1;
  return randomNumber;
}

function displayNumber(number) {
  questionMark.textContent = number;
}

function updateMessage(text) {
  message.textContent = text;
}

// Display a question mark initially
displayNumber("?");
updateMessage("Click on the button to select an item from the raffle draw.");

generateButton.addEventListener("click", () => {
  const randomNumber = generateRandomNumber();
  displayNumber(randomNumber);
  updateMessage(
    `You have selected number ${randomNumber}. Go ahead and pick your raffle ticket!`
  );
});
