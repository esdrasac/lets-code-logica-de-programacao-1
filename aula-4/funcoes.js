/**
 * Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - 
 * um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve 
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 * 
 */

function multiplica(x, y) {
    return x * y
}


const arrowMultiplica = (x, y) => {
    return x * y
} 
const obj = {
    fn: () =>  {
        funcaoRecursiva()
    }
}
// console.log(multiplica(2, 2))
// console.log(arrowMultiplica(3, 2))

const squares = function (n, y) {
    let externa = this
    let interna = {}
    function square(n) {
        return this
    }

    console.log(this === square())
}

// console.log(squares(2))

const funcaoRecursiva = (numero) => {
    console.log(numero)
    if(numero > 0) {
        funcaoRecursiva(numero)
    }
}




const listaAlunos = [
    {
        nome: 'Esdras',
        notas: [4, 8, 10, 9],
        media: 0
    },
    {
        nome: 'João',
        notas: [3, 10, 8, 5],
        media: 0
    },
    {
        nome: 'Sr Joaquim',
        notas: [7, 3, 2, 5],
        media: 0
    }
]

const nossoForEach = (listaAlunos, funcaoNossoForEach) => {
    for(let i = 0; i < listaAlunos.length; i++) {
        funcaoNossoForEach(listaAlunos[i], i)
    }
}


nossoForEach(listaAlunos, () => {
    console.log(i)
})

// listaAlunos.forEach((value, i) => {

// })

// function divisao(a, b = 2) {
//     return a / b
// }


// divisao( 50, 5)