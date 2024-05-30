// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let result = [];
      let i = 0;
      while (i < str.length) {
          if (str[i] === ' ') {
              result.push(' ');
              i++;
          } else {
              let start = i;
              while (i < str.length && str[i] !== ' ') {
                  i++;
              }
              let word = str.slice(start, i);
              result.push(word.split('').reverse().join(''));
          }
      }
      return result.join('');
  }