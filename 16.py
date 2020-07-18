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