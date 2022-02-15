/**
 * Vetores e Matrizes são estruturas de dados muito simples que podem nos ajudar muito 
 * quando temos muitas variáveis do mesmo tipo em um algoritmo. 
 * Imagine o seguinte problema: 
 * Você precisa criar um algoritmo que lê o nome e as 4 notas de 50 alunos, 
 * calcular a média de cada aluno e informar quais foram aprovados e quais foram reprovados.
 * 
 * Nós precisariamos das seguintes variáveis:
 * 50 variáveis para armazenar os nomes dos alunos
 * 200 variáveis para armazenar as 4 notas de cada aluno
 * 50 variáveis para armazenar a média de cada aluno
 * 
 * Totalizando 300 variáveis
 * 
 * Vetor (array uni-dimensional) é uma variável que armazena várias variáveis do mesmo tipo. 
 * No problema apresentado anteriormente, nós podemos utilizar um vetor de 50 posições para 
 * armazenar os nomes dos 50 alunos.
 */

let alunos = []
let mediaDosAlunos = []

let numeroDeAlunos = prompt('Digite o número de Alunos: ')


while(numeroDeAlunos > 0) {
    alunos.push(prompt('Digite o nome do Aluno'))
    let auxMedia = 0

    for(let i = 0; i < 4; i++) {
        auxMedia += parseInt(prompt('Digite a nota ', i+1))
    }

    const media = auxMedia / 4
    console.log(media)
    mediaDosAlunos.push(media)
    numeroDeAlunos--
}

console.log(alunos)
console.log(mediaDosAlunos)
for(let index = 0; index < alunos.length; index++) {
    alert(mediaDosAlunos[index])
}





// const nomesAlunos = ['Esdras', 'Fulano de tal', 'Sr Joaquin']
// const nota =  [10, 10, 10]

// console.log(nomesAlunos)
// console.log(nota)


// console.log(nomesAlunos[0], ': ', nota[0])
// console.log(nomesAlunos[1], ': ', nota[1])
// console.log(nomesAlunos[2], ': ', nota[2])


//Matriz

// const matriz = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]

// const vetor = [1, 2, 3, 4]

// console.log('Vetor: ', vetor[2])
// console.log('Matriz: ', matriz[0][2])



