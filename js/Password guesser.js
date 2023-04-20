// Secret password
const secretPassword = "secret123";

// Amount of tries
const maxTries = 10;
let currentTry = 0;

// Function for checking the password
function checkPassword() 
{
  const input = document.getElementById("password-input").value;
  currentTry++;

  if (input.length < secretPassword.length) {
    alert("The password is to short!");
  } else if (input.length > secretPassword.length) {
    alert("The password is to long!");
  } else if (input !== secretPassword) {
    alert("Right length, wrong password!");
  } else {
    alert("Correct Password. Congratulations!");
  }
  for(i = 0; i < secretPassword.length; i++)
  {
    if(input[i] !== secretPassword[i])
    {
      alert("The first " + i + " letters are correct!");
      break;
    }
  }
  if (currentTry === (maxTries / 5)) 
  {
    alert("The first two letters are " + secretPassword[0] + secretPassword[1]);
  }
  else if(currentTry === (maxTries / 2))
  {
    alert("The first 4 letters are " + secretPassword[0] + secretPassword[1] + secretPassword[2] + secretPassword[3]);
  }
  if (currentTry === maxTries) {
    alert("No tries left.");
    document.getElementById("password-input").disabled = true;
    document.getElementById("check-button").disabled = true;
  }
}

document.getElementById("check-button").addEventListener("click", checkPassword);