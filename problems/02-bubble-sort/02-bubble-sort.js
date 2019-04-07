/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    //First For loop iteration to reach first elment jagArr n
        for(let i = 0; i < jagArr.length - 1; i++){
    //Second For loop iteration to reach second element jagArr n+1
            for(let n = 0; n < jagArr.length - 1; n++){
    //If statment to compare the elements
                if (jagArr[n] > jagArr[n+1]){
    //var temp is assigned the jagArr n position
                    let temp = jagArr[n]
    //jagArr is assigned the jagArr n+1 position
                    jagArr[n] = jagArr[n+1]
    //jagArr n+1 is assigned the temp position
    //var temp is an empty place holder
                    jagArr[n+1]= temp;
                }
            }
        }
    
      
    }
    
    //jagArr is the array being cycled through
    jagArr = [17,21,3,56,75,99,801];
    //function call
    bubbleSort(jagArr);
    //format for printing string
    console.log(`${jagArr}`);
    
