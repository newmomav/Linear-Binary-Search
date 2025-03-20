// Binary Search recursive
function binarySearchRecursive(array, target){
    let left = 0;
    let right = array.length -1;

    return boundaryCalculation(left, right);   
    function boundaryCalculation(left, right){
        if (left > right) return -1;
        
        let middleIndex = Math.floor((left+right) /2);

        if (array[middleIndex] === target) return middleIndex;

           return  array[middleIndex] > target 
           ?  boundaryCalculation(left, middleIndex -1)
           :  boundaryCalculation(middleIndex +1, right);
        
    }
}

console.log(binarySearchRecursive([1, 12, 13, 15, 21, 34, 45, 47], 34));
console.log(binarySearchRecursive([1, 12, 13, 15, 21, 34, 45, 47], 11));
console.log("--------------------------------------------------------");

// Task 4 Analysis
console.time("BinarySearch");
console.log(binarySearchRecursive([1, 12, 13, 15, 21, 34, 45, 47], 34)); // 0,138ms
console.timeEnd("BinarySearch");

console.time("BinarySearch");
console.log(binarySearchRecursive([1, 12, 13, 15, 21, 34, 45, 47], 11)); // 0,125ms
console.timeEnd("BinarySearch");

// array length 10000
console.time("BinarySearch");
console.log(binarySearchRecursive(Array.from({ length: 10000 }, (_,i) => i), 0)); // 1,207ms
console.timeEnd("BinarySearch");

console.time("BinarySearch");
console.log(binarySearchRecursive(Array.from({ length: 10000 }, (_,i) => i), 5000)); // 0,856ms
console.timeEnd("BinarySearch");

console.time("BinarySearch");
console.log(binarySearchRecursive(Array.from({ length: 10000 }, (_,i) => i), 9999)); // 0,850ms
console.timeEnd("BinarySearch");

console.time("BinarySearch");
console.log(binarySearchRecursive(Array.from({ length: 10000 }, (_,i) => i), 0)); // 0,875ms
console.timeEnd("BinarySearch");

console.time("BinarySearch");
console.log(binarySearchRecursive(Array.from({ length: 10000 }, (_,i) => i), 10002)); // 0.723ms
console.timeEnd("BinarySearch");

// When the list is sorted:
// *binary and linear search can have similar performance for early elements
// *if target near the beginning the linear search could take less or same amount of steps as binary
// *binary search remains consistent with its logarithmic time complexity 
// *binary search is significantly faster when searching in the second half of a large array
// *for short lists, the difference between binary and linear search is minimal

// If the list is unsorted:
// *binary search requires a sorted list
// *if we only need to search a few times, sorting first might not be worth the cost
// *if we need to search very often, sorting once and then using binary search repeatedly could be more efficient
