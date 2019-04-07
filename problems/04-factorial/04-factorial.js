/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
//if statement to find out if the sumNum is equal to 0
    if (sumNum === 0) {
//if so return 1
        return 1;
//otherwise return the equivalent value of variable times 
// the fucntion name times the variable minus itself
    } else {
        return sumNum * factorial(sumNum - 1);
    }
}
//print to screen by way of string interpolation
// back tics with the ${} string interpolation allows 
//JS expressions directly into the string
console.log(`Your factorial is ${factorial(2)}`)