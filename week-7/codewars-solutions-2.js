//SOLUTION NUMBER 1
//Remove First and Last Character
//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
 //You got this!
return str.slice(1,-1)

};

// SOLUTION NUMBER 2
//Reversed Strings
//Complete the solution so that it reverses the string value passed into it.


function solution(str) {
  return str.split("").reverse().join('');
}
