// Even or Odd Which is Greater? - 7KYU 

//Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
    evenCount = 0 
    oddCount = 0
    for (let i = 0; i < str.length; i++){
      newNum = Number(str[i])
      if (newNum % 2 === 0) {
        evenCount += newNum 
      }else{
        oddCount += newNum 
      }
    }
    if (evenCount > oddCount){
      return 'Even is greater than Odd'
    }else if (oddCount > evenCount) {
      return 'Odd is greater than Even'
    }else {
      return 'Even and Odd are the same'
    }
  }