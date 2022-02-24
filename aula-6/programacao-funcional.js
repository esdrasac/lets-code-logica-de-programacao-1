/**
 * Programação Funcional
 * 
 * Programação funcional é o processo de construir software através de composição de funções puras, 
 * evitando compartilhamento de estados, dados mutáveis e efeitos colaterais.
 * 
 * E na Orientação a objetos como funciona?
 * 
 *  Instruções encapsuladas em métodos
 *  Representação do sistema mais perto do mundo real (Casa, Humano, Animal)
 *  Reutilização e organização de código melhor
 * 
 * Caracteristicas
 * 
 * Funções de Pirmeira Classe
 * Variáveis imutáveis
 * Tudo que rodou antes da chamada da função, não pode ter influência no seu retorno
 * Funções Puras x Impuras
 * Modificações só podem ser feitas por funções
 * Evitar loop's - Laços devem ser recursivos
 * Programação declarativa (independente) - Deve ter pelo menos um argumento e retornar algo (valor, função e etc.)
 * 
 * 
 * Programação imperativa vs declarativa
 * 
 * Imperativa === "Como" é feito
 * Declarativa === "O que é feito"
 * 
 * imperativa:
 * 
 *      const value1 = 10
 *      const value2 15
 *  
 *      const soma = function () {
 *          const res = value1 + value2
 *          return res
 *      }
 * 
 * Declarativa:
 *      const soma = function (value1, value2) {
 *          return value1 + value2
 *      }
 *  ou:
 *      const soma = (value1, value2) => value1 + value2
 * 
 * Funções Puras devem sempre retornar o mesmo valor com base no parametro 
 * e não podem depender de dados externos
 * 
 * Pura ou impura?
 * 
 * const raio = function(raio) {
 *      return Math.PI * (raio * raio)
 * }
 * 
 * const raio = function (pi, raio) {
 *      return pi * (raio * raio)
 * }
 * 
 * const retornaValorTotalProduto(valor) {
 *      return Produto.margem * valor
 * }
 * 
 * const retornaValorTotalProduto(valor, margem) {
 *      return margem * valor
 * }
 * 
 * 
 * Efeito Colateral
 * 
 * function calculaMedia(aluno) {
 *      aluno.media = (aluno.nota1 + aluno.nota2 + aluno.nota3)/3
 *      //...
 * }
 * 
 * function calculaMedia(aluno) {
 *      const alunoComMedia = aluno
 *      alunoComMedia.media = (aluno.nota1 + aluno.nota2 + aluno.nota3)/3
 *      //...
 * }
 */

//array.map()
//array.filter()
//array.reduce()

const arr = ['Esdras', 'Julia', 'Julia']

const nossoForEach = (array, fn) => {
    for(let i = 0; i < array.length; i++) {
        fn(array[i], i)

    }
}


const julia = arr.filter((nome) => nome === 'Julia')

// console.log(arr)
console.log(julia)
// nossoForEach(arr, (qualquerNome) => {
//     console.log('Batatinha frita 123')
// })