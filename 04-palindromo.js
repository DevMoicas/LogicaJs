/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */



function esPalindromo(phrase) {
    let limpiarPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, "")
    let invertida = limpiarPhrase.split("").reverse().join("")
    console.log(limpiarPhrase)
    console.log(invertida)
    if(limpiarPhrase == invertida) {
        console.log("SI es palindromo")
    } else {
        console.log("NO es palindromo")
    }
}

esPalindromo("ana lleva Al OSo la, avellana")

let split = "holamundo"
let spliteado = split.split("")
let reverse = spliteado.reverse()
let unido = reverse.join("")

console.log(unido)

/**
 Explicación de los metodos que se usan:

 1.phrase.toLowerCase() <== Convierte todo el texto a miniscula,
 con esto no importa si hay mayuusculas o minusculas

 2. phrase.replace(/[^a-z0-9]/g, "") <== Significa que todo lo que no
 sean letras de la A a la z, o numeros del 0-9 lo debe remplazar por ""
 que seria remplazar por nada (borrarlos), el ^ dentro de los corchetes significa
 No, o mejor dicho, "Lo que no despues de esto, el /g que lo haga en toda la cadena no solo una vez"

 Al usar los dos metodos anteriores limpiando la frase nos arroja lo siguiente:
 Si tenemos Hola, MunDo!
 Nos imprime: holamundo
 convierte todo a minuscula, borra caracteres  que no sean letras ni numeros, incluidos espacios

 el limpiarphrase.split, convierte una cadena de texto a un array, en este caso al usar .split(""), el "", indica que queremos separar todo POR LETRAS,
 si quisieramos separar por palabras se usa " "
por ejemplo si tenemos:
hola mundo.split("") = ['h','o','l','a',' ','m','u','n','d','o']
hola mundo.split("") = ['hola', 'mundo']

En este caso debemos separar POR LETRAS.

El metodo .reverse() lo que hace es invertir el array, en este caso:
si tenemos ['h','o','l','a',' ','m','u','n','d','o']
al usar .reverse() sobre ese array obtenemos: ['o', 'd', 'n', 'u', 'm', ' ', 'a', 'l', 'o', 'h']

por ultimo, el .join(), lo que hace es unir lo que tenemos en un array a un string
si tenemos: ['o', 'd', 'n', 'u', 'm', ' ', 'a', 'l', 'o', 'h']
al usar .join(), nos regresa o,d,n,u,m, ,a,l,o,h

al no usar ningun argumento dentro de join por defecto separa por comas , si queremos que no separe por comas, debemos usar  .join("") y eso regresara:
odnumaloh

con esto concluimos y ya nomas queda comparar eso con la frase original
 */


