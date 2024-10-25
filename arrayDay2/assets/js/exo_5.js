let num = [1, 2, 3, 4, 2, 2, 1, 5];

function countOccurences (arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count
}
let value = 2;

console.log(countOccurences(num, value));