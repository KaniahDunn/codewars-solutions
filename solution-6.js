//Solution 1
// Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

u do, do not change what the function does. Good luck :)

var summation = function (num) {
  // Code here
 var total = 0;
    for(var i = 1; i <= num; i++){
      total += i;
    }
    return total;
}

//Solution 2
// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"

// Description
// This code is a mess! Would you help Pac to fix the code in time?



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
