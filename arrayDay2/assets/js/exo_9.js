
let arr1 = ["banane", "concombre", "fraise"];
let arr2 = ["fenêtre", "table", "chaise"];


function mergeArrays(arr1, arr2) {
    //Nouveau tableau 
    let compoteArray = [];
    // On parcourt indépendemment les éléments de arr1 et arr2 et on push dans le nouveau tableau
    for (let i = 0; i < arr2.length; i++) {
        compoteArray.push(arr2[i]);
    }
    for (let i = 0; i < arr1.length; i++) {
        compoteArray.push(arr1[i]);
    }
    return compoteArray;
}

console.log(mergeArrays(arr1, arr2));