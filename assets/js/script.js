// ASCII Table Codes - https://www.rapidtables.com/code/text/ascii-table.html

/*

Variables

*/

// DOM Elements
const generateBtn = document.querySelector('#generate');
const passwordLength = document.querySelector('#length');
const lowercaseCheck = document.querySelector('#hasLowercase')
const uppercaseCheck = document.querySelector('#hasUppercase')
const numbersCheck = document.querySelector('#hasNumbers')
const symbolsCheck = document.querySelector('#hasSymbols')

// object of functions to be called, with keys
const functionList = {
    lower: generateLower,
    upper: generateUpper,
    number: generateNumber,
    symbol: generateSymbols
}

/*

Click Event

*/

// Add event listener to check password options, and generate a password based on true options

generateBtn.addEventListener('click', () => {

    // check length for password, set by user
    const length = passwordLength.value;

    // check checked values of password options, set by user
    const hasLowercase = lowercaseCheck.checked;
    const hasUpercase = uppercaseCheck.checked;
    const hasNumbers = numbersCheck.checked;
    const hasSymbols = symbolsCheck.checked;

    // parameters to be passed
    // pass checked values into generatePassword function
    generatePassword(length, hasLowercase, hasUpercase, hasNumbers, hasSymbols);

})

/*

Create Functions

*/

function generatePassword(length, hasLowercase, hasUpercase, hasNumbers, hasSymbols) {

    /*
    1. string to store created password

    2. include checked options
        a. count each checked box
        b. get true or false values of eached checked boxes
        c. filter out false values (not checked)

    3. iterate through password length
        a. set condition alert if no boxes are checked
        b. loop through checked options () to create password
        c. implement each characer into new string 
        d. shuffle new string
    */

    // string to store generated password
    let pwd = ''

    // parameters being passed from addEventListener
    // count how many options are checked
    const countCheck = hasLowercase + hasUpercase + hasNumbers + hasSymbols;

    // array of objects
    // get values of each checked box
    // filter out values === false
    const countArray = [{ hasLowercase }, { hasUpercase }, { hasNumbers }, { hasSymbols }].filter(check => Object.values(check)[0]);

    if (countCheck === 0) {
        return alert("Make sure to include at least one character option, to generate a password!");
    }


    // conditional statment for no options checked
    // loop through password length
    //
}

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


// write password to the #password input
function writePassword() {

    // store generated password
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}