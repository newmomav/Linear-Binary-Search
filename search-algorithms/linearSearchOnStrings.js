// Bonus-Task linearSearchOnStrings

function linearSearchOnStrings(array,target) {
    for (let index =0; index < array.length; index++) {
        if (target.localeCompare(array[index], undefined, { sensitivity: "base" }) === 0) {
            return index;
        }
    }
    return -1;
};


console.log(linearSearchOnStrings(['a', 'b', 'c', 'd', 'e'], 'c')); // 2
console.log(linearSearchOnStrings(['a', 'b', 'c', 'd', 'e'], 'z')); // -1
console.log(linearSearchOnStrings(['a', 'b', 'c', 'd', 'e'], 'a')); // 0 
console.log(linearSearchOnStrings(['alma', 'bo', 'caspar', 'diana', 'emil'], 'Caspar')); // 2
