////////// Exercice 1
// let fruits = ["apple", "banana", "cherry"];
// let doubleFruits = fruits.map(fruit => fruit + fruit); // J'utilise map pour créer un nouveau tableau où fruit devient fruit + fruit pour afficher 2 fois
// console.log(doubleFruits);


////////// Exercice 2


// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits[4]); // On compte à partir de 0 j'ai donc modifié le '3' par un '4'


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// Exercice 3


// let fruits = ["apple", "banana", "cherry"];

// let fruitsJoin = fruits.join (", "); // J'utilise join pour afficher la liste d'un coup avec un seul console.log en séparant les éléménents avec une virgule
// console.log(fruitsJoin);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// Exercice 4

// let fruits = ["apple", "banana", "cherry"];

/*Merci mdm webs doc fonction native JS qui permet de modifier un tableau en inversant l'ordre de ses éléments. 
Je peux aussi utiliser 'slice' 'reverse' si je veux copier le tableau en inversé et ne pas modifier le tableau initial */

// function reverseArray (arr) { 
//     return arr.reverse(); 
// }
// J'appelle la fonction reverseArray avec fruits en argument pour qu'il inverse ses éléments
// let reverseFruits = reverseArray(fruits); 

// console.log(reverseFruits);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// Exercice 5

// let num = [1, 2, 3, 4, 2, 2, 1, 5];

// function countOccurences (arr, value) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             count++;
//         }
//     }
//     return count
// }
// let value = 2;

// console.log(countOccurences(num, value));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////// Exercice 6

// function countOccurences (arr, value) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             count++;
//         }
//     }
//     return count
// }

// On réutilise la fonction de l'exercice précédent pour obtenir l'occurence de chaque élément. -> Rappel avec éléments item (donnée tab.) dans array


// function mostFrequent (arr) {
//     let countMax = 0;
//     let elementMax = '';
//     for (let item of arr) {
//         let countElement = countOccurences(arr, item);
//         if (countElement > countMax) {
//             countMax = countElement;

//             elementMax = item
//         }
//     }
//     return elementMax
// }
// console.log(mostFrequent([1, 2, 2, 2, 3, 4, 5, 6]));



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////// Exercice 7
// Je split la phrase pour transformer en array puis je le reverse. Enfin, je rappelle avec join pour réunifier en chaine de caractères

// function reverseWords(sentence) {
//     sentence = sentence.split(' ');
//     sentence.reverse();
//     return sentence = sentence.join(" ");
// }
// let sentence = 'I love programming';
// console.log(reverseWords(sentence));

    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////// Exercice 8

// let arr = [1, 2, 3, 4, 2, 2, 1, 5];

// function filterEven(arr) {
//     return arr.filter(x => x % 2 === 0)
// }

// console.log(filterEven(arr));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////// Exercice 9

// let arr1 = ["banane", "concombre", "fraise"];
// let arr2 = ["fenêtre", "table", "chaise"];


// function mergeArrays(arr1, arr2) {
//     //Nouveau tableau 
//     let compoteArray = [];
//     // On parcourt indépendemment les éléments de arr1 et arr2 et on push dans le nouveau tableau
//     for (let i = 0; i < arr2.length; i++) {
//         compoteArray.push(arr2[i]);
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         compoteArray.push(arr1[i]);
//     }
//     return compoteArray;
// }

// console.log(mergeArrays(arr1, arr2));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////// Exercice 10

// let arr = [1, 2, 2, 3, 3, 4, 4, 4, 4, 4]

// function removeDuplicates(arr) {
//     //Nouveau tableau
//     let uniqueArr = [];
//     // condition pour savoir si c'est pas déjà dans le tableau 
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i]);
//         } 
//     }
//     return uniqueArr;
// }

// console.log(removeDuplicates(arr))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// Exercice 11
// Comparaison de l'élément + l'élément suivant 

// function isSorted (arr) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             return false
//         }
//     } 
//     return true;
// }
// console.log(isSorted([1,2,3,4]))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////// Exercice 12

// la partie "intégrée en paramètres de '.map' a été trouvé sur internet. Je comprends mais j'ai du mal à saisir comment slice(1) permet d'intégrer le reste du mot ! "
// Avant de trouver ça je comptais faire un "double niveau" de split mais ça me semble vraiment pas beau. 

// let words = ("Ce qui est créé par l'esprit est plus vivant que la matière");

// function capitalizeFirstletter(sentence) {
//     return sentence
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join (' ')
// }

// words = capitalizeFirstletter(words);

// console.log(words);

