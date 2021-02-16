// Short long Short 8KYU
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).
// For example:
// solution("1", "22") // returns "1221"
// solution("22", "1") // returns "1221"

// Solution One with if else statement
function solution(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
}

// Solution Two with Ternary Operator 
function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
}