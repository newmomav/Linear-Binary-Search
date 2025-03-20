// Task 3 Binary Search iterative
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

console.log(binarySearch([5, 10, 15, 20, 25, 30, 35], 25));
console.log(binarySearch([1, 3, 5, 10, 12, 15, 20, 25, 101, 103], 20));
console.log(binarySearch([3, 4, 5, 10, 15], 10));
console.log(binarySearch([5, 15, 20, 25, 30, 35], 5));
console.log(binarySearch([10, 20, 30, 40, 50], 15))

