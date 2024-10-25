function countOccurences (arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count
}

// On réutilise la fonction de l'exercice précédent pour obtenir l'occurence de chaque élément. -> Rappel avec éléments item (donnée tab.) dans array
// Fait grâce à la correction : Rappel important : On peut appeler une fonction dans une autre fonction

function mostFrequent (arr) {
    let countMax = 0;
    let elementMax = '';
    for (let item of arr) {
        let countElement = countOccurences(arr, item);
        if (countElement > countMax) {
            countMax = countElement;

            elementMax = item
        }
    }
    return elementMax
}
console.log(mostFrequent([1, 2, 2, 2, 3, 4, 5, 6]));
