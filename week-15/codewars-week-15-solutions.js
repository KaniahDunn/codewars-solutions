// IS PLAINDROME
// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.
//
// In Racket, the function is called palindrome?
//
// (palindrome? "nope") ; returns #f
// (palindrome? "Yay")  ; returns #t
//SOLUTION

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

// Count of positives / sum of negatives
// Given an array of integers.
//
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//
// If the input array is empty or null, return an empty array.
//
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    }
    var array = [0, 0];

    for(var i = 0; i < input.length; i++) {
        if(input[i] <= 0) {
            array[1] += input[i];
      } else {
            array[0] += 1;
      }
    }
    return array;
}
