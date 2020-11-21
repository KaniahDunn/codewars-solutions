"""
The alphabetized kata - 6kyu
Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") # "BbeehHilloTy"
"""


def alphabetized(s):
    return "".join(s for s in sorted(s, key=lambda s: s.lower()) if s.isalpha())
