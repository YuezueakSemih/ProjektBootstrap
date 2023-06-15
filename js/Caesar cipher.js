const unsolvedWord = "Oqpmga";
const maxTries = 10;
let currentTry = 0;

// Funktion zur Caesar-Verschlüsselung
function caesarCipher(str, shift) {
  str = str.toUpperCase();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + shift) % 26) + 65;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}

// Funktion zur Anzeige der Ergebnisnachricht
function displayResult(message) {
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = message;
}

// Challenge-Logik
function checkAnswer() {
  const answer = document.getElementById("answer").value.toUpperCase();
  const solvedWord = caesarCipher(unsolvedWord, 2);

  if (answer === solvedWord) {
    displayResult('Congratulations! You solved the mistery.');
  } else {
    displayResult('Wrong answer. Try again.');
    currentTry++;
  }

  if (currentTry === maxTries / 5) {
    displayResult('The first letter is ' + solvedWord[0] + '. You need to count the arrows.');
  } else if (currentTry === maxTries / 2) {
    displayResult('The first two letters are ' + solvedWord[0] + solvedWord[1] + '. The word is moved by 2 letters.');
  }

  if (currentTry === maxTries) {
    displayResult('No tries left. Here is a video about the caesar cipher: "https://www.youtube.com/watch?v=l6jqKRXSShI".');
    document.getElementById("answer").disabled = true;
    document.getElementById("check-button").disabled = true;
  }
}
