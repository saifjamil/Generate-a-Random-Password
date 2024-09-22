const passwordField = document.getElementById('password');
const generateBtn = document.getElementById('generate-btn');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const lengthEl = document.getElementById('length');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+{}[]<>?';

function getRandomLower() {
    return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
}

function getRandomUpper() {
    return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
}

function getRandomNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const length = +lengthEl.value;
    let generatedPassword = '';
    const typesCount = uppercaseEl.checked + lowercaseEl.checked + numbersEl.checked + symbolsEl.checked;

    // Create an array of enabled options (upper, lower, number, symbol)
    const typesArray = [{ upper: uppercaseEl.checked }, { lower: lowercaseEl.checked }, { number: numbersEl.checked }, { symbol: symbolsEl.checked }].filter(
        item => Object.values(item)[0]
    );

    // If no options are selected, return empty password
    if (typesCount === 0) {
        return '';
    }

    // Loop over the length and add a random character from each selected type
    for (let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += getRandomFunc[funcName]();
        });
    }

    // Return the password, ensuring it is trimmed to the desired length
    return generatedPassword.slice(0, length);
}

// Object containing the functions to generate different characters
const getRandomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Event listener for the generate button
generateBtn.addEventListener('click', () => {
    passwordField.value = generatePassword();
});
