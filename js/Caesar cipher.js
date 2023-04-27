// Define the Caesar cipher function
function caesarCipher(str, shift) {
    str = str.toUpperCase();
    var result = "";
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 + shift) % 26) + 65;
      }
      result += String.fromCharCode(charCode);
    }
    return result;
  }
  
  // Challenge logic
  function checkAnswer() {
    var answer = document.getElementById("answer").value.toUpperCase();
    if (answer === caesarCipher("KHOOR ZRUOG", 2)) {
      alert("Congratulations! You solved the Caesar Cipher Challenge.");
    } else {
      alert("Sorry, that is not the correct answer. Please try again.");
    }
  }
  