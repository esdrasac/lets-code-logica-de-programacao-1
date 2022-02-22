// const produto = {
//     id: 1,
//     nome: 'Arroz',
//     quantidade: 10,
//     valorEntrada: 7.50,
//     margemLucro: 40,
//     unidadeMedida: 'un',
//     categoria: 'cereais',
//     frente: 'cereais',
//     fornecedor: 'Camil'
// }
// const clickDoEnvet = 'id'
// console.log(produto[clickDoEnvet])

// console.log(typeof 'texto' === 'number')

function teste () {
    return console.log('TESTE')
}

// teste()

const aluno = {}

aluno['nome'] = 'Aguilar'
aluno['notas'] = {}
aluno['notas'].nota1 = '10'
aluno['notas'].nota2 = '10'
aluno['notas'].nota3 = '10'
aluno['notas'].nota4 = '10'

// console.log(aluno)

const sobrenome = 'Aguilar'
const idade = '18'
// console.log('Esdras', sobrenome, ',', 'Idade:', idade)
// console.log('Esdras' + sobrenome)
// console.log(`Esdras ${sobrenome}, Idade: ${idade}`)


// console.log(Number('3as'))


{
    let vendas = 'ecopo 1'
    {
        let vendas = 'escopo 1 interno'
        console.log(vendas)
    }
}

{
    let vendas = 'escopo 2'
    console.log(vendas)
}