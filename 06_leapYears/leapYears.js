const leapYears = function (year) {
    let by100 = (year % 100) == 0;
    let by4 = (year % 4) == 0;
    let by400 = (year % 400) == 0;

    if (by100 && by4 && !by400)
        return false;
    else return by4;
};

// Do not edit below this line
module.exports = leapYears;
