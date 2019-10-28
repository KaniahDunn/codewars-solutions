// Grasshopper - Gradebook
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
    // Code here

    let score = (s1 + s2 +s3) / 3

    if (score >= 90 && score <= 100 ) {
      return 'A';
    }else if (score >= 80 &&  score <= 90){
      return 'B';
    }else if (score >= 70 && score < 80){
      return 'C';
    }else if (score >= 60 && score < 70) {
      return 'D';
    }else{
      return 'F';
    }
  }

  // Grasshopper - Make Change
  // Get change
  // You go to the store and have a 10 dollar bill to spend. You buy candy, chips, and soda. Find out how much change you get back from the cashier.
  // 
  // Item	Cost
  // Candy	$1.42
  // Chips	$2.40
  // Soda	$1.00
  // Create 5 variables and use the cost from the table above to set their values.
  // Add code here

  let candy = 1.42
  let chips = 2.40
  let soda = 1.00
  let money = 10
  let change = money - (candy + chips + soda)
