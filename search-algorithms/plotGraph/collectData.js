export function collectData() {
    let dataLinear = [];
    let dataBinary = [];

    const array = [10,100,1000,10000,100000,1000000,10000000,100000000];

    // Implement the linearSearch and binarySearch functions
function linearSearch(array, target) {

    for (let index = 0; index < array.length; index++) {
        if (target == array[index]) {
           return index;
        } 
    }
    return -1;
};

function binarySearch(array, target) {
    let left = 0; 
    let right = array.length -1; 
    
    while (left <= right) { 
        let middleIndex = Math.floor((left + right)/2); 
            if(array[middleIndex] > target){ 
                right = middleIndex -1; 
             }
             else if(array[middleIndex] < target){ 
                left = middleIndex +1;  
             }
             else {
                 return middleIndex; 
             }
    }
    return -1;
};

    
    for (let i = 0; i < array.length; i++) {
        const arr = Array.from({ length: array[i] }, (_,j) => j);

        let start = performance.now();
        linearSearch(arr, arr[i]-1);
        let end = performance.now();
        dataLinear.push({time: end - start, length: array[i]});
  
        start = performance.now();
        binarySearch(arr, arr[i]-1);
        end = performance.now();
        dataBinary.push({time: end - start, length: array[i]});
    }

        return { dataLinear, dataBinary };
};

const result = collectData();
console.log(result);