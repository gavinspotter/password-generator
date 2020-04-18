var _length = document.querySelector("#length");
var _lowercase = document.querySelector("#lowercase");
var _uppercase = document.querySelector("#uppercase");
var _number = document.querySelector("#numbers");
var _symbol = document.querySelector("#symbols");
var generateButton = document.querySelector("#interface-Btn");

var key_strings = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '!@#$%^&*()'
};



generateButton.addEventListener("click", () => {
    var length = +_length.value;
    var activeLower = _lowercase.checked;
    var activeUpper = _uppercase.checked;
    var activeNumber = _number.checked;
    var activeSymbol = _symbol.checked;

    generateRandomPassword(activeLower, activeUpper, activeNumber, activeSymbol, length);

});

function generateRandomPassword(lower, upper, num, sym, length) {
    var MAIN_STRING = "";
    var PASSWORD = "";

    var options = {
        lowercase: lower,
        uppercase: upper,
        number: num,
        symbol: sym
    };

    for (i = 0; i < Object.keys(options).length; i++) {
        MAIN_STRING += (Object.values(options)[i]) ? key_strings[Object.keys(options)[i]] : "";
    }

    if (MAIN_STRING != "" && length > 0) {
        for (i = 0; i < length; i++) {
            PASSWORD += MAIN_STRING[Math.floor(Math.random() * MAIN_STRING.length)];
        }

        document.querySelector("#generator").value = PASSWORD;

    } else {
        document.querySelector("#generator").value = "Include any key string and define the length!";
    }
}