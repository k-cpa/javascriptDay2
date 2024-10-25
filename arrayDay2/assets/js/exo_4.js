
/*Merci mdm webs doc fonction native JS qui permet de modifier un tableau en inversant l'ordre de ses éléments. 
Je peux aussi utiliser 'slice' 'reverse' si je veux copier le tableau en inversé et ne pas modifier le tableau initial */

function reverseArray (arr) { 
    return arr.reverse(); 
}
// J'appelle la fonction reverseArray avec fruits en argument pour qu'il inverse ses éléments
let reverseFruits = reverseArray(fruits); 

console.log(reverseFruits);