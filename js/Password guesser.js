// Secret password
const secretPassword = "secret123";

// Amount of tries
const maxTries = 10;
let currentTry = 0;

// Array to store messages
let messages = [];

// Function for checking the password
function checkPassword() {
  const input = document.getElementById("password-input").value;
  currentTry++;

  // Clear previous messages
  messages = [];

  if (input.length < secretPassword.length) {
    messages.push("The password is too short!");
  } else if (input.length > secretPassword.length) {
    messages.push("The password is too long!");
  } else {
    let correctLetters = 0;
    for (let i = 0; i < secretPassword.length; i++) {
      if (input[i] === secretPassword[i]) {
        correctLetters++;
      }
    }
    if (correctLetters === secretPassword.length) {
      messages.push("Correct Password. Congratulations!");
    } else {
      messages.push("Right length, but not all letters are correct.");
      messages.push("Number of correct letters: " + correctLetters + " out of " + secretPassword.length);
    }
  }

  const remainingTries = maxTries - currentTry;
  messages.push("Remaining tries: " + remainingTries);

  if (currentTry === maxTries) {
    messages.push("No tries left.");
    document.getElementById("password-input").disabled = true;
    document.getElementById("check-button").disabled = true;
  }

  displayMessages();
}

// Function to display messages on the website
function displayMessages() {
  const output = document.getElementById("output");
  output.innerHTML = messages.join("<br>");
}
