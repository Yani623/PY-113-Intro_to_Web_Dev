# 1) Is Palindrome:

def is_palindrome(str = ""):
    if len(str) == 0:
        return True
    for letter in range(0, len(str)):
        if str.upper() == str[::-1].upper(): #testing index 0 to 7-(0+1)= 6
            return True

        return False

is_palindrome("raceCar")


# 2) Counting Sheep:

array1 = [True,  True,  True,  False,
True,  True,  True,  True ,
True,  False, True,  False,
True,  False, False, True ,
True,  True,  True,  True ,
False, False, True,  True ]


def count_sheeps(li=[]):
    count = 0
    for x in li:
        if x == True:
            count += 1
    return count

# print(count_sheeps(array1))


# 3) Convert a Boolean to a String:

def boolean_to_string(boolean):
    b = str(boolean)
    print(type(b))

# boolean_to_string(True)


# 4) Count number of cubes with paint on:

def count_squares(y):
    x = (((y+1)**2)*2) + ((y + 1)*(y - 1)* 2) + (((y-1)**2)*2)
    print(x)

count_squares(5)