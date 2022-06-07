// Assignment code here

//Global character options
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()'";
  var numbers = "123456789"
  
//generate random password based upon criterias via series of prompts
  function generatePassword() {
    var password = "";

//Password Length
    var confirmLength = window.prompt("How many characters do you want to include in your password?");

    while(confirmLength <= 8 || confrimlength >= 128) {
      window.alert("Password length must be between 8-128 characters.");
    };

//Character Type

    var confirmUpper = window.confirm("Click to inlcude upper cased letters in your password.");
    var confirmLower = window.confirm("Click to include lower cased lettters in your password.");
    var special = window.confirm("Click to include special characters in your password.");
    var num = window.confirm("Click to confirm numbers in your password.");

    if (confirmUpper === false && confirmLower === false && special === false && num === false) {
      window.alert("Please select at least ONE character type");
    }

  };
  
  
  //generating random letters
  for (var i = 0; i <= confirmLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

document.getElementById("password").value = password;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
