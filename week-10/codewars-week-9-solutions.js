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
