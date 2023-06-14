
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
  
    document.getElementById('welcome').innerHTML = 'Welcome to the guessing game';
    document.getElementById('encryptedText').innerHTML = 'The encrypted word is ' + encryptedText;
  
    var attempts = 0;
    var guessed = false;
  
    var guessInput = document.getElementById('guessInput');
    var submitButton = document.getElementById('submitButton');
    var resultMessage = document.getElementById('result');
  
    submitButton.addEventListener('click', function() {
      var guess = guessInput.value;
  
      if (guess === secretText) {
        resultMessage.innerHTML = 'Congratulations! You solved the Transposition Cipher Challenge.';
        guessed = true;
      } else {
        attempts++;
        if (attempts < maxAttempts) {
          resultMessage.innerHTML = 'Wrong guess. ' + (maxAttempts - attempts) + ' Tries left.';
        } else {
          resultMessage.innerHTML = 'No more tries left. The secret word was: ' + secretText;
        }
      }
  
      guessInput.value = ''; // Zurücksetzen des Eingabefelds
      guessInput.focus(); // Fokus auf das Eingabefeld setzen
    });
  
    guessInput.focus(); // Fokus auf das Eingabefeld setzen
  }