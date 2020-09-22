// Chihori, Kengo, Ayumi

// Write an algorithm that performs linear search on a given array.

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 29, 39, 45]

const linearSearch = function(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i;
        }        
    }
};




console.log(linearSearch(testArray, 19));
console.log(linearSearch(testArray, 12));
console.log(linearSearch(testArray, 26));