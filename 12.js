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


// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:
//
//   sumDigits(10);  // Returns 1
//   sumDigits(99);  // Returns 18
//   sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.
//

function sumDigits(number){
var toStr = number.toString();
var count = 0;
if (toStr[0] === '-'){
for (let i = 1; i < toStr.length; i++){
  count +=  parseInt(toStr[i])
}
}else{
  for (let i = 0; i < toStr.length; i++){
  count +=  parseInt(toStr[i])
}
}
return count
}


// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
// Return your answer as a number.

function sumMix(x){
  var count = 0 ;
for(var i = 0; i < x.length; i++){
   count +=  parseInt(x[i])
}
  return count
}

// Is n divisible by x and y?
// Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
//
// Example:
// isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
// isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
// isDivisible(100,5,3)--> false because 100 is not divisible by 3
// isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
if (n % x === 0 && n % y === 0){
    return true
  }else{
    return false
  }
}
