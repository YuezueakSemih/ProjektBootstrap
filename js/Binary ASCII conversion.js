// Array mit den Buchstaben A-Z
var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Zufällige Auswahl eines Buchstabens
var randomLetter = letters[Math.floor(Math.random() * letters.length)];

// Funktion zur Konvertierung eines Buchstabens in den entsprechenden ASCII-Wert
function letterToAscii(letter) {
  return letter.charCodeAt(0);
}

// Funktion zur Konvertierung eines ASCII-Werts in die binäre Darstellung
function asciiToBinary(ascii) {
  return ascii.toString(2);
}

// Funktion zum Generieren des Ratespiels
function generateGame() {
  randomLetter = letters[Math.floor(Math.random() * letters.length)];
  var asciiValue = letterToAscii(randomLetter);
  var binaryString = asciiToBinary(asciiValue);
  document.getElementById('binaryValue').textContent = binaryString;
}

// Funktion zum Überprüfen der eingegebenen Antwort
function checkGuess() {
  var guess = document.getElementById('guessInput').value.trim().toUpperCase();
  var resultText = document.getElementById('resultText');

  if (guess.length !== 1 || !letters.includes(guess)) {
    resultText.textContent = 'Ungültige Eingabe. Bitte gib einen einzelnen Buchstaben von A-Z ein.';
    resultText.style.color = 'red';
  } else if (guess === randomLetter) {
    resultText.textContent = 'Richtig geraten!';
    resultText.style.color = 'green';
    generateGame();
  } else {
    resultText.textContent = 'Falsch geraten. Versuche es erneut.';
    resultText.style.color = 'red';
  }
  
  // Leere das Eingabefeld
  document.getElementById('guessInput').value = '';
}

// Initialisiere das Spiel
generateGame();
