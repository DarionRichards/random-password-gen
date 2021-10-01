// ASCII Table Codes - https://www.rapidtables.com/code/text/ascii-table.html

/*

Variable of DOM Elements

*/

const generateBtn = document.querySelector('#generate');
const passwordLength = document.querySelectorAll('#length');
const lowercaseCheck = document.querySelectorAll('#hasLowercase')
const uppercaseCheck = document.querySelectorAll('#hasUppercase')
const numbersCheck = document.querySelectorAll('#hasNumbers')
const symbolsCheck = document.querySelectorAll('#hasSymbols')


/*

Create Functions

*/

// create lower case letters, starting from ASCII code 97 (a) and adding a random number between 1 and 26.
function generateLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function generateUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function generateNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function generateSymbols() {
    const symbols = '!"£$%^&*(){}[]@,./<>';
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
    // CODE HERE
}

// write password to the #password input
function writePassword() {

    // store generated password
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

console.log(generateLower());