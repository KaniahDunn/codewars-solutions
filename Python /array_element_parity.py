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
