// 1) Is Palindrome:

function isPalindrome(str){
    // Use .split to convert the string into an array 
    // the "" split every letter into an array.
    var li1 = str.split("");
    console.log(li1)
    // Use .reverse() to reverse the array.
    var li2 = li1.reverse();
    console.log(li2)
    // Use .join() to make the reversed array items into a string. 
    var str2 = li2.join("");
    console.log(str2)
    // Compare both strings.
    if (str.toUpperCase() == str2.toUpperCase()){
        return true;
    }
    else {
        return false;
    }
}
// console.log(isPalindrome("aba"))

// Elvis' Solution:
// for(var i = x.length - 1; i >= 0; i--){
//     backwardStr += x[i];
// }
//  //Example 1: "sivlE" equal "Elvis" -> false
//  //Example 2: "racecar" equal "racecar" -> true

// if(backwardStr.toUpperCase() == x.toUpperCase()){
//     return true;
// }
// else{
//     return false;
// }


// 2) Counting Sheep:



function countSheeps(arrayOfSheep) {
    var count = 0
    for (var i= 0; (arrayOfSheep.length); i++){
        if (arrayOfSheep[i] == true ){
            count++;
        }
    }
}

// console.log(countSheeps())


// 3) Convert a Boolean to a String:

function booleanToString(Boolean){
    var b = Boolean.toString();
    console.log(b)
    console.log(typeof(b))
    return b
}

booleanToString(true)

// 4) Count number of cubes with paint on:

var countSquares = function(cuts){  
    var countSquares = (((y+1)**2)*2) + ((y + 1)*(y - 1)* 2) + (((y-1)**2)*2)

}

function countSquares(cuts){
    var countSquares = (((cuts+1)**2)*2) + ((cuts + 1)*(cuts - 1)* 2) + (((cuts-1)**2)*2);
    return countSquares;

}