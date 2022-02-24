/**
 * O que é função?  
 *  Uma função pode ser entendida como a relação entre dois conjuntos quaisquer (A e B) e uma regra 
 *  que permite associar um conjunto ao outro. Sendo assim, em linguagem matemática:
 *
 *          f: A -> B
 * 
 * Vamos chamar o conjunto A de domínio e o B de contradomínio. Isso significa que, se o meu domínio 
 * for sempre A, meu contradomínio será SEMPRE B. Em Javascript, podemos dizer então que na função abaixo, 
 * se o meu domínio for 2, meu contradomínio sempre será 4:
 *          const f = a => a * 2
 * 
 * Composição de funções (Teoria matemática)
 *      f(x)
 */

const dominioB = 2

//Programação Imperativa
// const _somaComDois =  function(valor) {
//     const resultado = valor + dominioB
//     return resultado
// }

const arr = [0,1,2,3,4,5,6,7,8,9]


for(let i = 0; i < 10; i++) {
    // console.log(arr[i])
}

//ProgramaçãoDeclarativa
const somaComDois = (a) => a + dominioB

// const retornoForEach = arr.forEach((valor, i) => {
//     if(valor%2 !== 0) {
//         arr.splice(i, 1)
//     }
// })


// const retornoMap = arr.map((valor) => {
//     if(valor%2 === 0) {
//         return valor
//     }
// })


// const retornoFilter = arr.filter((valor) => {
//     if(valor%2 === 0) {
//         return valor
//     }
// })


const valor = 0

// console.log(retornoForEach)

// console.log(somaComDois(2))
// console.log(arr)
// console.log(retornoFilter)


// const meuArray = []
// function chegaValor(valor) {
//     if(valor) {
//         meuArray.push(valor)
//     }
// }


const valores = [9, 11, 12, 13]

let soma = 0

valores.forEach((valor) => {
    soma = soma + valor
})
// console.log(arr.reduce((previo, atual, i, arr) => {
//     return previo + atual
// }))


// const nossoReduce = (array, fn) => {
//     array.forEach((element, i) => {
//         const retorno = fn(prev, atual, i, arr)
//     });
// }


const somaComReduce = valores.reduce((previo, atual) => {
    console.log(previo)
    return atual
})

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

console.log(somaComReduce)