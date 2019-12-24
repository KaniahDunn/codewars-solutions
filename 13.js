// Is Between?
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
	var numbers = [];
	for (let i = a; i <= b; i++) {
		numbers.push(i);
	}
	return numbers;
}

// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
	let arr = s.split(' ');
	let shortest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length <= shortest.length) {
			shortest = arr[i];
		}
	}
	return shortest.length;
}
