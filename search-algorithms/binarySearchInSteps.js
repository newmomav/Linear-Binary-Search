// Bonus-Task binarySearchInSteps

function binarySearchInSteps(array, target) {
    let counter = 0;
    let left = 0; 
    let right = array.length -1; 
    
    while (left <= right) { 
        counter++;
        let middleIndex = Math.floor((left + right)/2); 
            if(array[middleIndex] > target){ 
                right = middleIndex -1; 
             }
             else if(array[middleIndex] < target){ 
                left = middleIndex +1;  
             }
             else {
                 return counter; 
             }
    }
    return -1;
    };
    
    console.log(binarySearchInSteps([5, 10, 15, 20, 25, 30, 35], 25)); //3
    console.log(binarySearchInSteps([5, 10, 15, 20, 25, 30, 35], 10)); //2
    console.log(binarySearchInSteps([5, 10, 15, 20, 25, 30, 35], 36)); //-1
    

    