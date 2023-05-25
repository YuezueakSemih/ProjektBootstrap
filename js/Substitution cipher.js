const unsolvedWord = "Oqpmga";
const maxTries = 10;
let currentTry = 0;
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
    let solvedWord = substitutionCipher(unsolvedWord, "ZYXWVUTSRQPONMLKJIHGFEDCBA");
    if (answer === solvedWord) {
      alert("Congratulations! You solved the Substitution Cipher Challenge.");
    } else {
      alert("Sorry, that is not the correct answer. Please try again." + solvedWord);
      currentTry++;
    }
    if(currentTry === (maxTries/5))
    {
      alert("The first letter is " + solvedWord[0] + "The letters ")
    }
    else if(currentTry === (maxTries/2))
    {

    }
  }
  