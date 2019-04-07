/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let niceStr = someStr
    let tatStr = ((niceStr.split('')).reverse()).join('');
    if (niceStr !== tatStr) {
        return false;
    } else {
        return true;
    }
}

console.log(isPalindrome('evitative'));
console.log(isPalindrome('sea'));
console.log(isPalindrome('radar'));
console.log(isPalindrome('nunchuck'));
console.log(isPalindrome('kayak'));