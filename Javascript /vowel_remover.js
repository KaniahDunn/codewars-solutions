//  Vowel Remover
//  Create a function called shortcut to remove all the lowercase vowels in a given string.

//  Examples
//  shortcut("codewars") // --> cdwrs
//  shortcut("goodbye")  // --> gdby


function shortcut(string){
    return string.replace(/[aeiou]/gi, '');
  }