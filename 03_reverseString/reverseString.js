const reverseString = function (word) {
    let outputString = "";
    for (let i = word.length - 1; i >= 0; i--)
        outputString += word[i];
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
