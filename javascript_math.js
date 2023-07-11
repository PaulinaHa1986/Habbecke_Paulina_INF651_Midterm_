// Question 1: Generate a random number between 1 and 100 (inclusive) using the
Math.random() function and round it to the nearest integer. Store the result in a
variable called randomNumber.
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log("Random Number between 1 and 100: ")
// Question 2: Write a JavaScript function called calculateFactorial that takes a
number as an argument and returns its factorial.
function calculateFactorial(x) 
{ 
  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
}
console.log(factorial(5)); 
// Question 3: Write a JavaScript function called calculatePower that takes two
numbers, base and exponent, as arguments and returns the result of base raised to
the power of exponent.
function calculatePower(base, exponent) {
	var result = 1;
	if(exponent == undefined)
		exponent = 2;
	for(var i=1; i<=exponent; i++) {
		result = result * base;
	}
	return result;
}
console.log(power(2,4));
