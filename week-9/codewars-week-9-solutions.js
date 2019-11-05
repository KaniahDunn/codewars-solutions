//Opposite Number
// Very simple, given a number, find its opposite.
//
// Examples:
//
// 1: -1
// 14: -14
// -34: 34
var opposite = number => -(number)


// Grasshopper - Basic Function Fixer
// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
//
// Can you help me fix the function?
function addFive(num) {
  var total = num + 5
  return total
}

// Can we divide it?
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.
//
// A few cases:
//
//
// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false
//
// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true
//
// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function isDivideBy(number, a, b) {
  // good luck
  if(number % a ===0 && number % b === 0 ){
  return true
}else {
  return false
  }
  }
