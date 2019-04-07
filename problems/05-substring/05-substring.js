/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */



function substring(someStr, startIndex, endIndex) {

    if (typeof someStr === 'string'){
        console.log(someStr)
    } else {
        throw ('You did not enter a string, please enter a string!');
    }


    tempraryStr = '';
    for (let i = startIndex; i < endIndex; i++) {
        tempraryStr = tempraryStr + someStr[i];
    }
    return tempraryStr;
}

let tipStr = 0
let start = 2
let end = 6
let result = substring(tipStr, start, end);
console.log(result);


