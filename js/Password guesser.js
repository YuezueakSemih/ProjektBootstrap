// Das geheime Passwort festlegen
const secretPassword = "geheim123";

// Die Anzahl der zulässigen Versuche festlegen
const maxTries = 10;
let currentTry = 0;

// Funktion zur Überprüfung des eingegebenen Passworts
function checkPassword() {
  const input = document.getElementById("password-input").value;
  currentTry++;

  if (input.length < 8) {
    alert("Das Passwort ist zu kurz!");
  } else if (input.length > 20) {
    alert("Das Passwort ist zu lang!");
  } else if (input !== secretPassword) {
    alert("Das Passwort ist inkorrekt! Versuchen Sie es erneut.");
  } else {
    alert("Herzlichen Glückwunsch, Sie haben das Passwort richtig geraten!");
  }

  if (currentTry === maxTries) {
    alert("Sie haben alle Versuche aufgebraucht.");
    document.getElementById("password-input").disabled = true;
    document.getElementById("check-button").disabled = true;
  }
}

// Ereignis-Listener zum Überprüfen des Passworts
document.getElementById("check-button").addEventListener("click", checkPassword);