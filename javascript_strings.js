// Question 1: Given the string "Hello, World!", write code to convert it to
uppercase and store the result in a variable called uppercaseString.
let text = "Hello, World!";
let upperCaseString = text.toUpperCase();
// Question 2: Write a JavaScript function called countVowels that takes a string as
an argument and returns the number of vowels present in the string.
function countVowel(str) { 
    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}
// Question 3: Write a JavaScript function called truncateString that takes a string
and a number maxLength as arguments and returns a truncated version of the
string if it exceeds maxLength, appending an ellipsis ("...") at the end.
truncateString = function(str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
