// Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
    var digit = num.toString();
    var arr = [];
    for (var i = 0; i < digit.length; i++) {
        var squareNum = Math.pow(digit[i], 2);
        arr.push(squareNum);
    }
    return Number(arr.join(''));
}