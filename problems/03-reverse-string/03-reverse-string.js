/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */


function reverseStr(someStr) {
    x = someStr.length;
    n = ""
    for(let a = x - 1; a >= 0 ; a--) {
        n = n + someStr[a];   
    }
    
    return n;
}


console.log(reverseStr("Have"));
console.log(reverseStr("Some"));
console.log(reverseStr("Tea"));
console.log(reverseStr("With"));
console.log(reverseStr("Your"));
console.log(reverseStr("Friend"));
