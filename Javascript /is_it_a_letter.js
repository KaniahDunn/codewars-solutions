// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

// Solution #1
function isItLetter(character) {
  if (character.match(/[a-z]/i)) {
    return true;
  } else return false;
}

// Solution #2
function isItLetter(character) {
  return /^[a-z]$/i.test(character);
}
