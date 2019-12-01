/*Get Nth Even Number

Return the Nth Even Number

nthEven(1) //=> 0, the first even number is 0
nthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)

nthEven(100) //=> 198
nthEven(1298734) //=> 2597466*/


function nthEven(n){
 return (n * 2) - 2
}

/*Century From Year
Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)*/

function century(year) {
 let divided =  year/100
 let rounded = Math.ceil(divided)
  return rounded;
}

/* Do I get a Bonus? 
  It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, and Java), "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua) or "¥" (Rust).

*/

function bonusTime(salary, bonus) {
  const symbol = '\u00A3'
  if (bonus === true) {
      return `${symbol}${salary * 10}`
  }
  else {
      return `${symbol}${salary}`
  }
}

/*Grass hopper - Combine Strings
Create a function named combineNames(combine_names in python, ruby) that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'

*/

function combineNames (firstName, lastName){
  return firstName + " " + lastName
}

/* Grasshopper - Shopping List 
Ordering food
You are in charge of ordering food for a party. You are going to need 4 sandwiches, 6 salads, 5 wraps, and 10 orders of french fries. The cost per item of food is:

food	price
sandwich	$8.00
salad	$7.00
wrap	$6.50
french fries	$1.20
Create 4 variables to store the quantity of each type of food with the following names:

sandwiches
salads
wraps
frenchFries
Create a variable named totalPrice that finds the cost of all of the food.

*/ 

let sandwiches = 4, salads = 6, wraps = 5, frenchFries = 10 

let totalPrice = (sandwiches * 8) + (salads * 7) + (wraps * 6.5) + (frenchFries * 1.2)


/* Simple Multiplication 
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

*/

function simpleMultiplication(number) {
   if (number % 2 === 0) {
     return number * 8 
   }else {
     return number * 9 
   }
}

/*Sentence to Words
  Write function splitSentence which will create a list of strings from a string.

Example:

"hello world" -> ["hello", "world"]
*/

function splitSentence(s) {
  return s.split(" ");
}