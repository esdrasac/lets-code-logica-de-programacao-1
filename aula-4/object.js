/**
 * A linguagem JavaScript é projetada com base em um simples paradigma orientado a objeto. Um objeto é uma coleção de propriedades, 
 * e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, 
 * que é então considerada um método do objeto. Além dos objetos que são pré-definidos no browser, você pode definir seus próprios objetos.
 * 
 * new Object() vs {}
 */

const json = require('./aluno.json')

const cachorro = {
    nome: 'rex',
    apelido: 'tiu',
    status: 'acordado',
    latir: function () {
        return 'auauau'
    },
    mudarStatus: function () {
        cachorro.status = 'dormindo'
    },
}


const alunos = ['Esdras', 'João']
const notas = [5, 10]



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


// const findAluno = listaAlunos.find((aluno) => {
//     return aluno.nome === 'Esdras'
// })

// console.log(findAluno)

// const array = []

// array.forEach(() => {})

function calcularMediaDeTodosAlunos(lista) {
    for(let aluno of lista) {
        let media = 0

        for(let nota of aluno.notas) {
            media += nota
        }

        aluno.media = media / aluno.notas.length
    }
}

function buscaMelhorMedia(lista) {
    let maiorMedia = 0
    let alunoComMelhorMedia = {}
    lista.forEach((aluno) => {
        if(aluno.media > maiorMedia) {
            maiorMedia = aluno.media
            alunoComMelhorMedia = aluno
        }
    })

    return alunoComMelhorMedia
}

function buscaMenorMedia(lista) {
    let menorMedia = 10
    let alunoComMenorMedia = {}
    lista.forEach((aluno) => {
        if(aluno.media < menorMedia) {
            menorMedia = aluno.media
            alunoComMenorMedia = aluno
        }
    })

    return alunoComMenorMedia
}

console.log(listaAlunos)
calcularMediaDeTodosAlunos(listaAlunos)

console.log('===================================')
console.log(listaAlunos)
console.log('===================================')
const melhorAluno = buscaMelhorMedia(listaAlunos)
console.log(melhorAluno)
console.log((buscaMenorMedia(listaAlunos)))

const jsonParse = JSON.stringify(json)
console.log(jsonParse)
console.log(JSON.parse(jsonParse))
