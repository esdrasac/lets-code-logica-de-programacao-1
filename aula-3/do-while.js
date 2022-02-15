let numeroDeAlunos = prompt('Digite o número de alunos')
const alunos = []

do {
    alunos.push(prompt('Digite o nome de um aluno:'))
    numeroDeAlunos--
} while(numeroDeAlunos > 0)

alert(alunos)

