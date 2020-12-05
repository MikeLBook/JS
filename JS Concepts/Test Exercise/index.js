function capitalize(string) {
    return string[0].toUpperCase() + string.substr(1);
}

function reverse(string) {
    return string.split('').reverse().join('');
}

const calculator = (function () {
    add = (a, b) => {
        return a + b;
    }

    subtract = (a, b) => {
        return a - b;
    }

    multiply = (a, b) => {
        return a * b;
    }

    divide = (a, b) => {
        return a / b;
    }

    return {add, subtract, multiply, divide};
})();

const analyze = (someArray) => {
    const average = someArray.reduce((total, value, index, array) => {
        total += value;
        if (index === array.length - 1) {
            return total / array.length;
        } else {
            return total;
        }
    })
    const min = someArray.reduce((lowest, index) => {
        return index < lowest ? index : lowest;
    });
    const max = someArray.reduce((max, index) => {
        return index > max ? index : max;
    });
    return {
        average : average,
        min : min,
        max : max,
        length : someArray.length
    };
}

module.exports = {capitalize, reverse, calculator, analyze};