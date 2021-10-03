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
    hasLowercase: generateLower,
    hasUpercase: generateUpper,
    hasNumbers: generateNumber,
    hasSymbols: generateSymbols
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

Functions

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
    // filter method to filters out values === false
    const countArray = [{ hasLowercase }, { hasUpercase }, { hasNumbers }, { hasSymbols }].filter(check => Object.values(check)[0]);

    // conditional statement for no option checked on page
    if (countCheck === 0) {
        return alert("Make sure to include at least one character option, to generate a password!");
    }

    // loop through password length
    for (i = 0; i < length; i += countCheck) {

        // on every loop
        // loop on through each array type (character type)
        countArray.forEach(type => {

            // variable to store each key to run funtion
            const characterType = Object.keys(type)[0];
            // e.g. hasLowercase

            // pass key into variable list of functions, to generate character
            // store each character into pwd string
            pwd += functionList[characterType]();
        });
    }

    // shuffle generated password

    const randomPassword = pwd.split("");

    shufflePassword(randomPassword);

    const finalPassword = randomPassword.join("");

    return finalPassword;

}

// function to shuffle the generate password
function shufflePassword(a) {

    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;

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