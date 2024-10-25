let arr = [1, 2, 2, 3, 3, 4, 4, 4, 4, 4]

function removeDuplicates(arr) {
    //Nouveau tableau
    let uniqueArr = [];
    // condition pour savoir si c'est pas déjà dans le tableau 
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        } 
    }
    return uniqueArr;
}

console.log(removeDuplicates(arr))