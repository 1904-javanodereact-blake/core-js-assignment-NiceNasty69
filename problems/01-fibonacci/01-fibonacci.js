/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */


function fib(n) {
let temp = 1; 
let prev1 = 1;
let result;
 for (i = 3; i < n + 1; i++) {
    result  = temp  + prev1;
    prev1 = temp;
    temp = result;
 }
 if (n < 3) { 
     return 1;
 }
 return result;
}
console.log(fib(5));