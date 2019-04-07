/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    for(let i = 0; i < jagArr.length - 1; i++){
        for(let n = 0; n < jagArr.length - 1; n++){

            if (jagArr[n] > jagArr[n+1]){
                 let temp = jagArr[n]
                 jagArr[n] = jagArr[n+1]
                 jagArr[n+1]= temp;
            }
        }
    }

  
}

jagArr = [17,21,3,56,75,99,801];
bubbleSort(jagArr);
console.log(`${jagArr}`);
