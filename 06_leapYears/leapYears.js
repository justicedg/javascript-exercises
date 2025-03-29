const leapYears = function (year) {
    const isYearDivisibleBy4 = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleBy400 = year % 400 === 0;

    if (
        isYearDivisibleBy4 &&
        (!isCentury || isYearDivisibleBy400)
    ) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
