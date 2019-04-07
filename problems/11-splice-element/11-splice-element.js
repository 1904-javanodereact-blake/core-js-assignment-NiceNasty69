/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    let fifArr = [];
    for (i = 0; i < index; i++) {
        fifArr.push(someArr[i]);
    }
    let tifArr = [];
    for (i = 3; i < someArr.length - 1; i++) {
        tifArr.push(someArr[i]);
    }
    return [fifArr, tifArr];
}
let dimArr = [7, true, 25, 'Nancy', -5, 'Ocean'];
let fip = 3
let result = spliceElement(dimArr, fip);
console.log(result)