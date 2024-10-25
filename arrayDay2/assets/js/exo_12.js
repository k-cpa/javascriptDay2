
// la partie "intégrée en paramètres de '.map' a été trouvé sur internet. Je comprends mais j'ai du mal à saisir comment slice(1) permet d'intégrer le reste du mot ! "
// Avant de trouver ça je comptais faire un "double niveau" de split mais ça me semble vraiment pas beau. 

let words = ("Ce qui est créé par l'esprit est plus vivant que la matière");

function capitalizeFirstletter(sentence) {
    return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join (' ')
}

words = capitalizeFirstletter(words);

console.log(words);