/*Count Odd Numbers below n

Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs!*/


function oddCount(n){
    arr = []
    for (let x = 1; x < n; x++){
      if (x % 2 != 0){
        arr.push(x)
      }
    }
    return arr.length 
  }