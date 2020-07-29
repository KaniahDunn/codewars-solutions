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

# Who likes it?
# You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

# Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

# likes [] // must be "no one likes this"
# likes ["Peter"] // must be "Peter likes this"
# likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
# likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
# likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
def likes(names):
    if len(names) == 0:
        return 'no one likes this'
    elif len(names) == 1:
        return names[0] + ' likes this'
    elif len(names) == 2:
        return names[0] + ' and ' + names[1] + ' like this'
    elif len(names) == 3:
        return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
    else:
        return names[0] + ', ' + names[1] + ' and ' + str(len(names) - 2) + ' others like this'

# Counting power sets
# In this kata, you must create a function powers/Powers that takes an array, and returns the number of subsets possible to create from that list. In other words, counts the power sets.

# For instance

# powers([1,2,3]) => 8
# ...due to...

# powers([1,2,3]) =>
# [[],
#  [1],
#  [2],
#  [3],
#  [1,2],
#  [2,3],
#  [1,3],
#  [1,2,3]]
# Your function should be able to count sets up to the size of 500, so watch out; pretty big numbers occur there!

# For comparison, my Haskell solution can compute the number of sets for an array of length 90 000 in less than a second, so be quick!

# You should treat each array passed as a set of unique values for this kata.
def powers(lst):
    return 2**len(lst)

# reverseit
# You have to create a function named reverseIt.

# Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

# Examples of inputs and subsequent outputs:

# "Hello" -> "olleH"

# "314159" -> "951413"

# [1,2,3] -> [1,2,3]
def reverse_it(data):
    if isinstance(data,bool):
        return data
    elif isinstance(data,int):
        return int(str(data)[::-1])
    elif isinstance(data,str):
        return data[::-1]
    elif isinstance(data,float):
        return float(str(data)[::-1])

    else:
        return data