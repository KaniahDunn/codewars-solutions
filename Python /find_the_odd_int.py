# Find the Odd Int 6kyu

# Given an array, find the integer that appears an odd number of times.
# There will always be only one integer that appears an odd number of times.

def find_it(seq):
    for num in seq:
        if seq.count(num)% 2 != 0:
            return num
