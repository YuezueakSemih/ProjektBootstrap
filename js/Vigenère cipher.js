// Geheimes Wort und Schlüssel für die Vigenère-Verschlüsselung
var secretWord = "GEHEIM";
var key = "SCHLUESSEL";

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

  if (guess === encryptedSecretWord) {
    alert("Glückwunsch! Du hast das geheime Wort richtig erraten." + encryptedSecretWord);
  } else {
    alert("Leider ist das nicht das geheime Wort. Versuche es erneut!" + encryptedSecretWord);
  }
}
