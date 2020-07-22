# You only need one - Beginner
# You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

# Array can contain numbers or strings. X can be either.

# Return true if the array contains the value, false if not.

def check(seq, elem):
    if elem in seq: 
        return True 
    else: 
        return False

# Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

# Examples:
# 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
# 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
# 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
# 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
def is_divisible(n,x,y):
    if((n % x == 0) and (n % y == 0)):
        return True
    else:
        return False

# Simple remove duplicatesI
# n this Kata, you will remove the left-most duplicates from a list of integers and return the result.


# # Remove the 3's at indices 0 and 3
# # followed by removing a 4 at index 1
# solve([3, 4, 4, 3, 6, 3]) # => [4, 6, 3]
def solve(arr):
    checker = []
    reverse_checker = []
    for i in reversed(arr):
        if i not in checker:
            checker.append(i)
    for i in reversed(checker):
        reverse_checker.append(i)
    return reverse_checker

# Array element parity
# In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

# Examples:

# [1, -1, 2, -2, 3] => 3

# 3 has no matching negative appearance

# [-3, 1, 2, 3, -1, -4, -2] => -4

# -4 has no matching positive appearance

# [1, -1, 2, -2, 3, 3] => 3

# (the only-positive or only-negative integer may appear more than once)

# Good luck!
def solve(arr):
    positive_checker = [elem for elem in arr if elem > 0]
    negative_checker = [abs(elem) for elem in arr if elem < 0]
    list_dif = [i for i in positive_checker + negative_checker if i not in positive_checker or i not in negative_checker]
    for num in list_dif:
        if num in negative_checker:
            return num * -1
    return list_dif[0]

# Find the divisors!
# Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

# Example:
# divisors(12); #should return [2,3,4,6]
# divisors(25); #should return [5]
# divisors(13); #should return "13 is prime"
def divisors(integer):
    count = 2 
    x = []
    while count < integer:
        if integer % count == 0:
            x.append(count)
        count+=1
    if x == []:
        return f"{integer} is prime" 
    return x 

# Get the Middle Character
# You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

# #Examples:

# Kata.getMiddle("test") should return "es"

# Kata.getMiddle("testing") should return "t"

# Kata.getMiddle("middle") should return "dd"

# Kata.getMiddle("A") should return "A"
# #Input

# A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

# #Output

# The middle character(s) of the word represented as a string.
def get_middle(s):
    return s[(len(s)-1)//2:(len(s)+2)//2]