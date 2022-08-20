// Assignment code here
//Function generates the lenght of the password
function generatePassword(){
  var passwordLength = document.querySelector("#passwordLength").value;

  if(passwordLength < 8 || passwordLength > 128) {
    alert("Password lenght should be between  8 and 128 characters. Try again.");
  }
//The document.querySelector(#id) returns the first Element within the document (index.html) that matches the specified selector. 
//.checked returens true or false whether check box is checked or no. 
  var useLowerCase = document.querySelector("#lowercase").checked;
  
  var useUpperCase = document.querySelector("#uppercase").checked;
  
  var useNumbers = document.querySelector("#numbers").checked;
  
  var useSpecialCharacters = document.querySelector("#specialCharacters").checked;
  

//reversed if statement that checked if at least one of the password criteria were checked. 
  if((useLowerCase || useUpperCase || useNumbers || useSpecialCharacters) === false){
    //an alert message that alerts a user when tehy don't select at least one password criteria 
    alert("Check at least one password criteria")
  }
//four variables that will be the source of the password criteria 
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var nums = "0123456789"
  var symbols = "~`!@#$%^&*()_-+={[}]|:;<,>.?"
  var lower = "abcdefghijklmnopqrstuvwxyz";
// variable numSelectedCritea assignes to document.querySelectorAll -- selects all the passwordCriteria class that is checked in the checkboxes by the user, .length checks the length of each checked password criteria. 
  var numSelectedCritea = document.querySelectorAll('.passwordCriteria:checked').length;

  var numCharactersPerCriteria = Math.ceil(passwordLength/numSelectedCritea);

  var passwordString = '';
  var password = '';

//conditional statemnets that states if the password criteria were selected use the function randomSymbols
  if(useLowerCase){
    passwordString += randomSymbols(lower, numCharactersPerCriteria);
  }
      
  if(useUpperCase){
    passwordString += randomSymbols(uppercase, numCharactersPerCriteria);
  }

  if(useNumbers){
    passwordString += randomSymbols(nums, numCharactersPerCriteria);
  }

  if(useSpecialCharacters){
    passwordString += randomSymbols(symbols, numCharactersPerCriteria);
  }
//returns random characters
  return randomSymbols(passwordString, passwordLength);
}
//function that takes two paramenters (the source that makes up the password, number of characters per criteria that was checked)
function randomSymbols(sourceString, quantity){
//variable result with empty string will give results after fuction executes.
  var result = '';
//for loop that shafles the password 
  for (var i = 0; i < quantity; i++) {
    var randomIndex = Math.floor(Math.random() * sourceString.length);
    result = result + sourceString[randomIndex];
  }
//returns the result -- created passswrod accourding to the selected criteria. 
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password; //assignes the password 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
