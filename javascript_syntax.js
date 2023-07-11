//Question 1: Identify and correct the syntax errors in the following code:
var number = 10;   //int myNumber = 10;
console.log (Number + 5); //console.log(“Number”+5);
//Question 2: Write a JavaScript function called isEven that takes a number as an argument
and returns true if the number is even and false if it is odd.
var isEven = function (n) { if (n % 2 === 0) { 
return true; }
 else { 
return false; } 
}; 
//Question 3: Write a JavaScript function called isPalindrome that takes a string as an
argument and returns true if it is a palindrome (reads the same forwards and backwards)
and false otherwise.
// function that check str is palindrome or not
function isPalindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let x = str[i];//forward character
        let y = str[j - i];//backward character
        if (x != y) {
            // return false if string does not match
            return false;
        }
    }
    /// return true if string is palindrome
    return true;
 
}
 
//function that print output if string is palindrome
function isPalindrome(str) {
    // variable that is true if string is palindrome
    let ans = isPalindrome(str);
    //condition checking ans is true or not
    if (ans == true) {
        console.log("passed string is palindrome ");
    }
    else {
        console.log("passed string not a palindrome");
    }
}

