// Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// youu do, do not change what the function does. Good luck :)

var summation = function (num) {
    // Code here
    var total = 0;
    for (var i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}
