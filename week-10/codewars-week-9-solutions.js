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
