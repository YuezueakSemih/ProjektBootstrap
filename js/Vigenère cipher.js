// Geheimes Wort und Schlüssel für die Vigenère-Verschlüsselung
var secretWord = "GEHEIM";
var key = "SCHLUESSEL";
const maxTries = 10;
let currentTry = 0;
// Array zur Speicherung von Nachrichten
let messages = [];

// Funktion zur Verschlüsselung mit dem Vigenère-Verschlüsselungsalgorithmus
function encrypt(text, key) {
  var encryptedText = "";
  var keyIndex = 0;
  var keyLength = key.length;

  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    var keyChar = key.charAt(keyIndex % keyLength);

    if (char.match(/[A-Za-z]/)) {
      var baseCharCode = char.toUpperCase() === char ? 65 : 97;
      var charCode = ((char.charCodeAt(0) - baseCharCode) + (keyChar.toUpperCase().charCodeAt(0) - 65)) % 26 + baseCharCode;
      encryptedText += String.fromCharCode(charCode);
      keyIndex++;
    } else {
      encryptedText += char;
    }
  }

  return encryptedText;
}

// Funktion zur Überprüfung, ob das vom Benutzer eingegebene Wort mit dem geheimen Wort übereinstimmt
function checkGuess() {
  var guess = document.getElementById("guess").value.toUpperCase();
  var encryptedSecretWord = encrypt(secretWord, key);
  currentTry++;

  // Clear previous messages
  messages = [];

  if (guess === encryptedSecretWord) {
    messages.push("Congratulations! You solved the secret.");
  } else {
    messages.push("Wrong guess. Please try again.");
  }

  const remainingTries = maxTries - currentTry;
  messages.push("Remaining tries: " + remainingTries);

  if (currentTry === maxTries) {
    document.getElementById("guess").disabled = true;
    messages.push("No Tries left.");
  }

  displayMessages();
}

// Funktion zur Anzeige von Nachrichten auf der Webseite
function displayMessages() {
  var output = document.getElementById("output");
  output.innerHTML = messages.join("<br>");
}
