/*Third Angle of a Triangle
You are given two angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/

function otherAngle(a, b) {
  let c = 180 - (a + b) 
  return c 
 }

 /* Sum of Cubes
 Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples:

sumCubes(2) // 9
// sum of the cubes of 1 and 2 is 1 + 8
 
 */ 


 function sumCubes(n){
  let sum = 0 
    for (let i = 0; i <= n; i++){
      sum += i * i * i 
    }
    return sum
  }

  /* Keep up the hoop
  Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

-If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".

-If he doesn't get 10 hoops, return the string "Keep at it until you get it".
  
  */

  function hoopCount (n) {
    if (n >= 10) return "Great, now move on to tricks"
    if (n <= 9) return "Keep at it until you get it"
 }


//  Sort and Star 
//  You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

 function twoSort(s) {
  s.sort().toLowerCase
  return s[0].split("").join('***')
}

// Convert Boolean Values to Strings 'Yes' or 'No'
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.



function boolToWord( bool ){
  if (bool === true){
    return "Yes"
   }else{
     return "No"
   }
 }

//  Vowel Remover
//  Create a function called shortcut to remove all the lowercase vowels in a given string.

//  Examples
//  shortcut("codewars") // --> cdwrs
//  shortcut("goodbye")  // --> gdby


 function shortcut(string){
  return string.replace(/[aeiou]/gi, '');
}

// Remove First and Last Character 
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.



function removeChar(str) {
  return str.slice(1, -1);
}