/**
 * Há inúmeras maneiras de fazer um loop em arrays e objetos em JavaScript, 
 * e as diferenças são uma causa comum de confusões. Alguns guias de estilo vão 
 * tão longe a ponto de proibir certas construções em loop. Neste artigo, 
 * iremos ver as diferenças entre iterar em uma array com as 4 construções primárias de loop:
 * 
 *      for(let i = 0; i < array.length; i++)
 * 
 *      array.forEach((valor, index) => {...any implementation...})
 * 
 *      for(let index in array)
 * 
 *      for(let value of array)
 */

const array = ['Esdras', 'João', 'Milan Moreira', 'Julia', 'Pedro', 'Giu']

for(let index in array) {
    console.log(index)
}

for(let value of array) {
    console.log(value)
}

for(let index = 0; index < array.length; index++) {
   console.log(array[index])
}


