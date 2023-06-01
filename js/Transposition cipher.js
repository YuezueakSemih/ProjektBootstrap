
function transpositionCipherEncrypt(text, key) {
    var encryptedText = '';
    var numColumns = Math.ceil(text.length / key);
  
    for (var i = 0; i < key; i++) {
      for (var j = 0; j < numColumns; j++) {
        var index = i + j * key;
        if (index < text.length) {
          encryptedText += text.charAt(index);
        }
      }
    }
  
    return encryptedText;
  }
  
  // Funktion zum Starten des Ratespiels
  function startGame() {
    var secretText = 'HELLO WORLD'; // Geheimer Text
    var key = 4; // Schlüssel für das Transpositions-Chiffre
    var maxAttempts = 3; // Maximale Anzahl an Versuchen
  
    var encryptedText = transpositionCipherEncrypt(secretText, key);
  
    document.getElementById('welcome').innerHTML = 'Willkommen zum Ratespiel!';
    document.getElementById('encryptedText').innerHTML = 'Der verschlüsselte Text lautet: ' + encryptedText;
  
    var attempts = 0;
    var guessed = false;
  
    var guessInput = document.getElementById('guessInput');
    var submitButton = document.getElementById('submitButton');
    var resultMessage = document.getElementById('result');
  
    submitButton.addEventListener('click', function() {
      var guess = guessInput.value;
  
      if (guess === secretText) {
        resultMessage.innerHTML = 'Glückwunsch! Du hast den Text entschlüsselt.';
        guessed = true;
      } else {
        attempts++;
        if (attempts < maxAttempts) {
          resultMessage.innerHTML = 'Leider falsch. Du hast noch ' + (maxAttempts - attempts) + ' Versuch(e) übrig.';
        } else {
          resultMessage.innerHTML = 'Du hast keine Versuche mehr. Der richtige Text lautet: ' + secretText;
        }
      }
  
      guessInput.value = ''; // Zurücksetzen des Eingabefelds
      guessInput.focus(); // Fokus auf das Eingabefeld setzen
    });
  
    guessInput.focus(); // Fokus auf das Eingabefeld setzen
  }