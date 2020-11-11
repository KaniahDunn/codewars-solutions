# Is your period late? 8KYU
# In this kata, we will make a function to test whether a period is late.

# Our function will take three parameters:

# last - The Date object with the date of the last period

# today - The Date object with the date of the check

# cycleLength - Integer representing the length of the cycle in days

# Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

#Solution Number One 
def period_is_late(last,today,cycle_length):
    diff = (today - last).days
    if diff > cycle_length: 
        return True
    else: 
        return False

#Solution Number Two
def period_is_late_2(last, today, cycle_length):
    return (today - last).days > cycle_length
