// Je split la phrase pour transformer en array puis je le reverse. Enfin, je rappelle avec join pour réunifier en chaine de caractères

function reverseWords(sentence) {
    sentence = sentence.split(' ');
    sentence.reverse();
    return sentence = sentence.join(" ");
}
let sentence = 'I love programming';
console.log(reverseWords(sentence));