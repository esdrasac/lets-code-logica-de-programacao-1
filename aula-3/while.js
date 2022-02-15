/**
 * A declaração while cria um laço que executa uma rotina especifica enquanto a 
 * condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.
 */

let numeroDeAlunos = prompt('Digite o número de alunos')
const alunos = []

let index = 0 
while (numeroDeAlunos > 0) {
    alunos.push(prompt('Digite o nome de um aluno:'))
    numeroDeAlunos--
}

alert(alunos)
