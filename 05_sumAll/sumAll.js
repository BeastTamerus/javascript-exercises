const sumAll = function (start, end) {
    let sum = 0;
    if (start < 0 || end < 0)
        return 'ERROR';
    if (typeof (start) != "number" || typeof (end) != "number")
        return 'ERROR';
    let localStart = Math.min(start, end);
    let localEnd = Math.max(start, end);
    for (let i = localStart; i <= localEnd; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
