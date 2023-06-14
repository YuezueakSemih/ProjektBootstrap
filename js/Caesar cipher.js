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
    displayResult('Glückwunsch! Du hast die Caesar Cipher Challenge gelöst.');
  } else {
    displayResult('Leider ist das nicht die richtige Antwort. Bitte versuche es erneut.');
    currentTry++;
  }

  if (currentTry === maxTries / 5) {
    displayResult('Der erste Buchstabe ist ' + solvedWord[0] + '. Du musst die Pfeile zählen.');
  } else if (currentTry === maxTries / 2) {
    displayResult('Die ersten beiden Buchstaben sind ' + solvedWord[0] + solvedWord[1] + '. Das Wort ist um 2 Buchstaben verschoben.');
  }

  if (currentTry === maxTries) {
    displayResult('Keine Versuche mehr übrig. Hier ist ein kurzes Video über den Caesar Cipher: <a href="https://www.youtube.com/watch?v=l6jqKRXSShI" target="_blank">Video</a>.');
    document.getElementById("answer").disabled = true;
    document.getElementById("check-button").disabled = true;
  }
}
