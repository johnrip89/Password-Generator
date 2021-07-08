// Assignment Code
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capitalLtrs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "&", "*", "?", "(", ")", "+", "-", "/", ".", ";", ":", "]", "[", "{", "}", ">", "<", "^"];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
}

function generatePassword() {
  var confirmCharLength = prompt("What is the desired character length for the password?", "8");
  var confirmCapLtrs = confirm("Would you like the password to include uppercase letters?")
  var confirmNumbers = confirm("Would you like the password to contain numbers?")
  var confirmSpecialChar= confirm("Would you like the password to contain special characters?")

  var characters = letters;

  while (!confirmCapLtrs && !confirmNumbers && !confirmSpecialChar) {
    alert("No criteria has been selected, your password will not be secure.  Please try again.");
    var confirmCharLength = prompt("What is the desired character length for the password?", "8");
    var confirmCapLtrs = confirm("Would you like the password to include uppercase letters?")
    var confirmNumbers = confirm("Would you like the password to contain numbers?")
    var confirmSpecialChar= confirm("Would you like the password to contain special characters?")
  }

  if (confirmCapLtrs) {
    characters = characters.concat(capitalLtrs);
  }

  if (confirmNumbers) {
    characters = characters.concat(numbers);
  }

  if (confirmSpecialChar) {
    characters = characters.concat(special);
  } 

  var pwd = "";
   for (let i = 0; i < confirmCharLength; i++) {
     pwd = pwd + characters[Math.floor(Math.random() * characters.length)]; 
   }

  return pwd;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
