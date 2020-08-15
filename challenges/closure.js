// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*nestedFunction is the child of the parent function - myFunction. So, the child function i.e nested Function can reach OUT to the Parent function's Scope/enviornment  to get the 'internal' variable's value. Closure is made as this variable 'internal' is available in the Parent function's scope, and the ability of the child function to reach out of parent function when the variable is not defined within. 
*/


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){
let sum=0;
if(number>=1){
  /* summation func is invoked inside again until i/p parameter number >=1*/
  sum = number + summation(number-1);
} return sum;
}
/*Easy way with for Loop */
// function summation(number){
//   let sum=0;
//    for(i=0;i<=number;i++){
//      sum = sum +i
//    } return sum;
//   }
console.log('Closure Task2 Counter:')
console.log(summation(4)); /* answer 10 */
console.log(summation(0)); /* answer 0 */
console.log(summation(1)); /* answer 1 */
console.log(summation(3)); /* answer 6 */
console.log(summation(5)); /* answer 15 */
console.log(summation(10)); /* answer 55 */