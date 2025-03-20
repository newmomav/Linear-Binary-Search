// Task 1 Linear Search

function linearSearch(array, target) {

    for (let index = 0; index < array.length; index++) {
        if (target == array[index]) {
           return index;
        } 
    }
    return -1;
}

console.log(linearSearch([10, 23, 45, 70, 11, 15], 70));
console.log(linearSearch([10, 23, 45, 70, 11, 15], 71));
console.log("--------------------------------------------------------");

// -----------------------------------------------------------------
// Task 2: Time Complexity Analysis
// Best case would be only one comparison, one step, to find the target. --> O(1)
// Worst case occurs if the target is at the last position or not even in the array, so n steps are needed to find the target. --> O(n)
// There is no real average case. Lets assume the target is somewhere located in the middle
// of the array, it would mean the algorithm has to compare n/2 elements, but since constants are ignored it still would be O(n) 


// Task 4 Analysis
console.time("LinearSearch");
console.log(linearSearch([1, 12, 13, 15, 21, 34, 45, 47], 34)); // 0,155ms
console.timeEnd("LinearSearch");

console.time("LinearSearch");
console.log(linearSearch([1, 12, 13, 15, 21, 34, 45, 47], 11)); // 0,122ms
console.timeEnd("LinearSearch");

// array length 10000
console.log("--------------------Length of 10000-------------------");
console.time("LinearSearch");
console.log(linearSearch(Array.from({ length: 10000 }, (_,i) => i), 10002)); // 0,85ms
console.timeEnd("LinearSearch");

console.time("LinearSearch");
console.log(linearSearch(Array.from({ length: 10000 }, (_,i) => i), 0)); // 1,198ms
console.timeEnd("LinearSearch");

console.time("LinearSearch");
console.log(linearSearch(Array.from({ length: 10000 }, (_,i) => i), 5000)); // 1,331ms
console.timeEnd("LinearSearch");

console.time("LinearSearch");
console.log(linearSearch(Array.from({ length: 10000 }, (_,i) => i), 9999)); // 1,144ms
console.timeEnd("LinearSearch");

console.time("LinearSearch");
console.log(linearSearch(Array.from({ length: 10000 }, (_,i) => i), 0)); // 1,014ms
console.timeEnd("LinearSearch");

console.time("LinearSearch");
console.log(linearSearch(Array.from({ length: 10000 }, (_,i) => i), 10002)); // 0,85ms
console.timeEnd("LinearSearch");