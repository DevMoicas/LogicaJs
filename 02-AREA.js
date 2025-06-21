/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function areaPoligo(figura,medida1, medida2) {
    shapeMayus = figura.toUpperCase()

    if(shapeMayus === "TRIANGULO") {
        total = medida1 * medida2 / 2
        console.log(`El area del triangulo es de ${total} metros`)
    } else if(shapeMayus === "CUADRADO") {
        total = medida1 * medida2
        console.log(`El area del cuadrado es de ${total} metros`)
    } else if(shapeMayus === "RECTANGULO") {
        total = medida1 * medida2
        console.log(`El area del rectangulo es de ${total} metros`)
    }
}

areaPoligo("cuadrado", 10, 5)