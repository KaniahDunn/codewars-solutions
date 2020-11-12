# Simple remove duplicates
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
