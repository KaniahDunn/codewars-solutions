# Find the missing letter

# Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

# You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
# The array will always contain letters in only one case.

# Example:

# ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

# ["a","b","c","d","f"] -> "e"
# ["O","Q","R","S"] -> "P"
# (Use the English alphabet with 26 letters!)

# Have fun coding it and please don't forget to vote and rank this kata! :-)

# I have also created other katas. Take a look if you enjoyed this kata!
def find_missing_letter(chars):
    i = 0
    while i < len(chars) - 1:
        if ord(chars[i+1]) - ord(chars[i]) > 1:
            return chr(ord(chars[i]) + 1)
        i += 1

# Calculate Meal Total
# Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

# You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.
def calculate_total(subtotal, tax, tip):
    return round((subtotal + (tax*subtotal/100) + (tip*subtotal/100)), 2)

# Friend or Foe?
# Make a program that filters a list of strings and returns a list with only your friends name in it.

# If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

# Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

# i.e.

# friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
# Note: keep the original order of the names in the output.

def friend(x):
    friend = []
    for i in x: 
        if len(i) == 4: 
            friend.append(i)
    return friend 

def friend(x):
    return [i for i in x if len(i) == 4]

# Is every value in the array an array?
# Is every value in the array an array?

# This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

# Examples:

# [[1],[2]] => true
# ['1','2'] => false
# [{1:1},{2:2}] => false 
def arr_check(arr):
    for i in arr:
       if isinstance(i, list) == False:
          return False
    return True