// Question 1: Calculate the square root of a given number and store the result in a
variable called result.
int no1 = 16;
int result = Math.sqrt(16.0); // result = 4.0 
// Question 2: Write a JavaScript function called isPrime that takes a number as an
argument and returns true if it is a prime number and false otherwise.
function isPrime(n) {
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

  // Question 3: Write a JavaScript function called generateRandomNumber that takes
  two numbers, min, and max, as arguments and returns a random number between
  min and max
  # Function to generate random number
  function generateRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
  }
  console.log("Random Number between 1 and 5: ")
  # Function call
  console.log( randomNumber(1, 5) );
  