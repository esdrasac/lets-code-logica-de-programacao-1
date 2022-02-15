/**
 * Switch/case é uma estrutura de condição que define o código a ser executado 
 * com base em uma comparação de valores
 */

const nota = 8

switch (nota) {
    case 10:
    case 9:
        console.log('Nota A')
        break;
    case 8:
    case 7:
        console.log('Nota B')
        break;
    case 6:
    case 5:
        console.log('Nota C')
        break;
    default:
        console.log('Não identifiquei a nota')
        break;
}


switch (nota) {
    case 'M':
        //any
        break
    case 'F':
        //any
        break;
    case 'O':
        //any
        break;
    default:
        console.log('...Any ')
        break;
}