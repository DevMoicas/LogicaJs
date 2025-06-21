/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */


function invertedWord(word) {
 let newWord = []
    for(i = 0; i < word.length; i++) {
        newWord.unshift(word[i])
    }
    return newWord.toString()
}

console.log(invertedWord("HOLA"))