//Solution 1
//Order of Operations

function orderOperations () {
  return (2 + 2) * ((2 + 2) * 2)
}

//Solution 2
//NBA Full 48 Min Average

function pointsPer48(ppg, mpg) {
return + (ppg/mpg * 48).toFixed(1) || 0
}
