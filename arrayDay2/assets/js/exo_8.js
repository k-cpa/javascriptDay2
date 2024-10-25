let arr = [1, 2, 3, 4, 2, 2, 1, 5];

function filterEven(arr) {
    return arr.filter(x => x % 2 === 0)
}

console.log(filterEven(arr));
