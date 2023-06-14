const unsolvedText = "HELLO WORLD";
const substitutionKey = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
const maxTries = 10;
let currentTry = 0;
let revealedChars = "";

// Function to encrypt the text using the substitution cipher
function encrypt(text, key) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    if (char.match(/[A-Z]/)) {
      var index = char.charCodeAt(0) - 65;
      var encryptedChar = key.charAt(index);
      result += encryptedChar;
    } else {
      result += char;
    }
  }
  return result;
}

// Function to display the result message
function displayResult(message) {
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = message;
}

// Challenge logic
function checkAnswer() {
  var answer = document.getElementById("answer").value.toUpperCase();
  var encryptedText = encrypt(unsolvedText, substitutionKey);

  if (answer === encryptedText) {
    displayResult('Congratulations! You solved the Substitution Cipher Challenge');
  } else {
    currentTry++;
    var remainingTries = maxTries - currentTry;
    var message = 'Sorry, that is not the correct answer. Please try again.';
    
    if (remainingTries > 0) {
      message += ' Remaining tries: ' + remainingTries;
      
      if (currentTry <= unsolvedText.length && currentTry % 2 === 1) {
        var revealedChar = unsolvedText.charAt((currentTry - 1) / 2);
        revealedChars += revealedChar;
        message += ' Tips: ' + revealedChars;
      }
    } else {
      message += ' No tries left.';
      document.getElementById("answer").disabled = true;
      document.getElementById("check-button").disabled = true;
    }

    displayResult(message);
  }
}
