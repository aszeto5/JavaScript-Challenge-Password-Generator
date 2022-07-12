// Assignment code here
var generateBtn = document.querySelector("#generate");

//Global character options
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()'";
  var numbers = "123456789"
  
//generate random password based upon criterias via series of prompts
  function generatePassword() {
    var password = "";

//Password Length
    var confirmLength = prompt("How many characters do you want to include in your password?");
    while(confirmLength <= 8 || confirmLength >= 128) {
      alert("Password length must be between 8-128 characters.");
      confirmLength = (prompt("How many characters do you want your password to include?"));
    };

//Variables for selected character types
    var upperCase = confirm("Click 'OK' to include uppercased characters in your password.")
    var lowerCase = confirm("Click 'OK' to include lowercased characters in your password.")
    var specialCase = confirm("Click 'OK' to include special characters in your password.")
    var numberCase = confirm("Click 'OK' to include numbers in your password.")

//Character Type
    if (upperCase === false && lowerCase === false && specialCase === false && numberCase === false) {
      window.alert("Please select at least ONE character type");
    
    upperCase = window.confirm("Click to inlcude upper cased letters in your password.");
    lowerCase = window.confirm("Click to include lower cased lettters in your password.");
    specialCase = window.confirm("Click to include special characters in your password.");
    numberCase = window.confirm("Click to confirm numbers in your password.");
    };

  };
  
  var chars = [];

  var confirmLength = window.prompt("How many characters do you want to include in your password?");
  //randomizing letters
  for (var i = 0; i <= confirmLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    randomLetter = chars[randomNumber];
    // password += chars.substring(randomNumber, randomNumber +1);

    password = password + randomLetter;
  }

// document.getElementById("password").value = password;

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var newpassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newpassword;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
