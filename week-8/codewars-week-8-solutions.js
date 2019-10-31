// Grasshopper - Gradebook
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
    // Code here

    let score = (s1 + s2 +s3) / 3

    if (score >= 90 && score <= 100 ) {
      return 'A';
    }else if (score >= 80 &&  score <= 90){
      return 'B';
    }else if (score >= 70 && score < 80){
      return 'C';
    }else if (score >= 60 && score < 70) {
      return 'D';
    }else{
      return 'F';
    }
  }

  // Grasshopper - Make Change
  // Get change
  // You go to the store and have a 10 dollar bill to spend. You buy candy, chips, and soda. Find out how much change you get back from the cashier.
  //
  // Item	Cost
  // Candy	$1.42
  // Chips	$2.40
  // Soda	$1.00
  // Create 5 variables and use the cost from the table above to set their values.
  // Add code here

  let candy = 1.42
  let chips = 2.40
  let soda = 1.00
  let money = 10
  let change = money - (candy + chips + soda)


//Drink About
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples:

// peopleWithAgeDrink(13) === "drink toddy"
// peopleWithAgeDrink(17) === "drink coke"
// peopleWithAgeDrink(18) === "drink beer"
// peopleWithAgeDrink(20) === "drink beer"
// peopleWithAgeDrink(30) === "drink whisky"

function peopleWithAgeDrink(old) {
  if (old <= 13){
    return 'drink toddy'
  }else if (old >= 14 && old <=17 ){
    return 'drink coke'
  }else if (old >= 18 && old <= 20){
    return 'drink beer'
  }else if (old >= 21){
    return 'drink whisky'
  }
};

// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
// Our friend Pac has finally decided to pursue a career in the coding industry.
// He is a newbie, he needs to learn properly.
// Therefore, Pac wants to apply for the worldwide famous -and very demanding-
// 'C0d3r 1ns1d3' Academy for beginners.
// In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
// He has been sent an email from the Academy with the following instructions,
//
// Dear Pac,
// This is the first exercise. Find out what's wrong and fix the code.
// You have 15 minutes to send a solution.
// Good Luck.
// This code is a mess! Would you help Pac to fix the code in time?
//
// (This might be helpful -> Math.Random();)
//
// This is my first Kata, so please any feedback (especially on Test Cases) is welcome!

function yourFutureCareer () {
	var career = Math.random()
		if (career <= 0.32) {
			return 'FrontEnd Developer'
	  }else if (career <= 0.65) {
			  return 'BackEnd Developer'
		} else {
			  return 'Full-Stack Developer'
		}
    };


yourFutureCareer();


// All Star Code Challenge #14
// This Kata is intended as a small challenge for my students

// All Star Code Challenge #14

// Your non-profit company has assigned you the task of calculating some simple statistics on donations. You have a very LONG array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

// The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

// Write a function called median() that takes an array of integers as an argument and returns the median of those integers.

// Note:
// The sorting step is vital

// median([33,99,100,30,29,50]) // =>  41.5
// median([3,2,1]) // => 2
// function median(array) {
// //code here

// }

function median(values) {

  values.sort( function(a,b) {return a - b;} );

  var half = Math.floor(values.length/2);

  if(values.length % 2)
      return values[half];
  else
      return (values[half-1] + values[half]) / 2.0;
}