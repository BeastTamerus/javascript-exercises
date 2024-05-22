const repeatString = function (input, times) {
    if (times < 0)
        return 'ERROR';
    let outputString = "";
    for (let i = 0; i < times; i++)
        outputString += input;
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
