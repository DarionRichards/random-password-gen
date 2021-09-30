// ASCII Table Codes - https://www.rapidtables.com/code/text/ascii-table.html

// Assignment Code
var generateBtn = document.querySelector('#generate');

// Generate lower case letters, starting from ASCII code 97 (a) and adding a random number between 1 and 26.
function generateLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

// Generate upper case letters, starting from ASCII code 65 (A) and adding a random number between 1 and 26.
function generateUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function generatePassword() {
    // PLEASE ADD ALL YOUR CODE HERE
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

console.log(generateUpper());