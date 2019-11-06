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


// A (no more) bugs trilogy: Episode 3 - Make a Player

// Pac succesfully passed the first & second test.
// He just received the last message from the Academy,
//
// This is your last test, if you pass, your application will be accepted. You have 45 minutes.
//
// Good Luck
//
// Pac has to create a Football Player object with the following attributes :
//
// name      -> (string)
// position  -> (string)
// age       -> (int)
// dribbling -> (int)
// pass      -> (int)
// shoot     -> (int)

  function Player(name, position, age, dribbling, pass, shoot) {
    // Have fun!
    this.name = name
    this.position = position
    this.age = age
    this.dribbling = dribbling
    this.pass = pass
    this.shoot = shoot
  }
