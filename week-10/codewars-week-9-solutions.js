  /*Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

  Find the number of Friday 13th in the given year.

  Input: Year as an integer.

  Output: Number of Black Fridays in the year as an integer.

  Examples:

  unluckyDays(2015) == 3
  unluckyDays(1986) == 1*/


  function unluckyDays(year){
    //your code here
    var count = 0;
      for (var month=0; month<12; month++) {
          var d = new Date(year,month,13);
          if(d.getDay() == 5){
            count++;
         }
      }
      return count;
  }

/*Simple Calulator
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument will be numbers.
The third argument will represent a sign indicating the operation to perform on these two numbers.

Example:
calculator(1,2,"+"); //=> result will be 3
if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"*/


  function calculator(a,b,sign){
if (a === NaN || b === NaN){
    return "unknown value"
  }else if (sign === '+'){
    return a + b
  }else if (sign === '-'){
    return a - b
  }else if (sign === '*'){
    return a * b
  }else if (sign === '/'){
    return a / b
  }else{
    return "unknown value"
  }
}

/*Growth of a population
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be:
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be:
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.*/

function nbYear(start, percent, aug, finish) {
  var years = 0;
  if ( percent < 10 ) {
    var percent = percent * .01
  } else if ( percent >= 10 ) {
    var percent = percent * .1
  }
  for ( var i = start; i < finish; i += annualGrowth ) {
    var annualGrowth = Math.round(start * percent) + aug
    start += annualGrowth
    years++
    }
  return years;
  }


// Training JS #6 Basic Data Types
function trueOrFalse(val){
  if (val == undefined){
    return "false"
  }
  else if (val == false){
    return "false"
  } else{
    return "true"
  }
}


/*V A P O R C O D E
ASC Week 1 Challenge 4 (Medium #1)

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.*/

function vaporcode(string) {
  string = string.replace(/\s/g, '')
  return string.toUpperCase().split("").join("  ");
}

Breaking Chocolate Problem

/*Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.*/


function breakChocolate(n,m) {
  if( n === 0 || m === 0){
    return 0;
  }else{
   return n * m - 1

  }

}


/*Regex validate PIN code
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.*/

function validatePIN (pin) {
  let length = pin.split('').length
  let pinLength = length ===4 || length===6
  let numbers
  //to test if string contains only numbers, no letters or special characters
  if (/^\d+$/.test(pin)){
    numbers= true
  }else{
    numbers= false
  }//if pinLength = 4 or 6 and only contains numbers, return true. else, false
  if (pinLength && numbers=== true){
    return true
  }else {
    return false
  }}


  /*Vowel Count 
  Return the number (count) of vowels in the given string.

  We will consider a, e, i, o, and u as vowels for this Kata.

  The input string will only consist of lower case letters and/or spaces.*/


  function getCount(str) {
  var vowelsCount = 0;
  let array=str.split('')
  for (let i=0; i<array.length;i++){
    if(array[i]==="a"){
      vowelsCount++
    }else if(array[i]==="e"){
      vowelsCount++
    }else if(array[i]==="i"){
      vowelsCount++
    }else if(array[i]==="o"){
      vowelsCount++
    }else if(array[i]==="u"){
      vowelsCount++
    }
  }
  return vowelsCount
}
