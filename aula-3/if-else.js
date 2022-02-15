/**
 * A condicional if  é uma estrutura condicional que executa a afirmação, 
 * dentro do bloco, se determinada condição for verdadeira. 
 * Se for falsa, executa as afirmações dentro de else.
 */

//&&
// true && true => true
// true && false => false
// false && true => false
// false && false => false
//||
// true || true => true
// true || false => true
// false || true => true
// false || false => false
//^
// true ^ true => false
// true ^ false => true 
// false ^ true => true 
// false ^ false => false 

const notaAluno = 10

if(notaAluno >= 9) {
    console.log('Nota A')
} else if(notaAluno >= 7) {
    console.log('Nota B')
}  else if(notaAluno >= 5) {
    console.log('Nota C')
}


if(notaAluno >= 9) {
    console.log('Nota A')
} 
if(notaAluno >= 7) {
    console.log('Nota B')
}  
if(notaAluno >= 5) {
    console.log('Nota C')
}
