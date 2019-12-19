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

// Get the Mean of an Array
//
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
// Return the average of the given array rounded down to its nearest integer.
//
// The array will never be empty.


function getAverage(marks){
  var count = 0;
  for(var i =0; i < marks.length; i++){
    count += marks[i]
  }
  return(Math.floor(count/marks.length))
}

// Invert values
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []


function invert(array) {
   return array.map((v) => v > 0 ? -v : Math.abs(v));
}
