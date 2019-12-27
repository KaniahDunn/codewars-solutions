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

// Area of a Square
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(a) {
	let r = a * 2 / Math.PI;
	return Math.round(Math.pow(r, 2) * 100) / 100;
}

// Grasshoper - Create the Room
// Escape the room
// You are creating an escape the room game. The first step is create an object called rooms that contains all of the rooms of the game. The room object should have at least 3 rooms as properties, and each individial room should have at least three properties (example: name, description, completed)
var rooms = {
	room1: {
		name: 'dining room',
		descriptions: 'try to find the dinner',
		completed: 'no'
	},
	room2: {
		name: 'living room',
		descriptions: 'this room is for lounging',
		completed: 'no'
	},

	room3: {
		name: 'kitchen',
		descriptions: 'where the people eat',
		completed: 'no'
	}
};

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
