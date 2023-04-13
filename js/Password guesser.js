// Das geheime Passwort festlegen
const secretPassword = "geheim123";

// Die Anzahl der zulässigen Versuche festlegen
const maxTries = 10;
let currentTry = 0;

// Funktion zur Überprüfung des eingegebenen Passworts
function checkPassword() 
{
  const input = document.getElementById("password-input").value;
  currentTry++;

  if (input.length < secretPassword.length) {
    alert("Das Passwort ist zu kurz!");
  } else if (input.length > secretPassword.length) {
    alert("Das Passwort ist zu lang!");
  } else if (input !== secretPassword) {
    alert("Richtige Länge, aber falsches Passwort!");
  } else {
    alert("Herzlichen Glückwunsch, Sie haben das Passwort richtig geraten!");
  }
  for(i = 0; i < secretPassword.length; i++)
  {
    if(input[i] !== secretPassword[i])
    {
      alert("Die Zeichen sind bis zur Stelle " + i + " richtig!");
      break;
    }
  }
  if (currentTry === (maxTries / 5)) 
  {
    alert("The first two letters are " + secretPassword[0] + secretPassword[1]);
  }
  if (currentTry === maxTries) {
    alert("Sie haben alle Versuche aufgebraucht.");
    document.getElementById("password-input").disabled = true;
    document.getElementById("check-button").disabled = true;
  }
}

// Ereignis-Listener zum Überprüfen des Passworts
document.getElementById("check-button").addEventListener("click", checkPassword);