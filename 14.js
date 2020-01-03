// Descending Order

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
	return parseInt(n.toString().split('').sort().reverse().join(''));
}

// Find the smallest integer in the array

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
	findSmallestInt(args) {
		return args.sort(function(a, b) {
			return a - b;
		})[0];
	}
}

/*Array Plus Array 
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.*/

function arrayPlusArray(arr1, arr2) {
	const arr3 = arr1.concat(arr2);
	let sum = 0;
	for (let i = 0; i < arr3.length; i++) {
		sum += arr3[i];
	}
	return sum;
}

// Sum Array
// Write a method sum (sum_array in python, sumarray in julia, SumArray in C#) that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

// Examples
// numbers = [1, 5.2, 4, 0, -1]
// puts sum(numbers)
// 9.2
// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
function sum(nums) {
	'use strict';
	var sum = 0;
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] == 13) {
			i++;
		} else {
			sum = sum + nums[i];
		}
	}
	return sum;
}
