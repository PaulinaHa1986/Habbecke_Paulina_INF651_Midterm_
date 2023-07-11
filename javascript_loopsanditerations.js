// Question 1: Write a while loop that prints the numbers from 1 to 20.
public static void main(String[] args) {
		int num =1;
		while(num<=20){
			System.out.println(num++);
		}
	}
// Question 2: Write a JavaScript function called calculateSum that takes a positive
integer n as an argument and returns the sum of all numbers from 1 to n.
function calculateSum(N) {
  var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
} 
// Question 3: Write a JavaScript function called calculateFactorialIterative that
takes a positive integer n as an argument and calculates its factorial using a loop
instead of recursion.
const calculateFactorialIterative = integer => {
  let factorial = 1;
  for(let i = 1; i <= integer; i++) {
    factorial *= i;
  }
  return factorial;
}
