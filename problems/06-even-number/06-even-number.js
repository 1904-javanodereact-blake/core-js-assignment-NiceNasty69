/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven(someNum) {
    for (let i = 0; i <= someNum; i++) {
        if (i * 2 === someNum){
            return true;
        }
    }
    return false;
}  

console.log(isEven(0));
console.log(isEven(23));
console.log(isEven(16));
console.log(isEven(75));