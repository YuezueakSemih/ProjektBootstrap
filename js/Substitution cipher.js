// Define the substitution cipher function
function substitutionCipher(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    var result = "";
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        var shift = key.charCodeAt(charCode - 65) - 65;
        charCode = ((charCode - 65 + shift) % 26) + 65;
      }
      result += String.fromCharCode(charCode);
    }
    return result;
  }
  
  // Challenge logic
  function checkAnswer() {
    var answer = document.getElementById("answer").value.toUpperCase();
    if (answer === substitutionCipher("HELLO WORLD", "ZYXWVUTSRQPONMLKJIHGFEDCBA")) {
      alert("Congratulations! You solved the Substitution Cipher Challenge.");
    } else {
      alert("Sorry, that is not the correct answer. Please try again.");
    }
  }
  