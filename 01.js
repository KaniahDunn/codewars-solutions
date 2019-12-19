//solution one - return negative
function makeNegative(num) {
return -Math.abs(num);
}

//solution two - even or odd
function even_or_odd(number) {
  if (number % 2 === 0) {
    return("Even")
    }else if (number % 2 !== 0 ){
      return("Odd")
    }
}

//solution three - makeUpperCase
function makeUpperCase(str) {
 return str.toUpperCase()
 // Code here
}

//solution four - remove string spaces
function noSpace(x){
  return x.replace(/\s/g, '');
}

//solution five - student's final grade
function finalGrade (exam, projects) {

  if (exam > 90 || projects > 10){
    return(100)
  }else if (exam > 75 && projects >= 5) {
    return(90)
  }else if (exam > 50 && projects >= 2) {
    return(75)
  }else{
    return(0)
  }
}

//solution six - sum of positives
function positiveSum(arr) {
	for (var i=0, count = 0; i <= arr.length; i++) {
		if (arr[i] >= 0) {
			count += arr[i];
		}
	}
	return count;
}

//solution seven - lost without map
function maps(x){
    var maps = [];
    for (var i = 0; i < x.length; i++) {
        maps.push(x[i] * 2);
    }
    return maps;
}
