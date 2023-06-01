const unsolvedWord = "Oqpmga";
const maxTries = 10;
let currentTry = 0;

// Define the Caesar cipher function
function caesarCipher(str, shift) {
  str = str.toUpperCase();
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + shift) % 26) + 65;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}

// Function to display the result message
function displayResult(message) {
  var resultElement = document.getElementById('result');
  resultElement.textContent = message;
}

// Challenge logic
function checkAnswer() {
  var answer = document.getElementById("answer").value.toUpperCase();
  let solvedWord = caesarCipher(unsolvedWord, 2);

  if (answer === solvedWord) {
    displayResult('Congratulations! You solved the Caesar Cipher Challenge');
  } else {
    displayResult('Sorry, that is not the correct answer. Please try again.');
    currentTry++;
  }

  if (currentTry === maxTries / 5) {
    displayResult('The first letter is ' + solvedWord[0] + '. You need to count the arrows');
  } else if (currentTry === maxTries / 2) {
    displayResult('The first two letters are ' + solvedWord[0] + solvedWord[1] + '. The word is shifted by 2 letters');
  }

  if (currentTry === maxTries) {
    displayResult('No tries left. Here is a quick video about the ceasar:  <a href="https://www.youtube.com/watch?v=l6jqKRXSShI" target="_blank">Video</a>.');
    document.getElementById("answer").disabled = true;
    document.getElementById("check-button").disabled = true;
  }
}
