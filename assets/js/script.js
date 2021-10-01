// ASCII Table Codes - https://www.rapidtables.com/code/text/ascii-table.html

/*

Variable of each DOM Elements

*/

const generateBtn = document.querySelector('#generate');
const passwordLength = document.querySelector('#length');
const lowercaseCheck = document.querySelector('#hasLowercase')
const uppercaseCheck = document.querySelector('#hasUppercase')
const numbersCheck = document.querySelector('#hasNumbers')
const symbolsCheck = document.querySelector('#hasSymbols')


/*

Create Functions

*/

// creates lower case letters, starting from ASCII code 97 (a) and adding a random number between 1 and 26.
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

/*

Validation Functions

*/

function generatePassword() {
    // 1. string to store created password
    // 2. include checked options
    // 3. iterate through password length
}

// Add event listener to check password options, and generate a password based on true options

generateBtn.addEventListener('click', () => {
    const length = passwordLength.value;
    const hasLowercase = lowercaseCheck.checked;
    const hasUpercase = uppercaseCheck.checked;
    const hasNumbers = numbersCheck.checked;
    const hasSymbols = symbolsCheck.checked;

    generatePassword(length, hasLowercase, hasUpercase, hasNumbers, hasSymbols);

})


// write password to the #password input
function writePassword() {

    // store generated password
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}